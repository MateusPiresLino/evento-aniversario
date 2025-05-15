# 🎉 Contador Regressivo – Aniversário

Olá! Este projeto foi desenvolvido como parte do módulo front-end do curso Fullstack Java da EBAC. O objetivo principal era reforçar conhecimentos em JavaScript, Sass, HTML5/CSS3, lógica de programação e responsividade, criando uma landing page para celebrar e compartilhar a contagem regressiva do meu aniversário.

---

## Sobre o projeto

O contador regressivo mostra, em tempo real, quantos dias, horas, minutos e segundos faltam para o próximo evento (aniversário ou qualquer data escolhida). O usuário pode personalizar a data do evento, alternar entre modo claro, escuro ou automático (seguindo o tema do sistema operacional), e ainda recebe uma mensagem especial ao chegar a data comemorada.

Durante o desenvolvimento, foquei em organização de código, boas práticas de acessibilidade, responsividade e uma experiência visual agradável em qualquer dispositivo.

---

## Funcionalidades

- Contador regressivo dinâmico para uma data escolhida
- Modo escuro/claro e opção automática, com persistência da preferência
- Input de data estilizado e centralizado
- Mensagem personalizada e animada ao zerar o contador
- Layout totalmente responsivo (funciona bem em mobile, tablet e desktop)
- Interface moderna e acessível, com uso de variáveis e transições suaves

---

## Aprendizados e destaques pessoais

Esse projeto me ajudou a aprofundar em vários conceitos importantes, como:

- Manipulação de datas e lógica de contagem em JavaScript
- Modularização do CSS com SASS e uso de variáveis
- Separação de responsabilidades em múltiplos arquivos para facilitar manutenção
- Detecção do tema do sistema com JavaScript (`prefers-color-scheme`)
- Animação de elementos para melhorar o feedback visual
- Validação de layout e acessibilidade em diferentes tamanhos de tela

O maior desafio foi lidar com as conversões de datas/milissegundos e garantir que o tema fosse sincronizado corretamente entre sistema, escolha manual e persistência local. Fiquei muito satisfeito com o resultado final e com o quanto evoluí em lógica, organização e visão de UX.

---

## Como rodar localmente

**Pré-requisitos:**  
Ter [Node.js](https://nodejs.org/), [npm](https://www.npmjs.com/) e [Parcel](https://parceljs.org/) instalados.

1. Clone este repositório:
   ```bash
   git clone https://github.com/MateusPiresLino/evento-aniversario.git
   cd evento-aniversario
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   ou
   ```bash
   npx parcel src/index.html
   ```
4. Abra em [http://localhost:1234](http://localhost:1234)

---

## Tecnologias utilizadas

- HTML5 semântico
- CSS3 (Sass/SCSS)
- JavaScript (ES6+)
- Parcel (bundler)

---

## Estrutura do projeto

```
├── src/
│   ├── assets/
│   ├── css/
│   │   ├── _variaveis.scss
│   │   ├── _contador.scss
│   │   ├── _botao.scss
│   │   ├── _layout.scss
│   │   ├── _menu_tema.scss
│   │   └── style.scss
│   ├── js/
│   │   ├── contador.js
│   │   └── main.js
│   └── index.html
└── README.md
```

---

## Como personalizar

- Basta alterar a data desejada no campo "Escolha uma data"
- As cores e estilos podem ser facilmente customizados em `_variaveis.scss` para criar sua própria identidade visual

---

## Contato

Feito com dedicação por Mateus Lino  
[GitHub: MateusPiresLino](https://github.com/MateusPiresLino)  
[LinkedIn: omateuslino](https://www.linkedin.com/in/omateuslino/)

---

## Licença

Projeto sob licença MIT. Fique à vontade para usar, modificar e compartilhar!
