import { useReducer, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTransactions, deleteTransaction, getCategories } from "../api";
import Summary from "../components/Summary";
import TransactionList from "../components/TransactionList";
import AddTransaction from "./AddTransaction"; // Importamos o formulário
import styles from "../App.module.css";
import CategoryFilter from "../components/CategoryFilter"; // Novo componente de filtro
import DateRangePicker from "../components/DateRangePicker"; // Novo componente de filtro de datas


// 1. Configurações Iniciais do Reducer
function startOfMonth() {
    const now = new Date()
    return new Date(now.getFullYear(), now.getMonth(), 1)
        .toISOString().split('T')[0] // ex: "2024-03-01"
}

function today() {
    return new Date().toISOString().split('T')[0]
}

const initialState = {
    /* startDate: startOfMonth(), */
    startDate: '', // Começa sem filtro de data
    endDate: today(),
    activeCategory: null,
    type: 'all',
};

function filtersReducer(state, action) {
    switch (action.type) {
        case 'SET_DATE_RANGE':
            return { ...state, startDate: action.start, endDate: action.end };
        case 'SET_CATEGORY':
            return { ...state, activeCategory: action.category };
        case 'SET_TYPE':
            return { ...state, type: action.payload };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

const Dashboard = () => {
    const queryClient = useQueryClient();
    const [filter, dispatch] = useReducer(filtersReducer, initialState)

    // 1. Buscar dados da API
    const { data: transactions = [], isLoading, isError } = useQuery({
        queryKey: ["transactions"],
        queryFn: getTransactions,
    });

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories, // Certifica-te que esta função existe no api.js
    });

    // 2. Mutação para apagar
    const deleteMutation = useMutation({
        mutationFn: deleteTransaction,
        onSuccess: () => queryClient.invalidateQueries(["transactions"]),
    });

    if (isLoading) return <p style={{ color: "white" }}>A carregar...</p>;
    if (isError) return <p style={{ color: "red" }}>Erro ao ligar à API (Porta 3001).</p>;

    const income = transactions
        .filter((t) => t.amount > 0)
        .reduce((sum, t) => sum + t.amount, 0);

    const expense = transactions
        .filter((t) => t.amount < 0)
        .reduce((sum, t) => sum + Math.abs(t.amount), 0);

    const balance = income - expense;

    const filteredTransactions = transactions.filter((t) => {

        if (filter.type === 'income' && t.amount < 0) return false;
        if (filter.type === 'expense' && t.amount > 0) return false;

        // Exemplo de filtro por categoria se aplicável
        if (filter.activeCategory && filter.activeCategory !== "all") {
            return t.categoryId === filter.activeCategory || t.category === filter.activeCategory;
        }
        if (t.date) {
            // Extrai apenas a parte "YYYY-MM-DD" da data da transação
            const transactionDate = t.date.split('T')[0];

            if (filter.startDate && transactionDate < filter.startDate) return false;
            if (filter.endDate && transactionDate > filter.endDate) return false;
        }
        return true;
    });

    return (
        <>
            <Summary
                balance={balance}
                income={income}
                expense={expense}
                onCardClick={(type) => dispatch({ type: 'SET_TYPE', payload: type })}
            />

            <div className={styles.gridTwoColumns}>
                <div className={styles.listColumn}>
                    <TransactionList
                        transactions={filteredTransactions}
                        onDelete={(id) => deleteMutation.mutate(id)}

                        /* Categoria agora fica sozinha na direita */
                        categoryFilterComponent={
                            <CategoryFilter
                                categories={categories}
                                activeCategory={filter.activeCategory}
                                onCategoryChange={(cat) => dispatch({ type: 'SET_CATEGORY', category: cat })}
                            />
                        }

                        /* Data e Botão "Limpar Filtros" agrupados na esquerda */
                        dateFilterComponent={
                            <div className={styles.filterActionsContainer}>
                                <DateRangePicker
                                    startDate={filter.startDate}
                                    endDate={filter.endDate}
                                    onDateChange={(start, end) => dispatch({ type: 'SET_DATE_RANGE', start, end })}
                                />

                                <button
                                    className={styles.clearFiltersBtn}
                                    onClick={() => dispatch({ type: 'RESET' })}
                                >
                                    Limpar Filtros
                                </button>
                            </div>
                        }
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