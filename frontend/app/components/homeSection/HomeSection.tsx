import Blog from "@/app/store/APIRequest";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Widget from "../widget/Widget";
import { ReactNode, useRef } from "react";

export default function HomeExploreSection(props: {
  title: string;
  description: string;
  elements: Blog[];
  tileSize: number;
  coverUrl: string;
}) {
  const scrRef = useRef<HTMLDivElement>(null);
  const name = props.title
    .replaceAll("-", " ")
    .replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  function forward() {
    scrRef.current?.scrollBy({
      left: props.tileSize,
      behavior: "smooth",
    });
  }
  function back() {
    scrRef.current?.scrollBy({
      left: -props.tileSize,
      behavior: "smooth",
    });
  }

  return (
    <section id="popular-destinations" className="explore-section">
      <div className="description">
        <img
          src={props.coverUrl}
          alt="cover"
          width={props.tileSize}
          className="explore-cover"
        />
        <h3>{name}</h3>
        <p>{props.description}</p>
      </div>
      {props.elements.length > 0 && (
        <div className="scroll-menu" ref={scrRef}>
          <button onClick={back} className="arrow left">
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          </button>
          <button onClick={forward} className="arrow right">
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </button>
          <div className="scr">
            {props.elements.map((w) => (
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
  );
}
