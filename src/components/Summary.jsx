// Componente de Resumo Financeiro (Summary) que exibe o saldo atual, total de receitas e total de despesas. 
// Ele utiliza o PreferencesContext para acessar as preferências do usuário, como a moeda selecionada e o nome 
// do usuário, personalizando a experiência. O componente é estilizado para destacar visualmente os valores de
// saldo, receitas e despesas, e inclui uma funcionalidade de clique para permitir que os usuários filtrem as
// transações com base na categoria (todas, receitas ou despesas) ao clicar nos respectivos cartões.

import { useContext } from "react";
import { PreferencesContext } from "../context/PreferencesContext";
import styles from "./styles/Summary.module.css";

export default function Summary({ balance, income, expense, onCardClick }) {
  const { currency, userName } = useContext(PreferencesContext);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-PT", {
      style: "currency",
      currency: currency,
    }).format(value);
  };

  return (
    <div className={styles.summaryGrid}>
      {userName && (
        <h2 style={{gridColumn: "1 / -1", marginBottom: "10px", color: "var(--text-h)", textAlign: "left"}}>
          Olá, {userName}!
        </h2>
      )}

      {/* Card de Saldo */}
      <div
        className={`${styles.card} ${styles.balanceCard}`}
        onClick={() => onCardClick("all")}
      >
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Saldo Atual</h3>
        </div>
        <p className={`${styles.value} ${balance >= 0 ? styles.balancePositive : styles.balanceNegative}`}>
          {formatCurrency(balance)}
        </p>
      </div>

      {/* Card de Receitas */}
      <div
        className={`${styles.card} ${styles.incomeCard}`}
        onClick={() => onCardClick("income")}
      >
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Total de Receitas</h3>
        </div>
        <p className={`${styles.value} ${styles.incomeValue}`}>
          {formatCurrency(income)}
        </p>
      </div>

      {/* Card de Despesas */}
      <div
        className={`${styles.card} ${styles.expenseCard}`}
        onClick={() => onCardClick("expense")}
      >
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Total de Despesas</h3>
        </div>
        <p className={`${styles.value} ${styles.expenseValue}`}>
          {formatCurrency(expense)}
        </p>
      </div>
    </div>
  );
}