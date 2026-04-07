# MONEY HUB 💸 Gestão de Despesas Pessoais

Uma aplicação React para acompanhares o teu dinheiro — o que entra, o que sai, e quanto te sobra!

---

## 🗺️ Roadmap do Projecto

| Fase | Estado |
|------|--------|
| **Versão 1** | ✅ Em curso |
| **Versão ...** | 🔒 Em breve |

---

## Versão 1

O objectivo desta fase é ter **uma página a funcionar** com interacção real, usando dados de teste. Sem router, sem base de dados — só React puro.

---

### Funcionalidades

- [x] Ver o saldo actual (receitas menos despesas)
- [x] Ver receitas e despesas em totais separados
- [x] Adicionar uma transacção — a lista e os totais actualizam imediatamente
- [x] Apagar uma transacção — os totais recalculam sozinhos
- [x] Distinguir receitas de despesas visualmente (verde / vermelho)

---

### Estrutura de Ficheiros

```
src/
├── App.jsx                  ← cérebro da aplicação, estado global
├── mockData.js              ← dados de teste temporários
└── components/
    ├── Summary.jsx          ← os três cards (saldo, receitas, despesas)
    ├── TransactionList.jsx  ← a lista de transacções
    ├── TransactionItem.jsx  ← um item individual (verde/vermelho)
    └── AddTransaction.jsx   ← o formulário de adicionar
```
---



### Como Correr o Projecto

```bash
# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) no browser.

---

*Construído com React · Projecto UpSkill*
*Alunas*
*Natália Carvalho de Pinho Joaquim nº 219*
*Rebeca Luiza Soares Cerqueira nº 224* 
