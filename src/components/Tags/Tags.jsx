export default function Tag({ list }) {
  if (!list || list.length === 0) {
    return null;
  }

  const tags = list.map((word, index) => (
    <span key={index} className="tags">
      {word}
    </span>
  ));

  return <div className="tags_container">{tags}</div>;
}
