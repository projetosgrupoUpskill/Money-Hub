import { useState } from "react"
import styles from "./AddTransaction.module.css"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTransaction } from "../api";

export default function AddTransaction({ onAdd }) {
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    const [type, setType] = useState("expense")
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: createTransaction,
        onSuccess: () => {
          setDescription("");
          setAmount("");
          // Atualiza a lista no Dashboard automaticamente
          queryClient.invalidateQueries(["transactions"]);
        },
      });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description || !amount) return;
    
        const numericValue = parseFloat(amount);
        
        // REGRA 3.2: Convenção de sinais (+/-)
        const finalAmount = type === "expense" ? -Math.abs(numericValue) : Math.abs(numericValue);
    
        // CHAMADA: Agora 'mutation' existe e pode ser chamada aqui
        mutation.mutate({
          description,
          amount: finalAmount,
          date: new Date().toISOString(),
          category: "outro"
        });
      };

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