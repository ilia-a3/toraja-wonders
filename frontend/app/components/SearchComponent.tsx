import { faMagnifyingGlass, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import "./SearchComponent.scss";
import { Blog, searchArticles } from "../store/APIRequest";
import Link from "next/link";
import { list } from "postcss";
import { metadata } from "../layout";

export default function SearchComponent(props: { extraClass?: string }) {
  const [searchSuggestions, setSearchSuggestions] = useState<Blog[]>([
    // "Item 1",
    // "Item 2",
    // "Item 3",
  ]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const onSearchChange = () => {
    console.log(searchInputRef.current?.value);
    (async (q: string) => {
      const articles = await searchArticles(q);
      console.log(articles);
      setSearchSuggestions(articles);
    })(searchInputRef.current?.value || "");
  };
  return (
    <div className={`searchBar ${props.extraClass || ""}`}>
      {/* //   style={{
    //     height:
    //       searchSuggestions.length > 0
    //         ? `${44 + 40 + searchSuggestions.length * 25}px`
    //         : "44px",
    //   }}
    // > */}
      {/* <form className="search-bar" role="search">
        <input
          type="search"
          id="search-input"
          placeholder="Search..."
          aria-label="Search through articles"
          ref={searchInputRef}
          onChange={onSearchChange}
        />
        <button>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            // style={{ color: "#cccccc", width: "2rem", display: "inline-block" }}
            id="search-icon"
          />
        </button>
        </form>
        <ul className="search-suggestions">
        {searchSuggestions.map((s) => (
          <li key={s.id}>
          <Link href={`/blogs/${s.title.toLowerCase().replaceAll(" ", "-")}`}>
          {s.title}
          </Link>
          </li>
          ))}
        </ul> */}
      <form autoComplete="off">
        <div className="autocomplete" style={{ width: "300px" }}>
          <div className="bar">
            <input
              id="myInput"
              type="text"
              name="search"
              placeholder="Search..."
              ref={searchInputRef}
              onChange={onSearchChange}
            />
            <Link href="/" className="icon">
              <FontAwesomeIcon icon={faSearch} />
            </Link>
          </div>
          {searchSuggestions && (
            <div className="autocomplete-list">
              {searchSuggestions.map((s) => (
                <div className="suggestion">
                  <Link
                    href={`/blogs/${s.title
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    {s.title}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
