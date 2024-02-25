import PageCover from "../PageCover";
import "./styles.scss";
export default function AboutIndonesia() {
  return (
    <div id="AboutIndonesia">
      <PageCover title="About Indonesia" size={12} />
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
      <section id="history">
        <h1>Some History On Indonesia</h1>
        <div className="body inv">
          <p>
            Indonesia is built around its rich and diverse history. Religion is
            very big in Indonesia and has inspired lots of actions and buildings
            in the past. In the past, Indonesia was made up and turned into an
            establishment of islamic kingdoms from Sumatra up until the 7th
            centure CE, where lots of taiwanese imigrants can and brought their
            bhuddist background to the mix. Indonesia also acted as a very
            popular and strategically placed trade center for their bowls, jars,
            jugs and more pottery.
          </p>
          <img src="images/history-search.bmp" alt="" />
        </div>
      </section>
    </div>
  );
}
