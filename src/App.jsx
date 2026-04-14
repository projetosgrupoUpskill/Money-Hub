import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Summary from "./components/Summary.jsx";
import TransactionList from "./components/TransactionList.jsx";
import AddTransaction from "./pages/AddTransaction.jsx";
import Header from "./components/Header.jsx";
import styles from "./App.module.css";
import Footer from "./components/Footer.jsx";
import ContactCard from "./pages/Contact.jsx";
import API_URL from "./api.js";


function App() {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch(`${API_URL}/api/transactions`)
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data) // Guardamos os dados da API
        setLoading(false)
      })
      .catch((error) => {
        console.error("Erro ao ir buscar dados:", error)
        setLoading(false)
      })
  }, [])

  const handleAdd = (description, amount, type) => {
    setTransactions([
      {
        id: Date.now(),
        description,
        amount,
        type,
        date: new Date().toISOString(),
      },
      ...transactions,
    ]);
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);
  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);
  const balance = income - expense;

  const filteredTransactions = transactions.filter(
    (t) => filter === "all" || t.type === filter,
  );



  return (
    <Router>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Header />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Summary
                    balance={balance}
                    income={income}
                    expense={expense}
                    onCardClick={setFilter}
                  />
                  <div className={styles.gridTwoColumns}>
                    <div className={styles.listColumn}>
                      <TransactionList
                        transactions={transactions}
                        onDelete={handleDelete}
                      />
                    </div>
                    <div className={styles.formColumn}>
                      <AddTransaction onAdd={handleAdd} />
                    </div>
                  </div>
                </>
              }
            />

            <Route
              path="/about"
              element={
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "50px",
                    color: "#fff",
                  }}
                >
                  <ContactCard />
                </div>
              }
            />

            <Route
              path="/contact"
              element={
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "50px",
                    color: "#fff",
                  }}
                >
                  <h2>Sobre o Money Hub</h2>
                  <p style={{ color: "grey" }}>Página em construção...</p>
                </div>
              }
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
