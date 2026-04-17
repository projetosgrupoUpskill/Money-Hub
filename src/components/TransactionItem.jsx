// Componente de Item de Transação (TransactionItem) que exibe os detalhes de uma transação individual,
// incluindo descrição, data, valor e ações. Ele utiliza o PreferencesContext para acessar a moeda selecionada 
// pelo usuário e formata o valor da transação de acordo. O componente também diferencia visualmente entre 
// receitas e despesas, e inclui um botão de exclusão para permitir que os usuários removam transações indesejadas. 
// O layout é organizado em colunas para facilitar a leitura e a interação, e as cores são adaptadas para destacar as 
// diferentes categorias de transações.

import { FiTrash } from "react-icons/fi";
import styles from "./styles/TransactionItem.module.css";
import { useContext } from "react";
import { PreferencesContext } from "../context/PreferencesContext";

export default function TransactionItem({ transaction, onDelete, isEven }) {

    const isIncome = transaction.amount > 0;
    const { currency } = useContext(PreferencesContext);

    const formatCurrency = (amount) => {
        const locale = currency === 'BRL' ? 'pt-BR' : 'pt-PT'

        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency || 'EUR',

            signDisplay: 'always'
        }).format(amount);
    };

    return (
        <div className={`${styles.row} ${isEven ? styles.rowEven : styles.rowOdd}`}>
            {/* Descrição */}
            <div className={styles.description}>
                {transaction.category ? (
                    <img
                    src={`http://localhost:3001/api/categories/${transaction.category}/icon`}
                    alt={transaction.category}
                    width={20}
                    style={{ width: "20px", height: "20px", marginRight: "12px", objectFit: "contain" }}
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