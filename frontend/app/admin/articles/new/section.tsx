import { ArticleSection } from "@/app/store/APIRequest";
import { Dispatch, RefObject, SetStateAction, useRef, useState } from "react";

export default function NewPageSection(props: {
  id: number;
  type: string;
  sections: ArticleSection[];
  title: string;
  //   setSections: Dispatch<
  //     SetStateAction<
  //       {
  //         ref: RefObject<any>;
  //         data: ArticleSection;
  //       }[]
  //     >
  //   >;
}) {
  //   const [data, setData] = useState<ArticleSection>({
  //     id: props.id,
  //     title: "",
  //     type: props.type,
  //     text: "",
  //     imgUrl: "",
  //   });
  const txtRef = useRef<HTMLTextAreaElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState(props.title);

  function onChange() {
    let sec = null;
    for (const s of props.sections) {
      if (s.id == props.id) {
        sec = s;
      }
    }
    if (sec == null) {
      console.log("SECTION YOU ARE EDITING DOES NOT EXIST");
      return;
    }
    if (!title || title == "") {
      alert("Please add a section title.");
      return;
    }
    sec.text = txtRef.current?.value;
    sec.imgUrl = imgRef.current?.value;
    sec.title = title;
    console.log(props.sections);
  }
  return (
    <div className="newPageSection">
      <h3>
        Title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
      </h3>
      {(props.type == "IMG" || props.type == "MIX") && (
        <div className="IMG">
          <img src={imgRef.current?.value} alt="" />
          <label htmlFor="img-input">IMG URL </label>
          <input
            type="text"
            className="img-input"
            ref={imgRef}
            onChange={onChange}
          />
        </div>
      )}
      {(props.type == "TXT" || props.type == "MIX") && (
        <div className="TXT">
          <label htmlFor="txt-input">Paragraph </label>
          <textarea
            className="txt-input"
            ref={txtRef}
            rows={2}
            cols={20}
            onChange={onChange}
          />
        </div>
      )}
    </div>
  );
}
