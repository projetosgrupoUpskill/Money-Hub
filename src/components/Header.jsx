import { Link } from "react-router-dom"
import styles from "./styles/Header.module.css";
import money_hub_logo_cropped from "../assets/money_hub_logo_cropped.svg" 

export default function Header() {
    return (
        <header className={styles.header}>
            {/* Ícone */}
            <div className={styles.logo}>
                <img src={money_hub_logo_cropped} alt="Money Hub" className={styles.logoImage} />
            </div>

            {/* Links */}
            <nav className={styles.nav}>
                <Link to="/" className={styles.navLink}>Home</Link>
                <Link to="/about" className={styles.navLink}>Sobre</Link>
                <Link to="/contact" className={styles.navLink}>Contato</Link>
            </nav>
        </header>
    )
}