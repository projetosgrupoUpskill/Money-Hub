import TransactionItem from "./TransactionItem.jsx";
import styles from "./styles/TransactionList.module.css";
// Removemos o useState/useEffect daqui para seguir o padrão V2

export default function TransactionList({ transactions, onDelete, categoryFilterComponent, dateFilterComponent }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Lista de Transacções</h2>
      </div>

      <div className={styles.headerFilter}>
        {/* Lado Esquerdo: Filtro de Data */}
        <div className={styles.dateFilterGroup}>
          <span className={styles.filterLabel}>Filtrar por data:</span>
          {dateFilterComponent}
        </div>

        {/* Lado Direito: Filtro de Categoria */}
        <div className={styles.categoryFilterGroup}>
          {categoryFilterComponent}
        </div>
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
                onDelete={onDelete}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}