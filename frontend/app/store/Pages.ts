export default function getAllPages(): { name: string; uri: string }[] {
  return [
    { name: "Places to explore", uri: "/blogs/places-to-explore" },
    { name: "Packages", uri: "/packages" },
    { name: "About Indonesia", uri: "/about-indonesia" },
    {
      name: "Things to do in Indonesia",
      uri: "/blogs/things-to-do-in-indonesia",
    },
    {
      name: "History of Sulawesi Island",
      uri: "/blogs/history-of-sulawesi-island",
    },
    { name: "Contact Us", uri: "/contact-us" },
    { name: "Partnerships", uri: "/partnerships" },
  ];
}
