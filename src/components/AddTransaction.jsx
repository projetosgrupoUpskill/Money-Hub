import { useState } from "react"
import styles from "./AddTransaction.module.css"

export default function AddTransaction({ onAdd }) {
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    const [type, setType] = useState("expense")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!description.trim() || !amount || parseFloat(amount) <= 0) {
            return
        }

        onAdd(description, parseFloat(amount), type)

        setDescription("")
        setAmount("")
        setType("expense")
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>Adicionar Transacção</h2>
            </div>

            <div className={styles.cardBody}>
                <form onSubmit={handleSubmit} className={styles.form}>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Descrição</label>
                        <input
                            type="text"
                            placeholder="Ex: Salário, Renda, Supermercado..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Valor (€)</label>
                        <input
                            type="number"
                            step="0.01"
                            min="0.01"
                            placeholder="0.00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Tipo</label>

                        <div className={styles.radioGroup}>
                            <label className={styles.radioItem}>
                                <input
                                    type="radio"
                                    name="type"
                                    value="income"
                                    checked={type === "income"}
                                    onChange={(e) => setType(e.target.value)}
                                />
                                <span className={styles.radioLabel}>Receita</span>
                            </label>

                            <label className={styles.radioItem}>
                                <input
                                    type="radio"
                                    name="type"
                                    value="expense"
                                    checked={type === "expense"}
                                    onChange={(e) => setType(e.target.value)}
                                />
                                <span className={styles.radioLabel}>Despesa</span>
                            </label>
                        </div>
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        Adicionar
                    </button>
                </form>
            </div>
        </div>
    )
}