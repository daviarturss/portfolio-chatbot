const { useState, useEffect, useRef } = React;

// Dados pessoais - personalize aqui
const personalData = {
  nome: "Davi Artur Silva Sousa",
  cargo: "Desenvolvedor Web Full Stack",
  bio: "Apaixonado por desenvolvimento web com integração de dados e automação com IA.",
  habilidades: ["React", "Next.js", "Node.js", "Python", "SQL", "Git"],
  sobre: "Sou desenvolvedor com foco em criar experiências web modernas, integrando APIs e automatizando tarefas com IA.",
  contato: {
    email: "seu@email.com",
    github: "daviarturss",
    linkedin: "daviarturss"
  }
};

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([
    {role: 'assistant', text: 'Olá! Sou o assistente do portfolio. Pergunte sobre mim, habilidades ou projetos.'}
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    const user = personalData.contato.github;
    if (!user || user === 'seuusuario') {
      setLoading(false);
      return;
    }
    fetch(`https://api.github.com/users/${user}/repos?per_page=6&sort=updated`)
      .then(r => r.json())
      .then(data => setRepos(Array.isArray(data) ? data : []))
      .catch(() => setRepos([]))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = {role: 'user', text: input};
    setMessages(m => [...m, userMsg]);
    setInput('');
    // Resposta automatizada baseada em dados pessoais - simula IA/RAG
    setTimeout(() => {
      const q = input.toLowerCase();
      let answer = '';
      if (q.includes('nome') || q.includes('quem')) answer = `Meu nome é ${personalData.nome}, ${personalData.cargo}.`;
      else if (q.includes('habilidade') || q.includes('skill')) answer = `Minhas principais habilidades são: ${personalData.habilidades.join(', ')}.`;
      else if (q.includes('sobre') || q.includes('bio')) answer = personalData.sobre;
      else if (q.includes('projeto') || q.includes('github')) answer = `Meus projetos estão no GitHub: https://github.com/${personalData.contato.github}. Veja os repositórios abaixo.`;
      else if (q.includes('email') || q.includes('contato')) answer = `Pode me contatar em ${personalData.contato.email}.`;
      else answer = `Interessante! Sobre isso, ${personalData.bio} Posso falar mais sobre habilidades, projetos ou meu background.`;
      setMessages(m => [...m, {role: 'assistant', text: answer}]);
    }, 500);
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 backdrop-blur bg-gray-950/70 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">{personalData.nome}</h1>
          <nav className="space-x-4 text-sm">
            <a href="#sobre" className="hover:text-white text-gray-400">Sobre</a>
            <a href="#projetos" className="hover:text-white text-gray-400">Projetos</a>
            <a href="#chat" className="hover:text-white text-gray-400">Chat</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-10">
        <section className="lg:col-span-2 space-y-12">
          <section id="sobre">
            <h2 className="text-3xl font-bold mb-4">Olá, eu sou {personalData.nome}</h2>
            <p className="text-gray-300">{personalData.bio}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {personalData.habilidades.map(h => (
                <span key={h} className="px-3 py-1 bg-gray-800 rounded-full text-sm">{h}</span>
              ))}
            </div>
          </section>

          <section id="projetos">
            <h3 className="text-2xl font-semibold mb-4">Projetos do GitHub</h3>
            {loading ? <p className="text-gray-400">Carregando...</p> : repos.length === 0 ? (
              <p className="text-gray-400">Configure seu usuário GitHub em personalData.contato.github para exibir repositórios automaticamente.</p>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {repos.map(r => (
                  <a key={r.id} href={r.html_url} target="_blank" className="block p-4 bg-gray-900 rounded-xl hover:bg-gray-800 border border-gray-800">
                    <h4 className="font-semibold">{r.name}</h4>
                    <p className="text-sm text-gray-400 line-clamp-2">{r.description}</p>
                    <div className="mt-2 text-xs text-gray-500">{r.language} • {r.stargazers_count} ★</div>
                  </a>
                ))}
              </div>
            )}
          </section>
        </section>

        <aside id="chat" className="lg:col-span-1">
          <div className="sticky top-24 bg-gray-900 border border-gray-800 rounded-2xl flex flex-col h-[600px]">
            <div className="p-4 border-b border-gray-800 font-semibold">Chat sobre mim</div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m,i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${m.role === 'user' ? 'bg-blue-600' : 'bg-gray-800'}`}>{m.text}</div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <div className="p-3 border-t border-gray-800 flex gap-2">
              <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} placeholder="Pergunte algo..." className="flex-1 bg-gray-800 rounded-lg px-3 py-2 text-sm outline-none"/>
              <button onClick={handleSend} className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium hover:bg-blue-500">Enviar</button>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">Chat usa RAG sobre dados pessoais. Para IA real, substitua handleSend por chamada a Gemini/Ollama.</p>
        </aside>
      </main>

      <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {personalData.nome} • Portfolio com integração de dados e automação IA
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
