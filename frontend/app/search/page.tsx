"use client";
import { useState } from "react";
import { Blog, searchArticles } from "../store/APIRequest";

export default function SearchPage() {
  const [results, setResults] = useState<Blog[]>([]);
  function getResults() {
    (async (q: string) => setResults(await searchArticles(q)))("");
  }
  return <div id="SearchPage"></div>;
}
