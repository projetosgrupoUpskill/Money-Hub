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

      {/* Card de Receitas (substituiu o style por uma nova classe incomeCard) */}
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

      {/* Card de Despesas (substituiu o style por uma nova classe expenseCard) */}
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





//CÓDIGO ANTERIOR - RESERVADO PARA REFERÊNCIA
/* import styles from "./styles/Summary.module.css"

export default function Summary({ balance, income, expense, onCardClick }) {
    return (
        <div className={styles.summaryGrid}>

            <div className={`${styles.card} ${styles.balanceCard}`} onClick={() => onCardClick('all')} style={{ cursor: 'pointer' }}>
                <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>Saldo Atual</h3>
                </div>

                <p className={`${styles.value} ${balance >= 0 ? styles.balancePositive : styles.balanceNegative
                    }`}>
                    €{balance.toFixed(2)}
                </p>
            </div>

            <div className={styles.card} onClick={() => onCardClick('income')}  style={{ background: '#00A63E1A', border: '1px solid #00A63E', cursor: 'pointer' }}>
                <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>Total de Receitas</h3>
                </div>

                <p className={`${styles.value} ${styles.incomeValue}`}>
                    €{income.toFixed(2)}
                </p>
            </div>

            <div className={styles.card} onClick={() => onCardClick('expense')} style={{ background: '#E7000B1A', border: '1px solid #E7000B', cursor: 'pointer' }}>
                <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>Total de Despesas</h3>
                </div>

                <p className={`${styles.value} ${styles.expenseValue}`}>
                    €{expense.toFixed(2)}
                </p>
            </div>

        </div>
    )
} */