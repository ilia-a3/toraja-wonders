"use client";
//prettier-ignore
import Cover from "./cover";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import Widget from "./components/widget/Widget";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getArticleOfType } from "./API/APIRequest";
import Link from "next/link";

// const TILE_SIZE = 300;

export default function Home() {
  const destinationsRef = useRef<HTMLDivElement>(null);
  // const [loaded, setloaded] = useState(false);
  const [tileSize, setTileSize] = useState(300);
  useEffect(() => {
    // setloaded(true);
    if (window && window.outerWidth < 300) {
      setTileSize(window.outerWidth * 0.9);
    }
    console.log(tileSize);
    (async () => {
      setThings(await getArticleOfType("things-to-do"));
      setDestinations(await getArticleOfType("popular-destinations"));
      setattractions(await getArticleOfType("attractions"));
    })();
  }, []);
  const [destinations, setDestinations] = useState<
    {
      imgUrls: string[];
      title: string;
      id: number;
      paragraphs: string[];
      datePublished: string;
      category: string;
    }[]
  >([]);
  const attractionsRef = useRef<HTMLDivElement>(null);
  const [attractions, setattractions] = useState<
    {
      imgUrls: string[];
      title: string;
      id: number;
      paragraphs: string[];
      datePublished: string;
      category: string;
    }[]
  >([]);
  const thingsRef = useRef<HTMLDivElement>(null);
  const [things, setThings] = useState<
    {
      imgUrls: string[];
      title: string;
      id: number;
      paragraphs: string[];
      datePublished: string;
      category: string;
    }[]
  >([]);

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

  function onHeroClick(to: string) {
    if (to == "destinations") {
      destinationsRef.current?.focus();
      document.scrollingElement;
    } else if (to == "attractions") {
      attractionsRef.current?.focus();
    } else if (to == "things") {
      thingsRef.current?.scrollTo();
    }
  }

  function moveToDestination(event: any) {
    event.preventDefault();
    onHeroClick("destinations");
  }
  function moveToAttractions(event: any) {
    event.preventDefault();
    onHeroClick("attractions");
  }
  function moveToThings(event: any) {
    event.preventDefault();
    onHeroClick("things");
  }
  return (
    <main>
      <Cover></Cover>
      {/* <hr /> */}
      <section id="hero-1">
        <div id="text-section">
          <h2>Want To Find A Place To Visit These Holidays?</h2>
          <p>Explore more about Sulawesi to persue your dream vacation</p>
          <div id="buttons">
            <Link href="#places-to-explore" className="Link">
              Popular Destinations
            </Link>
            <Link href="#top-attractions" className="Link">
              Biggest Attractions
            </Link>
            <Link href="#things-to-do" className="Link">
              Things To Do
            </Link>
          </div>
        </div>
        <img
          src="images/img-1.jpg"
          alt="Staircase down from beautiful mountain top."
        />
      </section>
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
                    img={w.imgUrls[0]}
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
          <p>Highly rated and recommended attractions that make up Sulawesi.</p>
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
                    img={w.imgUrls[0]}
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
                    img={w.imgUrls[0]}
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
