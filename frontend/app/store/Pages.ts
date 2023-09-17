export default function getAllPages(): { name: string; uri: string }[] {
  return [
    { name: "Places to explore", uri: "/explore" },
    { name: "Packages", uri: "/packages" },
    { name: "About Indonesia", uri: "/about-indonesia" },
    { name: "Things to do in Indonesia", uri: "/things-to-do" },
    { name: "History of Sulawesi Island", uri: "/history" },
    { name: "Contact Us", uri: "/contact-us" },
    { name: "Partnerships", uri: "/partnerships" },
  ];
}
