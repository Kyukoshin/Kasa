import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav_wrap">
      <li>
        <Link to="/" className="nav_link">
          Accueil
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav_link">
          A Propos
        </Link>
      </li>
    </nav>
  );
}
