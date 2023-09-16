import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import "./SearchComponent.scss";

export default function SearchComponent(props: { extraClass?: string }) {
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([
    // "Item 1",
    // "Item 2",
    // "Item 3",
  ]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const onSearchChange = () => {
    console.log(searchInputRef.current?.value);
    const suggestions: string[] = [];
    searchInputRef.current?.value.split("").forEach((v) => {
      suggestions.push(v);
    });
    setSearchSuggestions(suggestions);
  };
  return (
    <div
      className={`search ${props.extraClass || ""}`}
      style={{
        height:
          searchSuggestions.length > 0
            ? `${44 + 40 + searchSuggestions.length * 25}px`
            : "44px",
      }}
    >
      <form className="search-bar" role="search">
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
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
