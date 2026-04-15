import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../App.module.css";

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Barra de Topo: Logo à esquerda, Menu à direita */}
        <header>
          <Header />
        </header>

        {/* Aqui é onde as páginas (Dashboard, AddTransaction) vão "aparecer" */}
        <main style={{ minHeight: '70vh' }}>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;