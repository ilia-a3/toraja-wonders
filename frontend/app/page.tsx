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
import { Blog, getAllArticles, getArticleOfType } from "./store/APIRequest";
import Link from "next/link";
import HomeExploreSection from "./components/homeSection/HomeSection";
import "./article.scss";
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
  const [blog, setBlog] = useState<Blog>();
  useEffect(() => {
    setBlog(getAllArticles()[0]);
  });

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
            <Link href="/blogs/guide" className="Link">
              Guide To Indonesia
            </Link>
            <Link href="/blogs/tips" className="Link">
              Tips For Exploring Sulawesi
            </Link>
            <Link href="/blogs/discovering" className="Link">
              Where To Explore
            </Link>
          </div>
        </div>
        <img
          src="images/img-1.jpg"
          alt="Staircase down from beautiful mountain top."
        />
      </section>
      <section id="read">
        <div id="title">
          <h3>{blog?.display}</h3>
        </div>
        <ol>
          <div id="backdrop">
            {blog?.sections.map((s) => (
              <div className={"section " + s.type} key={s.id}>
                <h3>{s.title}</h3>
                {s.type == "MIX" ? (
                  <>
                    <img src={s.imgUrl} alt={s.text} />
                    <p>{s.text}</p>
                  </>
                ) : s.type == "IMG" ? (
                  <img src={s.imgUrl} alt={s.text} />
                ) : s.type == "TXT" ? (
                  <p>{s.text}</p>
                ) : s.type == "BLT" ? (
                  <li className="txt-blt">{s.text}</li>
                ) : s.type == "INTR" ? (
                  <p className="txt-intr">{s.text}</p>
                ) : s.type == "CONC" ? (
                  <p className="txt-conc">{s.text}</p>
                ) : (
                  <p>There is a problem with this section.</p>
                )}
              </div>
            ))}
          </div>
        </ol>
        <button id="read-more">
          <Link href={"/blogs/guide"}>Continue Reading</Link>
        </button>
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
