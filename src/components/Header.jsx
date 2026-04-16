//Header componente que exibe o logotipo do aplicativo e os links de navegação para as diferentes páginas 
// (Painel, Detalhes, Sobre Nós, Definições). Ele também inclui um botão para alternar entre os temas claro 
// e escuro, utilizando o ThemeContext para gerenciar o estado do tema. O logotipo muda de acordo com o tema 
// selecionado, proporcionando uma experiência visual consistente. Os links de navegação permitem que os usuários 
// acessem facilmente as diferentes seções do aplicativo.

import { Link } from "react-router-dom";
import styles from "./styles/Header.module.css";
import logo_light from "../assets/logo_light.svg";
import logo_dark from "../assets/logo_dark.svg";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi"; // <-- Importe os ícones


export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      {/* Ícone */}
      <div className={styles.logo}>
        <img
          src={theme === "dark" ? logo_dark : logo_light}
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
        <button 
          onClick={toggleTheme} 
          className={styles.themeToggleBtn}
          title={theme === "dark" ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}
        >
          {theme === "dark" ? <FiSun size={22} /> : <FiMoon size={22} />}
        </button>
      </nav>
    </header>
  );
}
