"use client";
import "./styles.scss";
import PageCover from "@/app/PageCover";
import { ArticleSection, Blog } from "@/app/store/APIRequest";
import { Ref, RefObject, useEffect, useRef, useState } from "react";

export default function NewArticlePage() {
  const [sections, setSections] = useState<
    { ref: RefObject<any>; data: ArticleSection }[]
  >([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    sections.forEach((s) => {
      s.ref = useRef();
    });
  });

  const newSection = (
    title: string,
    type: string,
    text: string,
    imgUrl: string
  ) => {
    const id = sections.length + 1;
    const s: { ref: RefObject<any>; data: ArticleSection } = {
      ref: useRef(),
      data: {
        id,
        title,
        type,
        text,
        imgUrl,
      },
    };
    sections.push(s);
  };
  const newImgSection = (title: string, imgUrl: string) => {
    newSection(title, "IMG", "", imgUrl);
  };
  function newSectionHandler() {}
  return (
    <div id="NewArticlePage">
      <PageCover title={"New Article"} />
      <div id="meta">
        <div id="title">
          <label htmlFor="titleInput">Title</label>
          <input type="text" id="titleInput" />
        </div>
        <div id="title">
          <label htmlFor="categoryInput">Category</label>
          <input type="text" id="categoryInput" />
        </div>
      </div>
      {sections.map((s) => (
        <div className="section">
          <textarea ref={s.ref} rows={5} cols={5}></textarea>
        </div>
      ))}
      <div id="add-section">
        <label htmlFor="sectionTitle">Title</label>
        <input type="text" id="sectionTitle" />
        <label htmlFor="sectionType">Type Of Section</label>
        <input
          type="radio"
          name="sectionType"
          id="sectionTypeIMG"
          value={"s"}
        />
        <label htmlFor="sectionTypeIMG">IMG</label>
        <input
          type="radio"
          name="sectionType"
          id="sectionTypeTXT"
          value={"s"}
        />
        <label htmlFor="sectionTypeTXT">TXT</label>
        <label htmlFor="sectionText">Text</label>
        <input type="text" id="sectionText" />
        <label htmlFor="sectionImgUrl">Image URL</label>
        <input type="text" id="sectionImgUrl" />
        <button onClick={newSectionHandler}>Add Section</button>
      </div>
    </div>
  );
}
