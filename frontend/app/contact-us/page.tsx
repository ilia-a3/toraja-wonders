import "./styles.scss";
import PageCover from "../PageCover";

export default function ContactUs() {
  return (
    <div id="ContactUs">
      <section>
        <PageCover title="Contact Us" />
      </section>
      <section id="Info">
        <h2>Get in touch with one of our representatives</h2>
        <div id="details">
          <p>
            <a href="https://wa.me/6282196269074?text=Hi,+continue+to+WhatsApp+and+one+of+our+represantatives+will+be+with+you+shortly.">
              WhatsApp: +62 821-9626-9074
            </a>
          </p>
          <p>
            <a href="tel:+62-821-9626-9074">Telephone: +62 821-9626-9074</a>
          </p>
          <p>
            <a href="mailto:">E-Mail: </a>
          </p>
        </div>
      </section>
    </div>
  );
}
