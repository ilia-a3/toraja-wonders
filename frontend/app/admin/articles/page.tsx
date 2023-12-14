"use client";
import PageCover from "@/app/PageCover";
import { getAllArticles, Blog } from "@/app/store/APIRequest";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ManageArticlesPage() {
  const [articles, setArticles] = useState<Blog[]>([]);
  useEffect(() => {
    // console.log("k");
    // (async () => {
    //   setArticles(await getAllArticles());
    // })();
  }, []);
  const refresh = async () => {
    const res = await fetch("/api/getBlogs", { method: "GET" });
    const js = await res.json();
    console.log("THIS: " + js);
    try {
      // .catch((r) => console.log(r))
      // .then((b) => console.log(b));
    } catch {
      console.log("ERROR");
    }
  };
  return (
    <div id="ManageArticlesPage">
      <PageCover title={"Manage Articles"} />
      <button onClick={refresh}>refresh</button>
      <h1>Select an article to manage</h1>
      <div id="articles">
        {articles.map((a) => (
          <Link
            className="article"
            href={
              "/admin/articles/by-id/" +
              a.title.toLowerCase().replaceAll(" ", "-")
            }
          >
            <p>{a.title}</p>
          </Link>
        ))}
      </div>
      <Link href={"/admin/articles/new"}>Create New Article</Link>
    </div>
  );
}
