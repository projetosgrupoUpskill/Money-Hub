import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { getTransactions, deleteTransaction } from "../api";
import Summary from "../components/Summary";
import TransactionList from "../components/TransactionList";
import AddTransaction from "./AddTransaction"; 
import styles from "../App.module.css";

const Dashboard = () => {
    const queryClient = useQueryClient();

    const [typeFilter, setTypeFilter] = useState("all");

    const { data: transactions = [], isLoading, isError } = useQuery({
        queryKey: ["transactions"],
        queryFn: getTransactions,
    });

    // Mutação para excluir transações, que é passada para o TransactionList. Quando uma transação é excluída, 
    // a mutação é acionada com o ID da transação a ser removida, e após a exclusão bem-sucedida, a cache de transações 
    // é invalidada para garantir que a lista seja atualizada corretamente no Dashboard.
    const deleteMutation = useMutation({
        mutationFn: deleteTransaction,
        onSuccess: () => queryClient.invalidateQueries(["transactions"]),
    });

    if (isLoading) return <p style={{ color: "white" }}>A carregar...</p>;
    if (isError) return <p style={{ color: "red" }}>Erro ao ligar à API.</p>;


    // Cálculo do saldo, receitas e despesas com base nas transações obtidas da API, permitindo que o componente 
    // Summary exiba os valores corretos. O saldo é calculado como a diferença entre as receitas e despesas, 
    // enquanto as receitas e despesas são calculadas somando os valores positivos.

    const income = transactions
        .filter((t) => t.amount > 0)
        .reduce((sum, t) => sum + t.amount, 0);

    const expense = transactions
        .filter((t) => t.amount < 0)
        .reduce((sum, t) => sum + Math.abs(t.amount), 0);

    const balance = income - expense;

    const filteredTransactions = transactions.filter(t => {
        if (typeFilter === "all") return true;
        if (typeFilter === "income" && t.amount > 0) return true; // Filtro para mostrar apenas receitas, usado quando o tipo 
        // selecionado for "income" e a transação tiver um valor positivo. Isso permite que os usuários vejam apenas as transações de 
        // receita quando clicarem no cartão de receitas no componente Summary.
        if (typeFilter === "expense" && t.amount < 0) return true;
        return false;
    });

    return (
        <>
            <Summary 
                balance={balance}
                income={income}
                expense={expense}
                onCardClick={(type) => setTypeFilter(type)}
            />

            <div className={styles.gridTwoColumns}>
                <div className={styles.listColumn}>
                    <TransactionList
                        transactions={filteredTransactions}
                        onDelete={(id) => deleteMutation.mutate(id)} // Passa a função de exclusão para o TransactionList, 
                        // que por sua vez passará para cada TransactionItem. Mutação de exclusão é chamada com o ID da transação 
                        // a ser excluída, e após a exclusão bem-sucedida, a lista de transações é atualizada automaticamente graças 
                        // à invalidação da cache do React Query.
                    />
                </div>

                <div className={styles.formColumn}>
                    <AddTransaction />
                </div>
            </div>
        </>
    );
};

export default Dashboard;