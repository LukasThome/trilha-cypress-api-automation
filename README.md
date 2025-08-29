# Trilha Cypress API Automation

Este repositório contém testes automatizados de API desenvolvidos com Cypress para o curso de automação web API da trilha de Cypress da DIO. O projeto demonstra boas práticas de automação de testes de API usando o framework Cypress.

## 🎯 Sobre o Projeto

Este projeto implementa testes automatizados para a API REST do [Restful Booker](https://restful-booker.herokuapp.com/), uma API de demonstração para reservas de hotel. Os testes cobrem funcionalidades de autenticação e gerenciamento de reservas.

## 🚀 Tecnologias Utilizadas

- **Cypress** `^13.3.0` - Framework de testes end-to-end
- **Node.js** - Ambiente de execução JavaScript
- **dotenv** - Gerenciamento de variáveis de ambiente
- **ESLint** - Linting e padronização de código

## 📁 Estrutura do Projeto

```
trilha-cypress-api-automation/
├── cypress/
│   ├── e2e/
│   │   └── APITests/
│   │       ├── auth.cy.js          # Testes de autenticação
│   │       └── booking.cy.js       # Testes de reservas
│   ├── fixtures/
│   │   ├── booking/                # Dados de teste para reservas
│   │   └── example.json
│   └── support/
│       ├── commands.js             # Comandos customizados
│       └── e2e.js                  # Configurações globais
├── .github/
│   └── workflows/
│       └── cypress.yml             # CI/CD com GitHub Actions
├── cypress.config.js               # Configuração do Cypress
├── package.json
└── README.md
```

## ⚙️ Configuração do Ambiente

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/trilha-cypress-api-automation.git
   cd trilha-cypress-api-automation
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   
   Crie um arquivo `.env` na raiz do projeto:
   ```bash
   touch .env
   ```
   
   Adicione as seguintes variáveis:
   ```env
   CYPRESS_USERNAME=admin
   CYPRESS_PASSWORD=password123
   CYPRESS_PROJECT_ID=seu_project_id_aqui
   ```

## 🧪 Executando os Testes

### Modo Headless (CI/CD)
```bash
# Executar todos os testes
npx cypress run

# Executar apenas testes de API
npm run run-api-tests

# Executar outros testes
npm run run-other-tests
```

### Modo Interativo
```bash
# Abrir interface gráfica do Cypress
npx cypress open
```

## 📋 Cenários de Teste

### Autenticação (`auth.cy.js`)
- ✅ POST credentials com sucesso (versão 1)
- ✅ POST credentials com sucesso (versão 2)
- ✅ POST credentials com credenciais inválidas

### Reservas (`booking.cy.js`)
- ✅ GET todas as reservas
- ✅ GET reservas por nome
- ✅ GET reservas por data de check-in
- ✅ GET reserva específica por ID
- ✅ POST criar nova reserva
- ✅ PUT atualizar reserva sem autorização (403)
- ✅ PUT atualizar reserva com autorização

## 🔧 Configurações

### Cypress Configuration (`cypress.config.js`)
- **Base URL:** `https://restful-booker.herokuapp.com`
- **Timeouts:** 6000ms para requests e responses
- **Environment Variables:** Carregadas via dotenv

### Comandos Customizados
O projeto inclui comandos customizados definidos em `cypress/support/commands.js`:
- `cy.authToken()` - Obter token de autenticação
- `cy.getRequest()` - Requisições GET
- `cy.postRequest()` - Requisições POST
- `cy.putRequest()` - Requisições PUT

## 🔄 CI/CD

O projeto está configurado com GitHub Actions para execução automática dos testes. O workflow está definido em `.github/workflows/cypress.yml`.

## 📊 Relatórios

Os testes geram automaticamente:
- Screenshots em caso de falhas
- Vídeos das execuções (quando habilitado)
- Relatórios detalhados no terminal

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença ISC. Veja o arquivo `package.json` para mais detalhes.

## 📚 Recursos Adicionais

- [Documentação do Cypress](https://docs.cypress.io/)
- [API Restful Booker](https://restful-booker.herokuapp.com/apidoc/index.html)
- [Trilha Cypress DIO](https://dio.me/)

---

**Desenvolvido com ❤️ para a comunidade DIO**
