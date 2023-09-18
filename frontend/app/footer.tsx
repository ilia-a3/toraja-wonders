import Link from "next/link";
import "./footer.scss";
import getAllPages from "./store/Pages";
export default function Footer() {
  const navs: { name: string; uri: string }[] = getAllPages();
  return (
    <div id="Footer">
      <img src="/images/logo-2.jpg" alt="logo" />
      <div id="title">
        <h1>Toraja Wonders</h1>
        <h2>Unlock The Treasures Together</h2>
        <p>Email: </p>
        <p>Phone: +62 821-9626-9074</p>
        <p>Whatsapp: +62 821-9626-9074</p>
      </div>
      <div id="navigation">
        {navs.map((nav) => (
          <Link className="nav" href={nav.uri} key={nav.uri}>
            {nav.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
