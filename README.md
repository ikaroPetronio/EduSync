# 🧠 Edusync - Sistema de Alocação Docente Inteligente

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) 
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) 
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)


Este projeto é uma plataforma React para gestão inteligente de alocações docentes em instituições de ensino, desenvolvida com:

- ⚡ Vite para construção rápida
- 🎨 Tailwind CSS para estilização
- 🧩 Heroicons para ícones
- 🚀 React Router para navegação

## Funcionalidades Principais

- Cadastro de preferências de professores (disciplinas, horários, carga horária)
- Visualização inteligente de disponibilidades
- Gerenciamento por semestre letivo
- Interface responsiva e acessível

## Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Inicie o vite:
```bash
npm run dev
```


## 🌐 Rotas Principais

```bash
/login
/register
/dashboard
/registerclass
```

##  Estrutura do Projeto
```bash
edusync/
├── public/
│   ├── brain-icon.svg          # Ícone do projeto (favicon)
│   └── vite.svg               # Ícone padrão do Vite
│  
├── src/
│   ├── assets/
│   │   └── react.svg          # Logo React (opcional)
│   │
│   ├── components/
│   │   ├── Button.jsx         # Componente de botão reutilizável
│   │   ├── Input.jsx          # Campo de formulário estilizado
│   │   ├── SelectionCard.jsx  # Card de seleção interativo
│   │   └── SectionTitle.jsx   # Títulos padronizados
│   │
│   ├── pages/
│   │   ├── Login.jsx          # Página de autenticação
│   │   ├── Register.jsx       # Página de cadastro
│   │   ├── DashboardHome.jsx  # Painel pós-login
│   │   └── CadastrarTurma.jsx # Formulário de preferências
│   │
│   ├── App.jsx                # Configuração de rotas
│   └── main.jsx               # Ponto de entrada da aplicação
│
├──  index.html                # Template HTML principal
├── .eslintrc.cjs              # Configuração do ESLint
├── tailwind.config.js         # Configuração do Tailwind
├── vite.config.js             # Configuração do Vite
├── package.json               # Dependências e scripts
└── README.md                  # Documentação do projeto
```
