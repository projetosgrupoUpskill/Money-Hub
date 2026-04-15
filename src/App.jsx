import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransaction";
import ContactCard from "./pages/Contact";

// Criamos o cliente do React Query
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {/* O MainLayout contém o Header, Navbar e Footer */}
          <Route path="/" element={<MainLayout />}>
            
            {/* Página Principal agora é o Dashboard */}
            <Route index element={<Dashboard />} />
            
            <Route path="adicionar" element={<AddTransaction />} />
            <Route path="about" element={<ContactCard />} />
            
            {/* Redirecionamento se a rota não existir */}
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;