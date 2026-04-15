// pages/Settings.jsx - o formulário de definições
import { useContext } from "react";
import { PreferencesContext } from "../context/PreferencesContext";

export default function Settings() {
  const { isDarkMode, toggleTheme, currency, setCurrency, userName, setUserName } =
    useContext(PreferencesContext);

  return (
    <div>
      <h2>Definições</h2>

      {/* Tema */}
      <section>
        <h3>Tema</h3>
        <button onClick={toggleTheme}>
          {isDarkMode ? "Mudar para Light" : "Mudar para Dark"}
        </button>
      </section>

      {/* Moeda */}
      <section>
        <h3>Moeda</h3>
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="EUR">EUR - Euro</option>
          <option value="USD">USD - Dólar</option>
          <option value="GBP">GBP - Libra</option>
        </select>
      </section>

      {/* Nome */}
      <section>
        <h3>O teu nome</h3>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Qual seu nome?"
        />
      </section>
    </div>
  );
}
