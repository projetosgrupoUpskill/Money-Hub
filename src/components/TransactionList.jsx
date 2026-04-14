import TransactionItem from "./TransactionItem.jsx";
import styles from "./styles/TransactionList.module.css";
import { useState, useEffect } from "react";
import { getTransactions, deleteTransaction } from "../api.js";

export default function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTransactions()
      .then((data) => {
        setTransactions(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Erro ao carregar transações");
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    deleteTransaction(id)
      .then(() => setTransactions((prev) => prev.filter((t) => t.id !== id)))
      .catch(() => setError("Erro ao apagar transação"));
  };

  if (loading) return <p>A carregar...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Lista de Transacções</h2>
      </div>

      {transactions.length === 0 ? (
        <div className={styles.emptyState}>
          <p className={styles.emptyText}>Ainda não há transacções.</p>
        </div>
      ) : (
        <>
          <div className={styles.tableHeader}>
            <div className={`${styles.headerCell} ${styles.headerDescription}`}>Descrição</div>
            <div className={`${styles.headerCell} ${styles.headerDate}`}>Data</div>
            <div className={`${styles.headerCell} ${styles.headerAmount}`}>Valor</div>
            <div className={`${styles.headerCell} ${styles.headerActions}`}>Ações</div>
          </div>

          <div className={styles.scrollArea}>
            {transactions.map((t, index) => (
              <TransactionItem
                key={t.id}
                transaction={t}
                onDelete={handleDelete}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}