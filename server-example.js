const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());

// Dados pessoais para RAG
const personalData = {
  nome: "Davi Artur Silva Sousa",
  cargo: "Desenvolvedor Web",
  bio: "Apaixonado por desenvolvimento web..."
};

// Rota de chatbot com Ollama local gratuito e ilimitado
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  try {
    const response = await fetch('http://localhost:11434/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        messages: [
          { role: 'system', content: `Responda perguntas sobre esta pessoa usando apenas estas informações: ${JSON.stringify(personalData)}` },
          { role: 'user', content: message }
        ],
        stream: false
      })
    });
    const data = await response.json();
    res.json({ reply: data.message.content });
  } catch (e) {
    res.status(500).json({ reply: 'Chatbot offline. Use Ollama local.' });
  }
});

app.listen(3000, () => console.log('Server rodando na porta 3000'));
