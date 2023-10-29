export default function Card({ cover, title }) {
  return (
    <article className="card_wrap">
      <img src={cover} alt="location" />
      <div className="card_layer">
        <p className="card_title">{title}</p>
      </div>
    </article>
  );
}
