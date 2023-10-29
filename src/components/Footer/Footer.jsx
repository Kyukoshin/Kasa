import logo from "../../assets/logo-footer.svg";
import "../Footer/Footer.scss";

export default function Footer() {
  return (
    <footer className="footer_container">
      <img src={logo} alt="logo kasa" />
      <p className="footer_container_text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
