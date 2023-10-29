export default function Owner({ name, picture }) {
  return (
    <div className="wrap_owner">
      {name}{" "}
      <img src={picture} alt="Portrait of ${name}" className="owner_pp" />
    </div>
  );
}
