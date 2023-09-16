import "./PageCover.scss";
export default function PageCover(props: { title: string }) {
  return (
    <div className="PageCover">
      <div id="backdrop">
        <h1>{props.title}</h1>
      </div>
      <img src="images/toraja-cover.jpg" alt="" />
    </div>
  );
}
