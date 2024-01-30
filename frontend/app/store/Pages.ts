export default function getAllPages(): { name: string; uri: string }[] {
  return [
    {
      name: "Guide To Indonesia",
      uri: "/blogs/guide",
    },
    {
      name: "Tips For Exploring Indonesia",
      uri: "/blogs/tips",
    },
    { name: "Places to explore", uri: "/blogs/discovering" },
    { name: "Packages", uri: "/packages" },
    { name: "Contact Us", uri: "/contact-us" },
    { name: "Partnerships", uri: "/partnerships" },
  ];
}
// <Link href="/blogs/guide" className="Link">
// Guide To Indonesia
// </Link>
// <Link href="/blogs/tips" className="Link">
// Tips For Exploring Sulawesi
// </Link>
// <Link href="/blogs/discovering" className="Link">
// Where To Explore
// </Link>
