const API_URL = "http://localhost:3001";

export const getTransactions = () =>
  fetch(`${API_URL}/api/transactions`).then((res) => res.json());

export const createTransaction = (data) =>
  fetch(`${API_URL}/api/transactions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());

export const deleteTransaction = (id) =>
  fetch(`${API_URL}/api/transactions/${id}`, { method: "DELETE" });

export const getCategories = () =>
  fetch(`${API_URL}/api/categories`).then((res) => res.json());
