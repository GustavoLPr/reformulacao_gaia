import { useEffect, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowUpRight, Building2, ChevronRight, Leaf, MapPin, MessageCircle, Ruler, Timer, Layers3 } from "lucide-react";
import { Link, useLocation } from "wouter";

const BRAND_SYMBOL = "/manus-storage/gaia-symbol_12025885.png";
const HERO_IMAGE = "/manus-storage/gaia-hero-industrial_93e157a6.jpg";
const RETAIL_IMAGE = "/manus-storage/gaia-project-retail_7ca8b67c.jpg";
const PORTFOLIO_IMAGE = "/manus-storage/gaia-portfolio-architecture_54c6f906.jpg";
const SITE_PROGRESS_IMAGE = "/manus-storage/gaia-project-site-progress_f82336db.jpg";
const INTERIOR_IMAGE = "/manus-storage/gaia-project-interior_bbe88eaf.jpg";
const ABOUT_IMAGE = "/manus-storage/gaia-about-vertical_0ebed6b3.jpg";
const ABOUT_VIDEO = "/manus-storage/gaia-about-vertical_3f133e4f.mp4";

const works = {
  "bahamas-mix-3k": {
    category: "Varejo / obra concluída",
    title: "Bahamas Mix 3K",
    location: "Juiz de Fora · MG",
    image: RETAIL_IMAGE,
    number: "01",
    description: "Uma operação de varejo pensada para receber fluxo, escala e experiência em cada detalhe. A GAIA coordenou a execução com precisão para transformar um programa complexo em uma unidade pronta para performar.",
    concept: "Construir para o movimento",
    details: [
      ["Área construída", "3.000 m²", Ruler],
      ["Tipologia", "Varejo alimentar", Layers3],
      ["Entrega", "Obra concluída", Timer],
    ],
    highlights: ["Fluxo de clientes", "Execução coordenada", "Operação pronta"],
    accordion: [
      ["O empreendimento", "Uma operação de varejo pensada para receber fluxo, escala e experiência em cada detalhe."],
      ["Processos construtivos", "Planejamento de frentes, coordenação de fornecedores e controle de qualidade para uma entrega segura."],
      ["Características técnicas", "Infraestrutura preparada para operação contínua, com áreas amplas e sistemas integrados."],
    ],
    gallery: [RETAIL_IMAGE, PORTFOLIO_IMAGE, INTERIOR_IMAGE],
  },
  "bahamas-express-uberlandia": {
    category: "Varejo / implantação",
    title: "Bahamas Express Uberlândia",
    location: "Uberlândia · MG",
    image: PORTFOLIO_IMAGE,
    number: "02",
    description: "Uma implantação compacta e estratégica, desenhada para integrar marca, eficiência operacional e velocidade de entrega em uma das principais regiões de expansão do varejo mineiro.",
    concept: "Escala com inteligência",
    details: [
      ["Área construída", "1.400 m²", Ruler],
      ["Tipologia", "Varejo de proximidade", Layers3],
      ["Entrega", "Gestão integral", Timer],
    ],
    highlights: ["Implantação ágil", "Integração de disciplinas", "Alto desempenho"],
    accordion: [
      ["O empreendimento", "Uma implantação compacta e estratégica, desenhada para unir marca, eficiência e velocidade de entrega."],
      ["Processos construtivos", "Compatibilização das disciplinas e gestão próxima para manter ritmo, precisão e consistência."],
      ["Características técnicas", "Layout flexível, operação de proximidade e infraestrutura organizada para alto desempenho."],
    ],
    gallery: [PORTFOLIO_IMAGE, RETAIL_IMAGE, SITE_PROGRESS_IMAGE],
  },
  "centro-de-distribuicao": {
    category: "Logística / infraestrutura",
    title: "Centro de distribuição",
    location: "Zona da Mata · MG",
    image: SITE_PROGRESS_IMAGE,
    number: "03",
    description: "Uma infraestrutura preparada para conectar estoque, pessoas e tempo. O projeto combina robustez construtiva e clareza de fluxos para apoiar operações que não podem parar.",
    concept: "A logística do próximo passo",
    details: [
      ["Área construída", "12.500 m²", Ruler],
      ["Tipologia", "Centro logístico", Layers3],
      ["Entrega", "Em execução", Timer],
    ],
    highlights: ["Grande escala", "Fluxos inteligentes", "Gestão de obra"],
    accordion: [
      ["O empreendimento", "Uma infraestrutura preparada para conectar estoque, pessoas e tempo em uma operação que não pode parar."],
      ["Processos construtivos", "Gestão de frentes, estrutura e instalações coordenadas para avançar com segurança em grande escala."],
      ["Características técnicas", "Grandes áreas livres, fluxos inteligentes e infraestrutura capaz de acompanhar diferentes operações."],
    ],
    gallery: [SITE_PROGRESS_IMAGE, HERO_IMAGE, INTERIOR_IMAGE],
  },
} as const;

