import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Ler do localStorage ao inicializar o estado
  // Se não existir valor guardado, usa 'light' como default
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // 2. Escrever no localStorage sempre que o tema muda
  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


// Contexto de Tema (ThemeContext) que gerencia o estado do tema visual (claro ou escuro) do aplicativo. 
// Ele utiliza o localStorage para persistir a escolha do tema entre sessões, garantindo que os usuários 
// mantenham suas preferências mesmo após fechar o navegador. O contexto fornece uma função para alternar 
// entre os temas, permitindo que os componentes do aplicativo acessem e modifiquem facilmente o tema atual. 
// Além disso, o efeito colateral aplicado ao body do documento garante que o tema seja aplicado globalmente 
// em todo o aplicativo, proporcionando uma experiência de usuário consistente.  