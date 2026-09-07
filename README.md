
# Portfólio Pessoal — GAC116 Programação Web (UFLA)

Repositório desenvolvido para a disciplina de **Programação Web** da Universidade Federal de Lavras (UFLA). O projeto consiste em uma página de portfólio pessoal implementada por meio de duas abordagens distintas com frameworks CSS modernos, focando em responsividade, organização estruturada de código e interatividade com JavaScript.

## 👨‍💻 Autor
* **Nome:** Ronan Gustavo Carletto
* **Curso:** Sistemas de Informação — UFLA

## 🔗 Links Importantes
* **Acesse o site publicado:** [https://carlettoronan.github.io/pagina-pessoal/](https://carlettoronan.github.io/pagina-pessoal/)
---

## 📂 Estrutura do Projeto

O repositório está organizado em uma estrutura modular que atende aos requisitos de arquivos externos de estilos e scripts, além da centralização por meio de uma página de entrada (portal):

pagina-pessoal/
├── index.html                  # Página inicial (Portal de redirecionamento para as versões)
├── README.md                   # Documentação do repositório
│
├── bootstrap/
│   ├── index.html              # Versão estruturada com Bootstrap 5
│   └── assets/
│       ├── css/styles.css       # Estilos customizados e ajuste de margens para navbar fixa
│       ├── js/script.js         # Lógica de alternância de tema (Dark/Light) com LocalStorage
│       └── img/foto.jpg         # Imagem de perfil do usuário
│
└── outro-framework/
    ├── index.html              # Versão estruturada com Tailwind CSS
    └── assets/
        ├── css/styles.css       # Estilos customizados e compatibilidade de layout
        ├── js/script.js         # Lógica de manipulação de classes tailwind/dark com LocalStorage
        └── img/foto.jpg         # Imagem de perfil do usuário

---

## 🚀 Tecnologias e Ferramentas Utilizadas

* **HTML5 Semantic** (Estruturação de tags e seções acessíveis)
* **CSS3** (Regras customizadas para refinamento visual e comportamento de rolagem)
* **JavaScript** (Manipulação do DOM e persistência de preferências do usuário com `localStorage`)
* **Bootstrap 5.3** (Carregamento via CDN para componentes responsivos e sistema de grid)
* **Tailwind CSS** (Carregamento via CDN com abordagem *utility-first*)
* **Font Awesome 6.5** (Biblioteca de ícones vetoriais)

---

## ⚙️ Principais Funcionalidades

1. **Menu de Entrada (Portal):** Arquivo raiz que permite ao avaliador transitar rapidamente entre a versão desenvolvida em Bootstrap e a versão em Tailwind CSS.
2. **Modo Escuro / Claro (Dark/Light Mode):** Botão interativo na barra de navegação capaz de alternar o esquema de cores da página e salvar a preferência do usuário no armazenamento local do navegador (`localStorage`).
3. **Navegação Suave (*Smooth Scroll*):** Rolagem fluída ao clicar nos itens do menu superior, contando com ajustes de margem interna (*scroll-margin-top*) para evitar que títulos fiquem ocultos sob a barra de navegação fixa (*sticky*).
4. **Organização Modular:** Separação limpa de responsabilidades com arquivos `.css` e `.js` externos alocados em pastas dedicadas (`assets/css/` e `assets/js/`).