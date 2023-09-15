// TEMPORARY

const articles: {
  imgUrl: string;
  title: string;
  id: number;
  category: string;
}[] = [
  {
    id: 0,
    imgUrl: "images/toraja-cover.jpg",
    title: "Toraja1",
    category: "popular-destinations",
  },
  {
    id: 1,
    imgUrl: "images/toraja-cover.jpg",
    title: "Toraja2",
    category: "popular-destinations",
  },
  {
    id: 2,
    imgUrl: "images/toraja-cover.jpg",
    title: "Toraja3",
    category: "popular-destinations",
  },
  {
    id: 3,
    imgUrl: "images/toraja-cover.jpg",
    title: "Toraja4",
    category: "popular-destinations",
  },
  {
    id: 4,
    imgUrl: "images/toraja-cover.jpg",
    title: "Toraja5",
    category: "popular-destinations",
  },
  {
    id: 5,
    imgUrl: "images/toraja-cover.jpg",
    title: "Toraja1",
    category: "attractions",
  },
  {
    id: 6,
    imgUrl: "images/toraja-cover.jpg",
    title: "Toraja2",
    category: "attractions",
  },
  {
    id: 7,
    imgUrl: "images/toraja-cover.jpg",
    title: "Toraja3",
    category: "attractions",
  },
  {
    id: 8,
    imgUrl: "images/toraja-cover.jpg",
    title: "Toraja4",
    category: "attractions",
  },
  {
    id: 9,
    imgUrl: "images/toraja-cover.jpg",
    title: "Toraja5",
    category: "attractions",
  },
  {
    id: 10,
    imgUrl: "images/toraja-cover.jpg",
    title: "Toraja1",
    category: "things-to-do",
  },
  {
    id: 11,
    imgUrl: "images/toraja-cover.jpg",
    title: "Toraja2",
    category: "things-to-do",
  },
  {
    id: 12,
    imgUrl: "images/toraja-cover.jpg",
    title: "Toraja3",
    category: "things-to-do",
  },
  {
    id: 13,
    imgUrl: "images/toraja-cover.jpg",
    title: "Toraja4",
    category: "things-to-do",
  },
  {
    id: 14,
    imgUrl: "images/toraja-cover.jpg",
    title: "Toraja5",
    category: "things-to-do",
  },
];

async function getArticleOfType(type: string) {
  return articles.filter((v) => type == v.category);
}
