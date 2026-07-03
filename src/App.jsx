import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Compass,
  Mail,
  Map,
  MapPin,
  MessageCircle,
  Mountain,
  Navigation,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  Waves,
  Wind,
} from 'lucide-react';

const routes = [
  {
    id: 'costa',
    title: 'Costa de vento e sal',
    kicker: 'Trilha costeira',
    image: '/assets/roteiro-costa.png',
    icon: Waves,
    duration: '1 dia',
    group: '4 a 10 pessoas',
    season: 'Mar a jun',
    pace: 'Leve a moderado',
    story:
      'Caminhada guiada por costões, piscinas naturais e mirantes onde o vento desenha o percurso.',
    highlights: ['Guia local', 'Banho de maré baixa', 'Piquenique de produtores'],
    tone: 'Para quem quer chegar perto do mar sem transformar a viagem em check-list.',
  },
  {
    id: 'serra',
    title: 'Serra de mesa posta',
    kicker: 'Cultura e sabor',
    image: '/assets/roteiro-serra.png',
    icon: Mountain,
    duration: '2 dias',
    group: '6 a 12 pessoas',
    season: 'Abr a set',
    pace: 'Contemplativo',
    story:
      'Estradas pequenas, aldeias de pedra, cozinha de fogo lento e conversa com quem guarda o território.',
    highlights: ['Hospedagem familiar', 'Oficina de ervas', 'Jantar de território'],
    tone: 'Para viajantes que preferem escutar a paisagem antes de atravessá-la.',
  },
  {
    id: 'noite',
    title: 'Água calma, céu aberto',
    kicker: 'Saída noturna',
    image: '/assets/roteiro-noite.png',
    icon: Navigation,
    duration: '4 horas',
    group: '2 a 8 pessoas',
    season: 'Ano todo',
    pace: 'Suave',
    story:
      'Passeio ao entardecer por enseadas protegidas, com narrativas de maré, estrelas e memória costeira.',
    highlights: ['Barco tradicional', 'Lanternas a bordo', 'Ceia simples no retorno'],
    tone: 'Para fechar o dia com silêncio, história e uma luz que fica na memória.',
  },
];

const journey = [
  {
    title: 'Escuta',
    text: 'A viagem começa pelo perfil do grupo, ritmo desejado, limites físicos e curiosidades reais.',
  },
  {
    title: 'Rota',
    text: 'A Nortada desenha o percurso com guias, anfitriões e janelas de clima que fazem sentido.',
  },
  {
    title: 'Encontro',
    text: 'Cada saída aproxima paisagem, mesa, memória e pessoas sem transformar o lugar em palco.',
  },
  {
    title: 'Retorno',
    text: 'Depois da experiência, o viajante recebe registro visual, contatos locais e sugestões para seguir.',
  },
];

const proof = [
  'Roteiros autorais e ajustados à temporada',
  'Grupos pequenos com anfitrião local',
  'Pontos de encontro, preparo e suporte claros',
  'Curadoria de parceiros com impacto positivo',
];

