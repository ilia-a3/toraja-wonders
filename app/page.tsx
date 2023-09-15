"use client";
import Link from "next/link";
//prettier-ignore
import Cover from "./cover";
import Navbar from "./navbar";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Widget from "./components/widget/Widget";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const TILE_SIZE = 300;

export default async function Home() {
  const destinationsRef = useRef<HTMLDivElement>(null);
  // const [loaded, setloaded] = useState(false);
  const [tileSize, setTileSize] = useState(300);
  useEffect(() => {
    // setloaded(true);
    if (window && window.outerWidth < 300) {
      setTileSize(window.outerWidth * 0.9);
    }
    console.log(tileSize);
  }, []);
  const [destinations, setDestinations] = useState<
    { imgUrl: string; title: string; id: number }[]
  >([]);
  const attractionsRef = useRef<HTMLDivElement>(null);
  const [attractions, setattractions] = useState<
    { imgUrl: string; title: string; id: number }[]
  >([]);
  const thingsRef = useRef<HTMLDivElement>(null);
  const [things, setThings] = useState<
    { imgUrl: string; title: string; id: number }[]
  >([]);

  setDestinations(await getArticleOfType("popular-destinations"));
  setattractions(await getArticleOfType("attractions"));

  function forwardDest() {
    destinationsRef.current?.scrollBy({
      left: tileSize,
      behavior: "smooth",
    });
  }
  function backDest() {
    destinationsRef.current?.scrollBy({
      left: -tileSize,
      behavior: "smooth",
    });
  }
  function forwardPlace() {
    attractionsRef.current?.scrollBy({
      left: tileSize,
      behavior: "smooth",
    });
  }
  function backPlace() {
    attractionsRef.current?.scrollBy({
      left: -tileSize,
      behavior: "smooth",
    });
  }
  function forwardThings() {
    thingsRef.current?.scrollBy({
      left: tileSize,
      behavior: "smooth",
    });
  }
  function backThings() {
    thingsRef.current?.scrollBy({
      left: -tileSize,
      behavior: "smooth",
    });
  }
  return (
    <main>
      <Cover></Cover>
      <section id="places-to-explore">
        {/* <Link href="example">Amongus</Link> */}
        <h2>Where to explore in Sulawesi</h2>
        <section id="popular-destinations" className="explore-section">
          <h3>Popular Destinations</h3>
          <p>
            Some of the hottest and most popular destinations that are visited
            very frequently.
          </p>
          {destinations.length > 0 && (
            <div className="scroll-menu" ref={destinationsRef}>
              <button onClick={backDest} className="arrow left">
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
              </button>
              <button onClick={forwardDest} className="arrow right">
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
              <div className="scr">
                {destinations.map((w) => (
                  <Widget
                    key={w.id}
                    img={w.imgUrl}
                    title={w.title}
                    first={w.id == 0}
                  />
                ))}
              </div>
            </div>
          )}
        </section>
        <hr />
        <section id="top-attractions" className="explore-section">
          <h3>Biggest Attractions</h3>
          <p>Highly rated and recommended attractions that make up Sulawesi</p>
          {attractions.length > 0 && (
            <div className="scroll-menu" ref={attractionsRef}>
              <button onClick={backPlace} className="arrow left">
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
              </button>
              <button onClick={forwardPlace} className="arrow right">
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
              <div className="scr">
                {attractions.map((w) => (
                  <Widget
                    key={w.id}
                    img={w.imgUrl}
                    title={w.title}
                    first={w.id == 0}
                    className="widget"
                  />
                ))}
              </div>
            </div>
          )}
        </section>
        <hr />
        <section id="things-to-do" className="explore-section">
          <h3>Things To Do</h3>
          <p>
            Not sure what Sulawesi is about? Find out about what you can do.
          </p>
          {things.length > 0 && (
            <div className="scroll-menu" ref={thingsRef}>
              <button onClick={backThings} className="arrow left">
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
              </button>
              <button onClick={forwardThings} className="arrow right">
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
              <div className="scr">
                {things.map((w) => (
                  <Widget
                    key={w.id}
                    img={w.imgUrl}
                    title={w.title}
                    first={w.id == 0}
                  />
                ))}
              </div>
            </div>
          )}
        </section>
      </section>
    </main>
  );
}
