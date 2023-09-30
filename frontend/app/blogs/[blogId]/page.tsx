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
      Blog: {title}
    </div>
  );
}
