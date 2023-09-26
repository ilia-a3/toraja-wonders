"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import PageCover from "../PageCover";

export default function adminHomePage() {
  const [tokens, setTokens] = useState<{
    refreshToken: string;
    accessToken: string;
  } | null>(null);
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const aToken = localStorage.getItem("accessToken");
    const rToken = localStorage.getItem("refreshToken");
    if (aToken != null && rToken != null) {
      setTokens({
        refreshToken: rToken,
        accessToken: aToken,
      });
    }
  }, []);
  return (
    <div id="AdminHomePage">
      <PageCover title="admin page"></PageCover>
      {auth ? (
        <div id="authenticated">Authenticated</div>
      ) : (
        <Link href="/auth/login">Login</Link>
      )}
    </div>
  );
}
