import Nav from "../Nav/Nav";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-wrap">
      <img className="logo" src={logo} alt="logo de l'agence kasa" />
      <Nav className="nav-header" />
    </header>
  );
}
