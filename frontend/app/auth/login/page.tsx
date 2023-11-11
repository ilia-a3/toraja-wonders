"use client";
import PageCover from "@/app/PageCover";
import "./styles.scss";
import { FormEvent, useRef, useState } from "react";
import { setAuth } from "@/app/store/auth";
import Link from "next/link";
export default function loginPage() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(0);
  const [success, setSuccess] = useState(false);
  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("a");
    const formData = new FormData(event.currentTarget);
    if (process.env.NEXT_PUBLIC_AUTH_URL == null) {
      console.warn("Environment variable not set.");
      return;
    }
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_AUTH_URL + "login", {
        method: "POST",
        body: JSON.stringify({
          username: usernameRef.current?.value,
          password: passwordRef.current?.value,
        }),
        headers: new Headers({
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000/",
          Origin: "http://localhost:3000/",
          "Access-Control-Allow-Credentials": "true",
        }),
      });
      if (res.status == 401) {
        setError(-1);
      } else if (res.status == 200) {
        const tokens = await res.json();
        localStorage.setItem("refreshToken", tokens.refreshToken);
        localStorage.setItem("accessToken", tokens.accessToken);
        setError(1);
        setSuccess(true);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {!success ? (
        <div id="LoginPage">
          <PageCover title="Login"></PageCover>
          <form
            onSubmit={submitForm}
            className={`form ${error == -1 ? "error" : "normal"}`}
          >
            <div className="form-input">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                ref={usernameRef}
              />
            </div>
            <div className="form-input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                ref={passwordRef}
              />
            </div>
            {error == -1 ? <div id="error">Invalid Credentials</div> : null}
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div id="SuccessPage">
          <PageCover title="Login Successful"></PageCover>
          <h2>Login Successful! Here are links to admin pages.</h2>
          <div id="links">
            <Link href="admin/create-blog" className="link">
              Create A New Blog
            </Link>
            <Link href="admin/edit-blog" className="link">
              Edit A Blog
            </Link>
            <Link href="admin/new-admin" className="link">
              Create New Admin
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
