/*
 * Direção visual: Engenharia editorial contemporânea.
 * Nesta página, a referência enviada orienta a hierarquia institucional, a paleta
 * verde/branco e a composição de obra; a nova seção Quem Somos usa mídia vertical
 * 9:16 à esquerda e conteúdo editorial à direita.
 */
import { type CSSProperties, type FormEvent, useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronRight,
  ClipboardCheck,
  HardHat,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Ruler,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const HERO_IMAGE = "/manus-storage/gaia-hero-industrial_93e157a6.jpg";
const ABOUT_IMAGE = "/manus-storage/gaia-about-vertical_0ebed6b3.jpg";
const PORTFOLIO_IMAGE = "/manus-storage/gaia-portfolio-architecture_54c6f906.jpg";
const RETAIL_IMAGE = "/manus-storage/gaia-project-retail_7ca8b67c.jpg";
const SITE_PROGRESS_IMAGE = "/manus-storage/gaia-project-site-progress_f82336db.jpg";
const INTERIOR_IMAGE = "/manus-storage/gaia-project-interior_bbe88eaf.jpg";
const ABOUT_VIDEO = "/manus-storage/gaia-about-vertical_3f133e4f.mp4";
const BRAND_SYMBOL = "/manus-storage/gaia-symbol_12025885.png";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

const services = [
  {
    icon: Ruler,
    number: "01",
    title: "Planejamento de construção",
    text: "Escopo, cronograma e orçamento organizados para decisões mais seguras desde a primeira etapa.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Certificações",
    text: "Conformidade, qualidade e documentação técnica para uma entrega preparada para operar.",
  },
  {
    icon: ClipboardCheck,
    number: "03",
    title: "Gestão da construção",
    text: "Acompanhamento próximo de equipes, fornecedores e obra para manter o ritmo do projeto.",
  },
];

const projects = [
  { name: "Bahamas Mix 3K", type: "Varejo", tone: "project-blue", image: RETAIL_IMAGE, slug: "bahamas-mix-3k" },
  { name: "Bahamas Express Uberlândia", type: "Varejo", tone: "project-warm", image: PORTFOLIO_IMAGE, slug: "bahamas-express-uberlandia" },
  { name: "Centro de distribuição", type: "Logística", tone: "project-earth", image: SITE_PROGRESS_IMAGE, slug: "centro-de-distribuicao" },
  { name: "Galpão industrial", type: "Industrial", tone: "project-slate", image: HERO_IMAGE, slug: "centro-de-distribuicao" },
  { name: "Supermercado Bahamas", type: "Varejo", tone: "project-green", image: ABOUT_IMAGE, slug: "bahamas-mix-3k" },
  { name: "Escritório corporativo", type: "Corporativo", tone: "project-steel", image: INTERIOR_IMAGE, slug: "bahamas-express-uberlandia" },
];

function scrollToSection(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(".reveal");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = document.querySelector<HTMLElement>(".portfolio-intro");
    const background = document.querySelector<HTMLElement>(".portfolio-parallax");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!section || !background || reducedMotion) return;

    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      const bounds = section.getBoundingClientRect();
      const distanceFromCenter = window.innerHeight / 2 - (bounds.top + bounds.height / 2);
      const offset = Math.max(-34, Math.min(34, distanceFromCenter * 0.075));
      background.style.transform = `translate3d(0, ${offset}px, 0) scale(1.12)`;
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    scrollToSection(href);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
      <header className={`site-header ${menuOpen ? "site-header--open" : ""}`}>
        <div className="container header-inner">
          <a className="brand" href="#inicio" onClick={() => handleNavClick("#inicio")} aria-label="GAIA Engenharia, início">
            <span className="brand-mark"><img src={BRAND_SYMBOL} alt="" /></span>
            <span className="brand-copy">
              <strong>GAIA</strong>
              <small>ENGENHARIA</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => handleNavClick(item.href)}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="header-phone" href="#contato" onClick={() => handleNavClick("#contato")}>
            <Phone size={15} strokeWidth={2.2} />
            <span>Fale com a GAIA</span>
            <ArrowUpRight size={14} />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <div className="mobile-nav" aria-hidden={!menuOpen}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => handleNavClick(item.href)}>
              {item.label}
              <ChevronRight size={16} />
            </a>
          ))}
        </div>
      </header>

      <main>
        <section className="hero" id="inicio" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="hero-kicker reveal reveal--hero" style={{ "--reveal-delay": "40ms" } as CSSProperties}><span /> Engenharia que deixa marca</div>
            <h1 className="reveal reveal--hero" style={{ "--reveal-delay": "100ms" } as CSSProperties}>Excelência em obras industriais e <em>comerciais de grande porte.</em></h1>
            <p className="reveal reveal--hero" style={{ "--reveal-delay": "160ms" } as CSSProperties}>Projetamos, construímos e gerenciamos espaços que acompanham o crescimento de negócios em todo o Brasil.</p>
            <button className="button button--lime reveal reveal--hero" style={{ "--reveal-delay": "220ms" } as CSSProperties} type="button" onClick={() => scrollToSection("#quem-somos")}>
              Conheça nosso trabalho <ArrowDownRight size={17} />
            </button>
          </div>
          <div className="hero-note"><span>01</span><span>Construir para o futuro</span></div>
        </section>

        <section className="proof-strip" aria-label="Números da GAIA">
          <div className="container proof-grid">
            <div className="proof-lead reveal">
              <span className="eyebrow eyebrow--light">Desde 2018</span>
              <strong>Experiência que<br />vira resultado.</strong>
              <span className="proof-arrow"><ArrowDownRight size={19} /></span>
            </div>
            <div className="proof-stat reveal" style={{ "--reveal-delay": "60ms" } as CSSProperties}><strong>+250.000</strong><span>m² construídos</span></div>
            <div className="proof-stat reveal" style={{ "--reveal-delay": "120ms" } as CSSProperties}><strong>+R$400 mi</strong><span>em obras gerenciadas</span></div>
            <div className="proof-stat reveal" style={{ "--reveal-delay": "180ms" } as CSSProperties}><strong>+500</strong><span>empregos diretos gerados</span></div>
          </div>
        </section>

        <section className="intro-section" id="quem-somos">
          <div className="container about-grid">
            <div className="about-media-wrap reveal reveal--media">
              <div className="about-media" aria-label="Registro vertical de uma obra industrial">
                <video className="about-video" autoPlay muted loop playsInline poster={ABOUT_IMAGE} aria-label="Vídeo vertical de uma obra industrial em construção"><source src={ABOUT_VIDEO} type="video/mp4" /></video>
                <div className="media-shade" />
                <div className="media-topline"><span>GAIA / FILME DE OBRA</span><span>09:16</span></div>
                <div className="media-bottomline"><span>Precisão em cada etapa</span><span className="media-dot" /></div>
              </div>
              <div className="media-caption"><span>Registro 024</span><span>Estrutura &amp; gestão</span></div>
            </div>

            <div className="about-copy reveal reveal--copy">
              <div className="section-heading section-heading--left">
                <span className="eyebrow">Quem somos</span>
                <h2>Construímos com visão de <em>longo prazo.</em></h2>
              </div>
              <p className="lead-paragraph">A GAIA Engenharia transforma projetos complexos em operações prontas para crescer. Unimos planejamento, experiência de campo e gestão próxima para entregar obras industriais e comerciais com clareza em cada decisão.</p>
              <p className="body-copy">Do primeiro estudo à entrega, nosso trabalho é feito de método, transparência e compromisso com o resultado. Uma equipe que entende o detalhe sem perder de vista o todo.</p>
              <div className="about-actions">
                <button className="text-link" type="button" onClick={() => scrollToSection("#contato")}>Converse com a nossa equipe <ArrowUpRight size={16} /></button>
                <span className="about-rule" />
              </div>
              <div className="about-signature"><Sparkles size={16} /><span>Engenharia com presença do início ao fim.</span></div>
            </div>
          </div>
        </section>

        <section className="services-section" id="servicos">
          <div className="container">
            <div className="section-heading section-heading--center reveal">
              <span className="eyebrow eyebrow--lime">Nosso jeito de fazer</span>
              <h2>Do plano à entrega, <em>sem atalhos.</em></h2>
              <p>Competência técnica e atenção ao detalhe para que cada fase avance com segurança.</p>
            </div>
            <div className="section-marker reveal" style={{ "--reveal-delay": "70ms" } as CSSProperties}><span>GAIA / PROCESSO 03</span><i /><span>método em movimento</span></div>
            <div className="services-grid">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article className="service-card reveal" style={{ "--reveal-delay": `${index * 70}ms` } as CSSProperties} key={service.number}>
                    <div className="service-card-top"><span>{service.number}</span><Icon size={22} strokeWidth={1.7} /></div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <span className="service-card-line" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="clients-section" aria-label="Clientes da GAIA Engenharia">
          <div className="container clients-inner">
            <div className="section-marker section-marker--clients"><span>GAIA / RELAÇÕES 04</span><i /><span>confiança construída</span></div>
            <div className="clients-label reveal"><span className="eyebrow">Relações que permanecem</span><strong>Clientes<br /><em>que confiam.</em></strong></div>
            <div className="client-list reveal" style={{ "--reveal-delay": "80ms" } as CSSProperties}>
              <span>BAHAMAS</span><span>PACHECO</span><span className="client-lower">bee<br />cool</span><span>PITÁGORAS</span><span>ACOTEL</span><span>DEODE</span>
            </div>
          </div>
        </section>

        <section className="portfolio-intro" id="portfolio">
          <div className="portfolio-parallax" style={{ backgroundImage: `url(${HERO_IMAGE})` }} aria-hidden="true" />
          <div className="portfolio-parallax-overlay" aria-hidden="true" />
          <div className="container portfolio-intro-inner">
            <div className="portfolio-mark reveal">PROJECTS / 2026</div>
            <div className="reveal"><span className="eyebrow eyebrow--light">Portfólio</span><h2>Espaços pensados para <em>funcionar.</em></h2></div>
            <div className="portfolio-intro-copy reveal" style={{ "--reveal-delay": "80ms" } as CSSProperties}><p>Conheça algumas das obras que ajudam a contar a nossa história de execução, cuidado e escala.</p><button className="button button--outline-light" type="button" onClick={() => scrollToSection("#projetos")}>Ver todos os projetos <ArrowUpRight size={17} /></button></div>
          </div>
        </section>

        <section className="projects-section" id="projetos">
          <div className="container">
            <div className="project-grid">
              {projects.map((project, index) => (
                <a className={`project-card project-card-link reveal ${index === 0 ? "project-card--featured" : ""}`} style={{ "--reveal-delay": `${Math.min(index, 4) * 55}ms` } as CSSProperties} href={`/obras/${project.slug}`} key={project.name}>
                  <div className={`project-image ${project.tone}`}>
                    <img src={project.image} alt="" />
                    <span className="project-index">0{index + 1}</span>
                    <span className="project-view"><ArrowUpRight size={17} /></span>
                  </div>
                  <div className="project-meta"><div><h3>{project.name}</h3><span>{project.type}</span></div><ChevronRight size={17} /></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="container contact-grid">
            <div className="contact-marker">GAIA / CONVERSA 05</div>
            <div className="contact-copy reveal">
              <span className="eyebrow">Fale com a GAIA</span>
              <h2>Vamos dar forma ao seu <em>próximo projeto?</em></h2>
              <p>Conte um pouco sobre o que você está construindo. Nossa equipe retorna para entender o desafio e indicar o melhor caminho.</p>
              <div className="contact-details">
                <a href="mailto:contato@gaiaengenharia.com"><Mail size={17} /> contato@gaiaengenharia.com</a>
                <a href="tel:+553234000000"><Phone size={17} /> +55 (32) 3400-0000</a>
                <span><MapPin size={17} /> Minas Gerais · atuação nacional</span>
              </div>
            </div>
            <form className="contact-form reveal" style={{ "--reveal-delay": "90ms" } as CSSProperties} onSubmit={handleSubmit}>
              <div className="form-heading"><span>01 / 03</span><strong>Fale sobre a obra</strong></div>
              <label>Seu nome<input type="text" name="name" placeholder="Como podemos chamar você?" required /></label>
              <div className="form-row"><label>E-mail<input type="email" name="email" placeholder="voce@empresa.com" required /></label><label>Telefone<input type="tel" name="phone" placeholder="(00) 00000-0000" /></label></div>
              <label>Conte sobre o projeto<textarea name="message" placeholder="Tipo de obra, localização e momento atual..." rows={4} required /></label>
              <button className="button button--green form-submit" type="submit">{submitted ? <><Check size={17} /> Mensagem preparada</> : <>Enviar mensagem <Send size={16} /></>}</button>
              {submitted && <p className="form-success" role="status">Obrigado. Sua mensagem foi registrada para a próxima conversa.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <div className="footer-brand reveal"><div className="brand brand--footer"><span className="brand-mark"><img src={BRAND_SYMBOL} alt="" /></span><span className="brand-copy"><strong>GAIA</strong><small>ENGENHARIA</small></span></div><p>Engenharia e construção para quem pensa além da entrega.</p></div>
          <div className="footer-nav reveal" style={{ "--reveal-delay": "70ms" } as CSSProperties}><span className="eyebrow eyebrow--light">Navegue</span>{navItems.slice(1).map((item) => <a key={item.href} href={item.href} onClick={() => handleNavClick(item.href)}>{item.label}</a>)}</div>
          <div className="footer-social reveal" style={{ "--reveal-delay": "140ms" } as CSSProperties}><span className="eyebrow eyebrow--light">Siga a nossa obra</span><div><a href="#contato" aria-label="WhatsApp"><MessageCircle size={17} /></a><a href="#contato" aria-label="LinkedIn"><Building2 size={17} /></a><a href="#contato" aria-label="Instagram"><Leaf size={17} /></a></div></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 GAIA Engenharia. Todos os direitos reservados.</span><span>Feito para construir o que vem depois.</span></div>
      </footer>
    </div>
  );
}
