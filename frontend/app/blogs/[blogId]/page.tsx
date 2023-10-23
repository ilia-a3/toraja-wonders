"use client";
import "./styles.scss";
import PageCover from "@/app/PageCover";
import { getArticleByTitle, Blog } from "@/app/store/APIRequest";
import { useEffect, useState } from "react";
export default function BlogPage(props: { params: { blogId: string } }) {
  console.log(props);
  const title = props.params.blogId.replaceAll("-", " ");
  const [blog, setBlog] = useState<Blog | null>();
  useEffect(() => {
    getArticleByTitle(title).then((b) => setBlog(b));
  }, []);

  return (
    <div id="BlogPage">
      <PageCover title={blog?.title || "Blog Not Found"} />
      <h1>{title}</h1>
      {blog?.sections.map((s) => (
        <div className={"section " + s.type}>
          {s.type == "MIX" ? (
            <>
              <img src={s.imgUrl} alt={s.text} />
              <p>{s.text}</p>
            </>
          ) : s.type == "IMG" ? (
            <img src={s.imgUrl} alt={s.text} />
          ) : s.type == "TXT" ? (
            <p>{s.text}</p>
          ) : (
            <p>There is a problem with this section.</p>
          )}
        </div>
      ))}
    </div>
  );
}
