"use client";
import "./styles.scss";
import PageCover from "@/app/PageCover";
import addArticle, { ArticleSection, Blog } from "@/app/store/APIRequest";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import NewPageSection from "./section";
import { useRouter } from "next/router";
import { authenticated } from "@/app/store/auth";
import Link from "next/link";

export default function NewArticlePage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const [sections, setSections] = useState<ArticleSection[]>([]);
  const blogTitleRef = useRef<HTMLInputElement>(null);
  const blogCategoryRef = useRef<HTMLInputElement>(null);

  const [newSectionType, setNewSectionType] = useState<string | null>(null);
  const newSectionTitleRef = useRef<HTMLInputElement>(null);

  function newSection(
    title: string,
    type: string,
    text: string,
    imgUrl: string
  ) {
    const id = sections.length + 1;
    const s: ArticleSection = {
      id,
      title,
      type,
      text,
      imgUrl,
    };
    console.log("j");

    setSections([...sections, s]);
    setNewSectionType(newSectionType);
  }

  const newSectionHandler = () => {
    if (!newSectionTitleRef.current || newSectionTitleRef.current.value == "") {
      console.log("please enter title.");
      return;
    }
    if (!newSectionType) {
      console.log("please select a section type.");
      return;
    }
    newSection(newSectionTitleRef.current.value, newSectionType, "", "");
    console.log(sections);
  };
  function onNewSectionTypeChange(changeEvent: ChangeEvent<HTMLInputElement>) {
    setNewSectionType(changeEvent.target.value);
    console.log(changeEvent.target.value);
  }
  function onSubmit() {
    if (!blogTitleRef.current) {
      alert("Please enter a title for the blog.");
      return;
    }
    if (!blogCategoryRef.current) {
      alert("Please specify a category for the blog.");
      return;
    }
    const payload: {
      title: string;
      category: string;
      sections: ArticleSection[];
    } = {
      title: blogTitleRef.current.value,
      category: blogCategoryRef.current.value,
      sections,
    };
    (async () => {
      await addArticle(payload);
    })();
  }
  if (mounted)
    return (
      <div id="NewArticlePage">
        <PageCover title={"New Article"} />
        {authenticated() ? (
          <div id="wrapper">
            <div id="meta">
              <div id="title">
                <label htmlFor="titleInput">Title</label>
                <input type="text" id="titleInput" ref={blogTitleRef} />
              </div>
              <div id="category">
                <label htmlFor="categoryInput">Category</label>
                <input type="text" id="categoryInput" ref={blogCategoryRef} />
              </div>
            </div>
            {sections.map((s) => (
              <NewPageSection
                key={s.id}
                id={s.id}
                type={s.type}
                sections={sections}
                title={s.title}
              />
            ))}
            <div id="add-section">
              <h3>Add A Section</h3>
              <label htmlFor="sectionTitle">
                Title
                <input type="text" id="sectionTitle" ref={newSectionTitleRef} />
              </label>
              <label htmlFor="sectionType">Type Of Section</label>
              <label htmlFor="sectionTypeMIX">
                <input
                  type="radio"
                  name="sectionType"
                  id="sectionTypeMIX"
                  value={"MIX"}
                  onChange={onNewSectionTypeChange}
                />
                MIX
              </label>
              <label htmlFor="sectionTypeIMG">
                <input
                  type="radio"
                  name="sectionType"
                  id="sectionTypeIMG"
                  value={"IMG"}
                  onChange={onNewSectionTypeChange}
                />
                IMG
              </label>
              <label htmlFor="sectionTypeTXT">
                <input
                  type="radio"
                  name="sectionType"
                  id="sectionTypeTXT"
                  value={"TXT"}
                  onChange={onNewSectionTypeChange}
                />
                TXT
              </label>

              <button onClick={newSectionHandler}>Add Section</button>
            </div>
            <button onClick={onSubmit} className="btn-big">
              ADD ARTICLE
            </button>
          </div>
        ) : (
          <Link href="/auth/login" className="btn">
            Please login.
          </Link>
        )}
      </div>
    );
  else return <></>;
}
