import { FiTrash } from "react-icons/fi";
import styles from "./styles/TransactionItem.module.css";
import { useContext } from "react";
import { PreferencesContext } from "../context/PreferencesContext";

export default function TransactionItem({ transaction, onDelete, isEven }) {

    const isIncome = transaction.amount > 0;
    const { currency } = useContext(PreferencesContext);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('pt-PT', {
            style: 'currency',
            currency: currency || 'EUR',

            signDisplay: 'always'
        }).format(amount);
    };

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
                    {formatCurrency(transaction.amount)}
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