type Work = (typeof works)[keyof typeof works];

function getCurrentWork(pathname: string): Work {
  const slug = pathname.split("/").filter(Boolean)[1] || "bahamas-mix-3k";
  return works[slug as keyof typeof works] || works["bahamas-mix-3k"];
}

function useWorksReveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".works-reveal");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.16, rootMargin: "0px 0px -12% 0px" },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

export default function Works() {
  const [location] = useLocation();
  const work = getCurrentWork(location);
  const [openAccordion, setOpenAccordion] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  useWorksReveal();

  return (
    <div className="works-page">
      <header className="works-header">
        <Link className="works-brand" href="/" aria-label="GAIA Engenharia, início">
          <span className="works-brand-mark"><img src={BRAND_SYMBOL} alt="" /></span>
          <span><strong>GAIA</strong><small>ENGENHARIA</small></span>
        </Link>
        <nav aria-label="Navegação da obra">
          <Link href="/">Início</Link>
          <a href="#projeto">O projeto</a>
          <a href="#galeria">Galeria</a>
          <a href="#contato">Contato</a>
        </nav>
        <Link className="works-header-cta" href="/#contato">Fale com a GAIA <ArrowUpRight size={15} /></Link>
      </header>

      <main>
        <section className="works-hero" style={{ backgroundImage: `url(${work.image})` }}>
          <div className="works-hero-gradient" />
          <div className="works-hero-topline"><Link href="/" className="works-back"><ArrowLeft size={15} /> Portfólio</Link><span>OBRAS / {work.number}</span></div>
          <div className="works-hero-content">
            <span className="works-kicker works-reveal" style={{ "--works-delay": "120ms" } as React.CSSProperties}>{work.category}</span>
            <h1 className="works-reveal" style={{ "--works-delay": "220ms" } as React.CSSProperties}>{work.title}</h1>
            <p className="works-location works-reveal" style={{ "--works-delay": "340ms" } as React.CSSProperties}><MapPin size={15} /> {work.location}</p>
          </div>
          <div className="works-hero-stats works-reveal" style={{ "--works-delay": "460ms" } as React.CSSProperties}>
            {work.details.slice(0, 2).map(([label, value]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
          <div className="works-hero-side"><span>SCROLL</span><i /></div>
          <div className="works-hero-index"><span className="is-active">{work.number}</span><span>03</span></div>
        </section>

        <section className="works-intro" id="projeto">
          <div className="works-container works-intro-grid">
            <div className="works-intro-copy-column">
              <div className="works-reveal works-intro-label"><span>GAIA / OBRA {work.number}</span><i /></div>
              <div className="works-reveal works-intro-copy" style={{ "--works-delay": "120ms" } as React.CSSProperties}>
                <span className="works-eyebrow">O projeto</span>
                <h2>{work.concept}</h2>
                <p>{work.description}</p>
              </div>
            </div>
            <div className="works-reveal works-accordion" style={{ "--works-delay": "240ms" } as React.CSSProperties}>
              {work.accordion.map(([title, body], index) => <div className={`works-accordion-item ${openAccordion === index ? "is-open" : ""}`} key={title}>
                <button type="button" aria-expanded={openAccordion === index} onClick={() => setOpenAccordion(openAccordion === index ? -1 : index)}><span>0{index + 1}</span><strong>{title}</strong><ChevronRight size={16} /></button>
                <div className="works-accordion-panel"><p>{body}</p></div>
              </div>)}
            </div>
          </div>
        </section>

        <section className="works-details">
          <div className="works-container">
            <div className="works-section-heading works-reveal"><span className="works-eyebrow">Dados da obra</span><h2>Precisão que aparece<br /><em>em cada etapa.</em></h2></div>
            <div className="works-detail-grid">
              {work.details.map(([label, value, Icon], index) => <article className="works-detail-card works-reveal" style={{ "--works-delay": `${index * 120}ms` } as React.CSSProperties} key={label}><Icon size={21} /><span>{label}</span><strong>{value}</strong><i /></article>)}
            </div>
          </div>
        </section>

        <section className="works-gallery-section" id="galeria">
          <div className="works-container">
            <div className="works-gallery-heading works-reveal"><div><span className="works-eyebrow">Registro de obra</span><h2>O espaço em <em>movimento.</em></h2></div><span>IMAGENS / {work.number}</span></div>
            <div className="works-gallery-grid">
              {work.gallery.map((image, index) => <figure className={`works-gallery-item works-reveal ${index === 0 ? "is-featured" : ""}`} style={{ "--works-delay": `${index * 120}ms` } as React.CSSProperties} key={image}><button type="button" className="works-image-button" onClick={() => setLightboxImage(image)} aria-label={`Ampliar registro ${index + 1}`}><img src={image} alt={`${work.title} — registro ${index + 1}`} /><figcaption><span>0{index + 1}</span><span>{index === 0 ? "Vista principal" : "Detalhe de execução"}</span></figcaption></button></figure>)}
            </div>
            <div className="works-video-card works-reveal" style={{ "--works-delay": "360ms" } as React.CSSProperties}>
              <div className="works-video-copy"><span className="works-eyebrow">Filme de obra</span><h3>A construção em <em>movimento.</em></h3><p>Um registro vertical da precisão, das equipes e das decisões que transformam cada etapa em resultado.</p></div>
              <div className="works-video-frame"><video controls playsInline preload="metadata" poster={work.gallery[0]} aria-label={`Vídeo da obra ${work.title}`}><source src={ABOUT_VIDEO} type="video/mp4" /></video><span className="works-video-tag">GAIA / REGISTRO 024</span></div>
            </div>
          </div>
        </section>

        <section className="works-next" id="contato">
          <div className="works-container works-next-inner works-reveal">
            <div className="works-next-copy"><span className="works-eyebrow">Próximo projeto</span><h2>Vamos construir<br /><em>o que vem depois?</em></h2><p>Nossa equipe está pronta para entender as necessidades do seu empreendimento e desenvolver soluções em engenharia com foco em qualidade, prazo e resultado.</p></div>
            <Link className="works-next-link" href="/#contato">Fale com a nossa equipe <ArrowUpRight size={17} /></Link>
          </div>
        </section>
      </main>

      {lightboxImage && <div className="works-lightbox" role="dialog" aria-modal="true" aria-label="Imagem ampliada" onClick={() => setLightboxImage(null)}><button type="button" onClick={() => setLightboxImage(null)} aria-label="Fechar imagem">×</button><img src={lightboxImage} alt={`${work.title} — imagem ampliada`} onClick={(event) => event.stopPropagation()} /></div>}

      <footer className="site-footer">
        <div className="container footer-top">
          <div className="footer-brand"><div className="brand brand--footer"><span className="brand-mark"><img src={BRAND_SYMBOL} alt="" /></span><span className="brand-copy"><strong>GAIA</strong><small>ENGENHARIA</small></span></div><p>Engenharia e construção para quem pensa além da entrega.</p></div>
          <div className="footer-nav"><span className="eyebrow eyebrow--light">Navegue</span><a href="/#quem-somos">Quem somos</a><a href="/#servicos">Serviços</a><a href="/#portfolio">Portfólio</a><a href="/#contato">Contato</a></div>
          <div className="footer-social"><span className="eyebrow eyebrow--light">Siga a nossa obra</span><div><a href="/#contato" aria-label="WhatsApp"><MessageCircle size={17} /></a><a href="/#contato" aria-label="LinkedIn"><Building2 size={17} /></a><a href="/#contato" aria-label="Instagram"><Leaf size={17} /></a></div></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 GAIA Engenharia. Todos os direitos reservados.</span><span>Feito para construir o que vem depois.</span></div>
      </footer>
    </div>
  );
}
