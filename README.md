Portfolio com Chatbot IA

Este projeto demonstra desenvolvimento web com integração de dados e automação com IA.

Tecnologias
- React via CDN + Babel
- Tailwind CSS CDN
- GitHub API para listar repositórios automaticamente

Como personalizar
1. Edite app.jsx e altere o objeto personalData com seu nome, bio, habilidades e usuário GitHub.
2. O chatbot atualmente usa respostas baseadas em regras sobre personalData. Para usar IA real gratuita:
   - Opção 1: Ollama local. Instale Ollama e rode `ollama run llama3.2`. Substitua handleSend por fetch para http://localhost:11434/api/chat
   - Opção 2: Gemini API com free tier. Crie API_KEY e chame https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent
3. Deploy: arraste os arquivos para Netlify Drop ou GitHub Pages.

Estrutura
- index.html
- app.jsx
- README.md

Próximos passos
- Adicionar página de projetos detalhada
- Integrar formulários com dados em planilha
- Adicionar modo escuro/claro
