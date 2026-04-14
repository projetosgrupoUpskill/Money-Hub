import TransactionItem from "./TransactionItem.jsx"
import styles from "./styles/TransactionList.module.css";

export default function TransactionList({ transactions, onDelete }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Lista de Transacções</h2>
      </div>

      {transactions.length === 0 ? (
        <div className={styles.emptyState}>
          <p className={styles.emptyText}>
            Ainda não há transacções. 
          </p>
        </div>
      ) : (
        <>
          {/* Cabeçalho da tabela */}
          <div className={styles.tableHeader}>
            <div className={`${styles.headerCell} ${styles.headerDescription}`}>Descrição</div>
            <div className={`${styles.headerCell} ${styles.headerDate}`}>Data</div>
            <div className={`${styles.headerCell} ${styles.headerAmount}`}>Valor</div>
            <div className={`${styles.headerCell} ${styles.headerActions}`}>Ações</div>
          </div>

          {/* Lista de transações */}
          <div className={styles.scrollArea}>
            {transactions.map((transaction, index) => (
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
                onDelete={onDelete}
                isEven={index % 2 === 0} // para aplicar estilos alternados
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}