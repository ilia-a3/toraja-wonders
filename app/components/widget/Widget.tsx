import Link from "next/link";
import "./Widget.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Widget = (props: {
  title: string;
  img: string;
  first?: boolean;
  className?: string;
}) => {
  return (
    <div
      className="widget"
      // style={{ marginLeft: props.first ? "0" : "20px" }}
    >
      <p>{props.title}</p>
      <div className="button">
        <button>
          <Link href="/">
            Learn More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>{" "}
          </Link>
        </button>
      </div>
      <img src={props.img} />
    </div>
  );
};

export default Widget;
