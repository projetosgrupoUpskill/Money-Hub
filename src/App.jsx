import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { initialTransactions } from "./mockData.js"
import Summary from "./components/Summary.jsx"
import TransactionList from "./components/TransactionList.jsx"
import AddTransaction from "./pages/AddTransaction.jsx"
import Header from "./components/Header.jsx"
import styles from "./App.module.css"
import Footer from "./components/Footer.jsx"
import ContactCard from "./components/Contact.jsx"


function App() {
  const [transactions, setTransactions] = useState(initialTransactions)
  const [filter, setFilter] = useState("all")

  const handleAdd = (description, amount, type) => {
    setTransactions([{ id: Date.now(), description, amount, type, date: new Date().toISOString() }, ...transactions])
  }

  const handleDelete = (id) => {
    setTransactions(transactions.filter(t => t.id !== id))
  }

  const income = transactions.filter(t => t.type === "income").reduce((acc, t) => acc + t.amount, 0)
  const expense = transactions.filter(t => t.type === "expense").reduce((acc, t) => acc + t.amount, 0)
  const balance = income - expense

  const filteredTransactions = transactions.filter(t => filter === "all" || t.type === filter)

  return (
    <Router>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Header />

          <Routes>
            <Route path="/" element={
              <>
                <Summary balance={balance} income={income} expense={expense} onCardClick={setFilter} />
                <div className={styles.gridTwoColumns}>
                  <div className={styles.listColumn}>
                    <TransactionList transactions={filteredTransactions} onDelete={handleDelete} />
                  </div>
                  <div className={styles.formColumn}>
                    <AddTransaction onAdd={handleAdd} />
                  </div>
                </div>
              </>
            } />

            <Route path="/about" element={
              <div style={{ textAlign: 'center', marginTop: '50px', color: '#fff' }}>
                <ContactCard />
              </div>
            } />

            <Route path="/contact" element={
              <div style={{ textAlign: 'center', marginTop: '50px', color: '#fff' }}>
                <h2>Sobre o Money Hub</h2>
                <p style={{color: 'grey'}}>Página em construção...</p>
              </div>
            } />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App