function App() {
  const [activeRouteId, setActiveRouteId] = useState(routes[0].id);
  const [briefing, setBriefing] = useState({
    name: '',
    interest: 'Costa de vento e sal',
    date: '',
  });

  const activeRoute = useMemo(
    () => routes.find((route) => route.id === activeRouteId) ?? routes[0],
    [activeRouteId],
  );

  const contactBody = encodeURIComponent(
    [
      'Olá, Nortada.',
      '',
      `Meu nome: ${briefing.name || 'a preencher'}`,
      `Roteiro de interesse: ${briefing.interest}`,
      `Data ou temporada: ${briefing.date || 'a definir'}`,
      '',
      'Quero receber uma proposta de experiência.',
    ].join('\n'),
  );

  const whatsappHref = `https://wa.me/5500000000000?text=${contactBody}`;
  const mailHref = `mailto:contato@nortada.tur.br?subject=${encodeURIComponent(
    'Quero viajar com a Nortada',
  )}&body=${contactBody}`;

  function handleBriefingChange(event) {
    const { name, value } = event.target;
    setBriefing((current) => ({ ...current, [name]: value }));
  }

  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Navegação principal">
        <a className="brand" href="#top" aria-label="Nortada">
          <span className="brand-mark">
            <Wind size={18} aria-hidden="true" />
          </span>
          <span>Nortada</span>
        </a>
        <nav className="nav-links">
          <a href="#narrativa">Narrativa</a>
          <a href="#roteiros">Roteiros</a>
          <a href="#metodo">Método</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="nav-cta" href={whatsappHref} target="_blank" rel="noreferrer">
          <MessageCircle size={17} aria-hidden="true" />
          Falar agora
        </a>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-image"
          src="/assets/nortada-hero.png"
          alt="Grupo caminhando por uma trilha costeira ao pôr do sol"
        />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">
            <Compass size={17} aria-hidden="true" />
            Turismo de experiência guiado pelo território
          </p>
          <h1>Nortada</h1>
          <p className="hero-copy">
            Roteiros autorais para atravessar costa, serra e memória local com
            tempo de olhar, encontro verdadeiro e contato claro do primeiro
            clique até o retorno.
          </p>
          <div className="hero-actions">
            <a className="button primary hero-route-cta" href="#roteiros">
              <Map size={18} aria-hidden="true" />
              Ver roteiros
            </a>
            <a className="button ghost" href={mailHref}>
              <Mail size={18} aria-hidden="true" />
              Pedir proposta
            </a>
          </div>
        </div>
        <div className="hero-metrics" aria-label="Destaques da Nortada">
          <span>
            <strong>8</strong>
            roteiros de temporada
          </span>
          <span>
            <strong>12</strong>
            viajantes por grupo
          </span>
          <span>
            <strong>72h</strong>
            para proposta inicial
          </span>
        </div>
      </section>

      <section className="intro-band" id="narrativa">
        <div className="section-heading">
          <p className="eyebrow dark">
            <Sparkles size={16} aria-hidden="true" />
            Narrativa visual
          </p>
          <h2>O roteiro nasce quando o vento encontra uma história.</h2>
        </div>
        <p className="intro-copy">
          A Nortada organiza viagens pequenas, sensíveis e precisas: cada roteiro
          tem ponto de encontro, ritmo, anfitriões, preparos e alternativas de
          clima definidos antes da saída.
        </p>
      </section>

      <section className="journey-section" aria-label="Etapas da experiência Nortada">
        <div className="journey-grid">
          {journey.map((item, index) => (
            <article className="journey-step" key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="routes-section" id="roteiros">
        <div className="section-heading wide">
          <p className="eyebrow dark">
            <MapPin size={16} aria-hidden="true" />
            Roteiros curados
          </p>
          <h2>Escolha pelo tipo de lembrança que você quer trazer.</h2>
          <p>
            Cada saída combina paisagem, logística e encontros locais. A seleção
            abaixo mostra os três produtos iniciais da marca.
          </p>
        </div>

        <div className="route-tabs" aria-label="Selecionar roteiro em destaque">
          {routes.map((route) => {
            const Icon = route.icon;
            return (
              <button
                className={route.id === activeRouteId ? 'route-tab active' : 'route-tab'}
                key={route.id}
                type="button"
                onClick={() => {
                  setActiveRouteId(route.id);
                  setBriefing((current) => ({ ...current, interest: route.title }));
                }}
              >
                <Icon size={17} aria-hidden="true" />
                {route.title}
              </button>
            );
          })}
        </div>

        <div className="featured-route">
          <img src={activeRoute.image} alt={`Experiência ${activeRoute.title}`} />
          <div className="featured-route-copy">
            <p className="route-kicker">{activeRoute.kicker}</p>
            <h3>{activeRoute.title}</h3>
            <p>{activeRoute.tone}</p>
            <div className="route-facts" aria-label="Dados do roteiro selecionado">
              <span>
                <Clock3 size={16} aria-hidden="true" />
                {activeRoute.duration}
              </span>
              <span>
                <Users size={16} aria-hidden="true" />
                {activeRoute.group}
              </span>
              <span>
                <CalendarDays size={16} aria-hidden="true" />
                {activeRoute.season}
              </span>
            </div>
            <a className="button compact" href="#contato">
              <Send size={17} aria-hidden="true" />
              Consultar disponibilidade
            </a>
          </div>
        </div>

        <div className="route-card-grid">
          {routes.map((route) => (
            <article className="route-card" key={route.id}>
              <img src={route.image} alt={`Cena do roteiro ${route.title}`} />
              <div className="route-card-copy">
                <p>{route.kicker}</p>
                <h3>{route.title}</h3>
                <span>{route.story}</span>
                <ul>
                  {route.highlights.map((highlight) => (
                    <li key={highlight}>
                      <CheckCircle2 size={16} aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="method-section" id="metodo">
        <div className="method-copy">
          <p className="eyebrow dark">
            <ShieldCheck size={16} aria-hidden="true" />
            Jeito Nortada
          </p>
          <h2>Experiência com beleza, cuidado e informação prática.</h2>
          <p>
            A marca não vende apenas um destino. Ela amarra expectativa, preparo,
            deslocamento, anfitriões e contato pós-viagem em uma jornada simples de
            entender.
          </p>
        </div>
        <div className="method-list">
          {proof.map((item) => (
            <div className="method-item" key={item}>
              <CheckCircle2 size={18} aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="contact-copy">
          <p className="eyebrow">
            <MessageCircle size={16} aria-hidden="true" />
            Ponto de contato
          </p>
          <h2>Conte para onde o vento está chamando.</h2>
          <p>
            Preencha o briefing rápido ou fale direto. A Nortada responde com uma
            proposta inicial, melhor janela de data e próximo passo.
          </p>
          <div className="contact-links">
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp
            </a>
            <a href={mailHref}>
              <Mail size={18} aria-hidden="true" />
              contato@nortada.tur.br
            </a>
          </div>
        </div>

        <form className="briefing-form" action={mailHref}>
          <label>
            Nome
            <input
              name="name"
              type="text"
              placeholder="Seu nome"
              value={briefing.name}
              onChange={handleBriefingChange}
            />
          </label>
          <label>
            Roteiro
            <select name="interest" value={briefing.interest} onChange={handleBriefingChange}>
              {routes.map((route) => (
                <option key={route.id} value={route.title}>
                  {route.title}
                </option>
              ))}
            </select>
          </label>
          <label>
            Data ou temporada
            <input
              name="date"
              type="text"
              placeholder="Ex.: setembro, feriado, fim de semana"
              value={briefing.date}
              onChange={handleBriefingChange}
            />
          </label>
          <div className="form-actions">
            <a className="button primary contact-submit-cta" href={mailHref}>
              <Send size={17} aria-hidden="true" />
              Enviar briefing
            </a>
            <a className="button ghost" href={whatsappHref} target="_blank" rel="noreferrer">
              <ArrowUpRight size={17} aria-hidden="true" />
              Conversar
            </a>
          </div>
        </form>
      </section>
    </main>
  );
}

export default App;
