import { Link } from "react-router-dom";
import "../Error/Error.scss";

export default function Error() {
  return (
    <div className="error_wrap">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error_link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
