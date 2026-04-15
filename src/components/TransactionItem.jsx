import { FiTrash } from "react-icons/fi";
import styles from "./styles/TransactionItem.module.css";

export default function TransactionItem({ transaction, onDelete, isEven }) {
    // REGRA V2: Se o amount for maior que 0, é Receita.
    const isIncome = transaction.amount > 0;

    return (
        <div className={`${styles.row} ${isEven ? styles.rowEven : styles.rowOdd}`}>
            {/* Descrição */}
            <div className={styles.description}>
            {transaction.categoryIcon ? (
                  <img 
                    src={`http://localhost:3001/api/${transaction.categoryIcon}`} 
                    alt={transaction.category} 
                    width={20} 
                    style={{ marginRight: '10px' }} // Espaço entre o ícone e o texto
                  />
                ) : (
                  // Bolinha antiga de apoio caso não encontre ícone
                  <div className={`${styles.indicator} ${isIncome ? styles.indicatorIncome : styles.indicatorExpense}`} />
                )}
                <span className={styles.descriptionText}>{transaction.description}</span>
            </div>

            {/* Data */}
            <div className={styles.date}>
                {new Date(transaction.date).toLocaleDateString("pt-PT")}
            </div>

            {/* Valor */}
            <div className={styles.amount}>

                <span className={`${styles.amountValue} ${isIncome ? styles.amountIncome : styles.amountExpense}`}>
                    {isIncome ? "+" : "-"}€{Math.abs(transaction.amount).toFixed(2)}
                </span>
            </div>

            {/* Ações */}
            <div className={styles.actions}>
                <button
                    className={styles.deleteButton}
                    onClick={() => onDelete(transaction.id)}
                >
                    <FiTrash className={styles.icon} />
                </button>
            </div>
        </div>
    );
}