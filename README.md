# Testes Automatizados com Cypress e GitHub Actions

Este repositório contém a suíte de testes automatizados end-to-end utilizando o [Cypress](https://www.cypress.io/) e integração contínua com [GitHub Actions](https://github.com/features/actions).

## 📂 Estrutura do Projeto

## 🚀 Tecnologias Utilizadas

- [Cypress](https://docs.cypress.io/)
- [GitHub Actions](https://docs.github.com/actions)
- [Node.js](https://nodejs.org/)

## 🧪 Como Executar os Testes Localmente

1. Clone este repositório: git clone https://github.com/marcus1708/Cypress_GithubActions.git
2. Instale as dependências:
3. Execute os testes:
  npx cypress open     # Para abrir a interface do Cypress
  npx cypress run      # Para rodar os testes no terminal

## ⚙️ Execução Automática com GitHub Actions !

A suíte de testes é executada automaticamente a cada push ou pull request no branch main.

O arquivo de workflow está localizado em:

.github/workflows/ci.yml
