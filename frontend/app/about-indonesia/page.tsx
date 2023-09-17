import PageCover from "../PageCover";
import "./styles.scss";
export default function AboutIndonesia() {
  return (
    <div id="AboutIndonesia">
      <PageCover title="About Indonesia" />
      <section id="intro">
        <h1>Where Is Indonesia?</h1>
        <div className="body">
          <img src="images/indonesia-search.bmp" alt="" />
          <p>
            Indonesia is a small series of islands located in south-east Asia.
            It is well known for its geourgous landscapes, rich religion and an
            overall fantastic site to see. It has various different wildlife and
            plants that are rare and only found in Indonesia and surrounding
            islands. Religion there is also a big thing that had inspired many
            interesting buildings and uniting the population.
          </p>
        </div>
      </section>
    </div>
  );
}
