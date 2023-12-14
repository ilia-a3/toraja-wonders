import prisma from "../../prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { Blog } from "@/app/store/APIRequest";
type data =
  | ({
      sections: {
        id: number;
        title: string;
        type: string;
        text: string | null;
        imgUrl: string | null;
        blogId: number;
      }[];
    } & {
      id: number;
      imgUrls: string | null;
      title: string;
      category: String[];
    })[]
  | null;
type errorRes = {
  name: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<data>
) {
  if (req.method === "GET") {
    // const data = await fetch("http://localhost:8080/api/articles/all", {
    //   method: "GET",
    // });
    fetch("localhost:8080/api/articles/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).json(null);
        console.log(error);
      });
    // res.status(200).json(await data.json());
  }
}
