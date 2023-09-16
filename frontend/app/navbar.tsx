"use client";
import { faAngleLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Link from "next/link";
import SearchComponent from "./components/SearchComponent";

export default function Navbar({}) {
  const [menuOpen, setMenuOpen] = useState("closed");
  const [loaded, setloaded] = useState(false);
  useEffect(() => setloaded(true));
  const navs: { name: string; uri: string }[] = [
    { name: "Places to explore", uri: "/explore" },
    { name: "packages", uri: "/packages" },
    { name: "About Indonesia", uri: "/about-indonesia" },
    { name: "Things to do in Indonesia", uri: "/things-to-do" },
    { name: "History of Sulawesi Island", uri: "/history" },
    { name: "Contact Us", uri: "/contact-us" },
    { name: "Partnerships", uri: "/partnerships" },
  ];
  const toggleMenu = () => {
    if (menuOpen == "closed") {
      setMenuOpen("opening");
      setTimeout(() => {
        setMenuOpen("open");
      }, 500);
    } else if (isOpen()) {
      setMenuOpen("closed");
    }
  };

  const isOpen = () => {
    return menuOpen == "open";
  };
  const isOpening = () => {
    return menuOpen == "opening";
  };
  // window = window;

  const onOpenMenu = () => {
    return (
      <>
        {window.outerWidth <= 530 ? (
          <SearchComponent extraClass="search-open" />
        ) : null}

        <div className="navigation">
          <div className="navs">
            {navs.map((nav) => (
              <a className="nav" href={nav.uri} key={nav.uri}>
                {nav.name}
              </a>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div
      className="nav-menu"
      style={{
        width:
          !isOpening() && !isOpen()
            ? "0"
            : window.outerWidth > 600
            ? "35rem"
            : "100vw",
      }}
    >
      <div className="Navbar">
        <Link href="/">
          <img src="images/logo-2.jpg" alt="logo" className="logo" />
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen() ? (
            <div id="open" className="menu-bar-icon">
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
          ) : (
            <div id="closed" className="menu-bar-icon">
              <FontAwesomeIcon icon={faBars} />
            </div>
          )}
        </div>
        {loaded && window.outerWidth > 530 ? (
          <SearchComponent extraClass="search-closed" />
        ) : null}
      </div>
      {isOpen() ? onOpenMenu() : null}
    </div>
  );
}
