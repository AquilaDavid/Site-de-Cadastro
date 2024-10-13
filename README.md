# Landing Page - Sistema de Cadastro com Validação de Formulário

Este projeto é uma landing page que apresenta uma interface de boas-vindas, com um sistema simples de login e validação de formulário. A página inclui estilos responsivos para diferentes dispositivos, com suporte tanto para desktop quanto para mobile.

## Funcionalidades

- **Interface de Login**: A landing page permite que os usuários insiram seu e-mail e senha.
- **Validação de Formulário**: O formulário realiza a validação dos campos de e-mail e senha. O e-mail deve ser válido e a senha deve conter ao menos 8 caracteres, incluindo um caractere especial.
- **Layout Responsivo**: O projeto contém arquivos CSS distintos para desktop e mobile, proporcionando uma experiência otimizada para qualquer dispositivo.

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica do projeto.
- **CSS3**: Estilização, com folhas de estilo separadas para desktop e mobile.
- **JavaScript**: Validação do formulário, utilizando expressões regulares para e-mail e senha.
- **Media Queries**: Usadas para adaptar o layout em diferentes resoluções de tela.

## Estrutura do Projeto

```bash
📁 landing-page-project
│
├── 📂 css
│   ├── 📂 pc
│   │   └── style.css     # Estilos para versão desktop
│   ├── 📂 mobile
│   │   └── mobile.css    # Estilos para versão mobile
│
├── 📂 imagens
│   └── 1724462712972.png_image.png   # Imagem principal do projeto
│
├── 📂 js
│   └── index.js         # Scripts JavaScript para validação do formulário
│
└── index.html           # Arquivo HTML principal
