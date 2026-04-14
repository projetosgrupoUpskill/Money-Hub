import { FiTrash } from "react-icons/fi";
import styles from "./styles/TransactionItem.module.css";


export default function TransactionItem({ transaction, onDelete, isEven }) {
    const isIncome = transaction.type === "income";

    return (
        <div className={`${styles.row} ${isEven ? styles.rowEven : styles.rowOdd}`}>
            {/* Descrição */}
            <div className={styles.description}>
                <div className={`${styles.indicator} ${isIncome ? styles.indicatorIncome : styles.indicatorExpense}`} />
                <span className={styles.descriptionText}>{transaction.description}</span>
            </div>

            {/* Data */}
            <div className={styles.date}>
                {new Date(transaction.date).toLocaleDateString("pt-PT")}
            </div>

            {/* Valor */}
            <div className={styles.amount}>
                <span className={`${styles.amountValue} ${isIncome ? styles.amountIncome : styles.amountExpense}`}>
                    {isIncome ? "+" : "-"}€{transaction.amount.toFixed(2)}
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