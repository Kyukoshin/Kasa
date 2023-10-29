export default function Banner({ filter, content, background, text }) {
  return (
    <div className={`banner_container_${background}`}>
      <div className={`banner_filter_${filter}`}>
        <div className={`banner_text_${text}`}>{content}</div>
      </div>
    </div>
  );
}
