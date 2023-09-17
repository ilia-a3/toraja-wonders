"use client";
import { useEffect, useState } from "react";
import PageCover from "../PageCover";
import "./styles.scss";
import getAllPackages, { Package } from "../store/Packages";
import Link from "next/link";
export default function Packages() {
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    getAllPackages().then((v) => {
      console.log("j");
      setPackages(v);
    });
  }, []);
  return (
    <div id="PackagesPage">
      <PageCover title="Packages"></PageCover>
      <section>
        <h1>Explore Our Range Of Package Options For Your Next Trip</h1>
        <p>
          Interested in making new memories with us? Here are our package
          options. You can contact one of our representatives to lock one in.
        </p>
      </section>
      <section id="packages">
        {packages.map((p) => (
          <div className="package" key={p.id}>
            <h2>{p.name}</h2>
            <p className="price">${p.price}</p>
            <p>{p.description}</p>
            <Link href="/contact-us">
              <button className="contact">Contact Us</button>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
