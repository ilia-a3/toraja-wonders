// TEMPORARY
export interface ArticleSection {
  id: number;
  title: string;
  type: string;
  text: string;
  imgUrl: string;
}
export interface Blog {
  imgUrls: string[];
  title: string;
  id: number;
  sections: ArticleSection[];
  datePublished: string;
  category: string;
}
let articles: Blog[] = [];
// = [
//   {
//     id: 0,
//     imgUrls: ["images/toraja-cover.jpg"],
//     title: "Toraja1",
//     paragraphs: ["lorem impsum", "lorem impsum"],
//     datePublished: "12-07-2023",
//     category: "popular-destinations",
//   },
//   {
//     id: 1,
//     imgUrls: ["images/toraja-cover.jpg"],
//     title: "Toraja2",
//     paragraphs: ["lorem impsum", "lorem impsum"],
//     datePublished: "12-07-2023",
//     category: "popular-destinations",
//   },
//   {
//     id: 2,
//     imgUrls: ["images/toraja-cover.jpg"],
//     title: "Toraja3",
//     paragraphs: ["lorem impsum", "lorem impsum"],
//     datePublished: "12-07-2023",
//     category: "popular-destinations",
//   },
//   {
//     id: 3,
//     imgUrls: ["images/toraja-cover.jpg"],
//     title: "Toraja4",
//     paragraphs: ["lorem impsum", "lorem impsum"],
//     datePublished: "12-07-2023",
//     category: "popular-destinations",
//   },
//   {
//     id: 4,
//     imgUrls: ["images/toraja-cover.jpg"],
//     title: "Toraja5",
//     paragraphs: ["lorem impsum", "lorem impsum"],
//     datePublished: "12-07-2023",
//     category: "popular-destinations",
//   },
//   {
//     id: 5,
//     imgUrls: ["images/toraja-cover.jpg"],
//     title: "Toraja1",
//     paragraphs: ["lorem impsum", "lorem impsum"],
//     datePublished: "12-07-2023",
//     category: "attractions",
//   },
//   {
//     id: 6,
//     imgUrls: ["images/toraja-cover.jpg"],
//     title: "Toraja2",
//     paragraphs: ["lorem impsum", "lorem impsum"],
//     datePublished: "12-07-2023",
//     category: "attractions",
//   },
//   {
//     id: 7,
//     imgUrls: ["images/toraja-cover.jpg"],
//     title: "Toraja3",
//     paragraphs: ["lorem impsum", "lorem impsum"],
//     datePublished: "12-07-2023",
//     category: "attractions",
//   },
//   {
//     id: 8,
//     imgUrls: ["images/toraja-cover.jpg"],
//     title: "Toraja4",
//     paragraphs: ["lorem impsum", "lorem impsum"],
//     datePublished: "12-07-2023",
//     category: "attractions",
//   },
//   {
//     id: 9,
//     imgUrls: ["images/toraja-cover.jpg"],
//     title: "Toraja5",
//     paragraphs: ["lorem impsum", "lorem impsum"],
//     datePublished: "12-07-2023",
//     category: "attractions",
//   },
//   {
//     id: 10,
//     imgUrls: ["images/toraja-cover.jpg"],
//     title: "Toraja1",
//     paragraphs: ["lorem impsum", "lorem impsum"],
//     datePublished: "12-07-2023",
//     category: "things-to-do",
//   },
//   {
//     id: 11,
//     imgUrls: ["images/toraja-cover.jpg"],
//     title: "Toraja2",
//     paragraphs: ["lorem impsum", "lorem impsum"],
//     datePublished: "12-07-2023",
//     category: "things-to-do",
//   },
//   {
//     id: 12,
//     imgUrls: ["images/toraja-cover.jpg"],
//     title: "Toraja3",
//     paragraphs: ["lorem impsum", "lorem impsum"],
//     datePublished: "12-07-2023",
//     category: "things-to-do",
//   },
//   {
//     id: 13,
//     imgUrls: ["images/toraja-cover.jpg"],
//     title: "Toraja4",
//     paragraphs: ["lorem impsum", "lorem impsum"],
//     datePublished: "12-07-2023",
//     category: "things-to-do",
//   },
//   {
//     id: 14,
//     imgUrls: ["images/toraja-cover.jpg"],
//     title: "Toraja5",
//     paragraphs: ["lorem impsum", "lorem impsum"],
//     datePublished: "12-07-2023",
//     category: "things-to-do",
//   },
// ];
async function refreshArticles() {
  console.log("Refreshing articles");
  if (process.env.ARTICLE_URL != null) {
    const res = await fetch(process.env.ARTICLE_URL + "all");
    if (res.ok) {
      articles = await res.json();
    }
  }
}

export async function getArticleOfType(type: string): Promise<Blog[]> {
  console.log("j");
  refreshArticles();
  return articles.filter((v) => type == v.category);
}
export async function getArticleByTitle(title: string): Promise<Blog | null> {
  refreshArticles();
  let blog = null;
  articles.forEach((a) => {
    if (a.title == title) {
      blog = a;
    }
  });
  return blog;
}

export async function getAllArticles() {
  await refreshArticles();
  return articles;
}
