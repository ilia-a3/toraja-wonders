"use client";
//prettier-ignore
import Cover from "./cover";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import Widget from "./components/widget/Widget";
import {
  faArrowLeft,
  faArrowRight,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Blog, getArticleOfType } from "./store/APIRequest";
import Link from "next/link";
import HomeExploreSection from "./components/homeSection/HomeSection";

// const TILE_SIZE = 300;

export default function Home() {
  const destinationsRef = useRef<HTMLDivElement>(null);
  // const [loaded, setloaded] = useState(false);
  const [tileSize, setTileSize] = useState(300);
  // useEffect(() => {
  //   // setloaded(true);
  //   if (window && window.outerWidth < 300) {
  //     setTileSize(window.outerWidth * 0.9);
  //   }
  //   console.log(tileSize);
  //   (async () => {
  //     setThings(await getArticleOfType("things-to-do"));
  //     setDestinations(await getArticleOfType("popular-destinations"));
  //     setattractions(await getArticleOfType("attractions"));
  //   })();
  // }, []);
  const [destinations, setDestinations] = useState<Blog[]>([]);
  const attractionsRef = useRef<HTMLDivElement>(null);
  const [attractions, setattractions] = useState<Blog[]>([]);
  const thingsRef = useRef<HTMLDivElement>(null);
  const [things, setThings] = useState<Blog[]>([]);

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
  return (
    <main>
      <Cover></Cover>
      {/* <hr /> */}
      <section id="hero-1">
        <div id="text-section">
          <h2>Want To Find A Place To Visit These Holidays?</h2>
          <p>Explore more about Sulawesi to persue your dream vacation</p>
          <div id="buttons">
            <Link href="/blogs/popular-destinations" className="Link">
              Popular Destinations
            </Link>
            <Link href="/blogs/top-attractions" className="Link">
              Biggest Attractions
            </Link>
            <Link href="/blogs/things-to-do" className="Link">
              Things To Do
            </Link>
          </div>
        </div>
        <img
          src="images/img-1.jpg"
          alt="Staircase down from beautiful mountain top."
        />
      </section>
      <section id="orderHome">
        <h1>Want To Travel Indonesia?</h1>
        <h3>Explore various packages to make your trip more memorable.</h3>
        <Link href={"/packages"}>
          <button>
            Our Package Options
            <span>
              <FontAwesomeIcon icon={faArrowRightLong} />
            </span>
          </button>
        </Link>
      </section>
    </main>
  );
}
