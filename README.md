# Portfolio Pessoal - Davi Artur Silva Sousa

Portfolio moderno, responsivo e interativo desenvolvido para apresentar minha trajetória profissional, projetos e habilidades técnicas, com integração de dados em tempo real e assistente virtual personalizado.

## 🚀 Sobre o Projeto

Este repositório demonstra meu conhecimento em desenvolvimento web com foco em integração de dados e automação com Inteligência Artificial. O site funciona como um cartão de visita digital completo, unindo design, interatividade e dados dinâmicos do GitHub.

> Desenvolvido como portfólio acadêmico e profissional durante a graduação em Análise e Desenvolvimento de Sistemas.

## ✨ Funcionalidades

- **Perfil dinâmico personalizado** com dados centralizados em `personalData`
- **Integração com GitHub API** para listar repositórios atualizados automaticamente
- **Modal de projeto** com visão detalhada: problema, solução, tecnologias, resultado e link para demo
- **Filtro de projetos por tecnologia** com chips interativos
- **Radar de Habilidades** visualizado com Canvas
- **Chatbot assistente** em popup flutuante com intenções baseadas em regras, sugestões rápidas e indicador de digitação
- **Gerador de pitch para vaga** a partir da descrição da oportunidade
- **Modo claro/escuro** com persistência em localStorage
- **Barra de progresso de scroll** e efeito parallax sutil no fundo
- **Download de currículos** Administrativo e Suporte TI em nova aba
- **Design responsivo** otimizado para mobile e desktop
- **Acessibilidade visual** com overlay e tipografia Inter

## 🛠️ Tecnologias Utilizadas

- React via CDN UMD + Babel Standalone
- Tailwind CSS CDN
- GitHub REST API
- JavaScript Vanilla
- Canvas API para gráficos
- CSS moderno com backdrop-blur e gradientes

## 📂 Estrutura

```
portfolio-chatbot/
├── index.html       # Aplicação completa em arquivo único
├── README.md
├── CurriculoDaviAdm2026.pdf
└── Curriculo_SuporteT.I.pdf
```

## ⚙️ Como personalizar

1. Abra `index.html` e localize o objeto `personalData`
2. Atualize nome, cargo, formação, experiência, habilidades, contatos GitHub e LinkedIn
3. Substitua os PDFs dos currículos na raiz do projeto para manter os links de download
4. Ajuste as cores e textos diretamente no JSX

### Chatbot

O assistente usa um mapa de intenções com expressões regulares sobre `personalData`.

## 🚀 Deploy

O projeto é estático e pode ser publicado em:

- GitHub Pages
- Netlify Drop
- Vercel

Basta fazer upload do `index.html` e dos PDFs do currículo.


---

Desenvolvido por **Davi Artur Silva Sousa**  
Recife - PE | GitHub: daviarturss | LinkedIn: daviartur
