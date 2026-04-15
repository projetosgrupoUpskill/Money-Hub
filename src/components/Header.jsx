import { Link } from "react-router-dom";
import styles from "./styles/Header.module.css";
import money_hub_logo_cropped from "../assets/money_hub_logo_cropped.svg";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      {/* Ícone */}
      <div className={styles.logo}>
        <img
          src={money_hub_logo_cropped}
          alt="Money Hub"
          className={styles.logoImage}
        />
      </div>

      {/* Links */}
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>
          Painel
        </Link>
        <Link to="/details" className={styles.navLink}>
          Detalhes
        </Link>
        <Link to="/about" className={styles.navLink}>
          Sobre Nós
        </Link>
        <Link to="/settings" className={styles.navLink}>
          Definições
        </Link>
        <button onClick={toggleTheme}>{theme === "dark" ? "☀️" : "🌙"}</button>
      </nav>
    </header>
  );
}
