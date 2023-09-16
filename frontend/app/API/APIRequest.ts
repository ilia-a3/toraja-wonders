// TEMPORARY

const articles: {
  imgUrls: string[];
  title: string;
  id: number;
  paragraphs: string[];
  datePublished: string;
  category: string;
}[] = [
  {
    id: 0,
    imgUrls: ["images/toraja-cover.jpg"],
    title: "Toraja1",
    paragraphs: ["lorem impsum", "lorem impsum"],
    datePublished: "12-07-2023",
    category: "popular-destinations",
  },
  {
    id: 1,
    imgUrls: ["images/toraja-cover.jpg"],
    title: "Toraja2",
    paragraphs: ["lorem impsum", "lorem impsum"],
    datePublished: "12-07-2023",
    category: "popular-destinations",
  },
  {
    id: 2,
    imgUrls: ["images/toraja-cover.jpg"],
    title: "Toraja3",
    paragraphs: ["lorem impsum", "lorem impsum"],
    datePublished: "12-07-2023",
    category: "popular-destinations",
  },
  {
    id: 3,
    imgUrls: ["images/toraja-cover.jpg"],
    title: "Toraja4",
    paragraphs: ["lorem impsum", "lorem impsum"],
    datePublished: "12-07-2023",
    category: "popular-destinations",
  },
  {
    id: 4,
    imgUrls: ["images/toraja-cover.jpg"],
    title: "Toraja5",
    paragraphs: ["lorem impsum", "lorem impsum"],
    datePublished: "12-07-2023",
    category: "popular-destinations",
  },
  {
    id: 5,
    imgUrls: ["images/toraja-cover.jpg"],
    title: "Toraja1",
    paragraphs: ["lorem impsum", "lorem impsum"],
    datePublished: "12-07-2023",
    category: "attractions",
  },
  {
    id: 6,
    imgUrls: ["images/toraja-cover.jpg"],
    title: "Toraja2",
    paragraphs: ["lorem impsum", "lorem impsum"],
    datePublished: "12-07-2023",
    category: "attractions",
  },
  {
    id: 7,
    imgUrls: ["images/toraja-cover.jpg"],
    title: "Toraja3",
    paragraphs: ["lorem impsum", "lorem impsum"],
    datePublished: "12-07-2023",
    category: "attractions",
  },
  {
    id: 8,
    imgUrls: ["images/toraja-cover.jpg"],
    title: "Toraja4",
    paragraphs: ["lorem impsum", "lorem impsum"],
    datePublished: "12-07-2023",
    category: "attractions",
  },
  {
    id: 9,
    imgUrls: ["images/toraja-cover.jpg"],
    title: "Toraja5",
    paragraphs: ["lorem impsum", "lorem impsum"],
    datePublished: "12-07-2023",
    category: "attractions",
  },
  {
    id: 10,
    imgUrls: ["images/toraja-cover.jpg"],
    title: "Toraja1",
    paragraphs: ["lorem impsum", "lorem impsum"],
    datePublished: "12-07-2023",
    category: "things-to-do",
  },
  {
    id: 11,
    imgUrls: ["images/toraja-cover.jpg"],
    title: "Toraja2",
    paragraphs: ["lorem impsum", "lorem impsum"],
    datePublished: "12-07-2023",
    category: "things-to-do",
  },
  {
    id: 12,
    imgUrls: ["images/toraja-cover.jpg"],
    title: "Toraja3",
    paragraphs: ["lorem impsum", "lorem impsum"],
    datePublished: "12-07-2023",
    category: "things-to-do",
  },
  {
    id: 13,
    imgUrls: ["images/toraja-cover.jpg"],
    title: "Toraja4",
    paragraphs: ["lorem impsum", "lorem impsum"],
    datePublished: "12-07-2023",
    category: "things-to-do",
  },
  {
    id: 14,
    imgUrls: ["images/toraja-cover.jpg"],
    title: "Toraja5",
    paragraphs: ["lorem impsum", "lorem impsum"],
    datePublished: "12-07-2023",
    category: "things-to-do",
  },
];

export async function getArticleOfType(type: string) {
  console.log("j");
  return articles.filter((v) => type == v.category);
}
