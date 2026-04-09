import styles from "./Summary.module.css"

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
}