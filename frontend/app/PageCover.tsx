import "./PageCover.scss";
export default function PageCover(props: { title: string; size: number }) {
  return (
    <div className="PageCover">
      <div id="backdrop">
        <h1 style={{ fontSize: props.size }}>{props.title}</h1>
      </div>
      <img src="/images/toraja-cover.jpg" alt="" />
    </div>
  );
}
