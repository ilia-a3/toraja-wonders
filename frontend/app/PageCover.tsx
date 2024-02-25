import "./PageCover.scss";
export default function PageCover(props: { title: string; size?: number }) {
  const size = 12 || props.size;
  return (
    <div className="PageCover">
      <div id="backdrop">
        <h1 style={{ fontSize: size }}>{props.title}</h1>
      </div>
      <img src="/images/toraja-cover.jpg" alt="" />
    </div>
  );
}
