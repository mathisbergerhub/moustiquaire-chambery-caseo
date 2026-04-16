import Head from "next/head";
import { useState } from "react";

const canonicalUrl = "https://moustiquaire-chambery-caseo.vercel.app/";
const showroomUrl =
  "https://www.caseo-maison.com/magasins/page/caseo-chambery-voglans-85/magasin-fenetre-chambery-caseo-71";
const devisUrl = "https://www.caseo-maison.com/devis";
const mapsUrl = "https://maps.app.goo.gl/hsRmYYPDsB5QcNK98";
const mapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2775923.340662299!2d1.4331651417110982!3d47.19970105736059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ba7f4992eba1f%3A0x9ea3fb9aab31d495!2zQ0FTw4lPIENoYW1iw6lyeQ!5e0!3m2!1sfr!2sfr!4v1776328547399!5m2!1sfr!2sfr";
const reviewsUrl =
  "https://www.caseo-maison.com/avis-clients/magasins/avis-caseo-chambery-85";

const phoneDisplay = "04 79 34 48 52";
const phoneLink = "tel:+33479344852";

const openingHours = [
  { day: "Lundi", hours: "08h00-12h00 / 13h30-18h00" },
  { day: "Mardi", hours: "08h00-12h00 / 13h30-18h00" },
  { day: "Mercredi", hours: "08h00-12h00 / 13h30-18h00" },
  { day: "Jeudi", hours: "08h00-12h00 / 13h30-18h00" },
  { day: "Vendredi", hours: "08h00-12h00 / 13h30-18h00" },
  { day: "Samedi", hours: "09h00-13h00" },
  { day: "Dimanche", hours: "Ferme" },
];

const zones = [
  "Chambery",
  "Voglans",
  "La Motte-Servolex",
  "Bassens",
  "Cognin",
  "Barberaz",
  "Aix-les-Bains",
  "Le Bourget-du-Lac",
];

const solutions = [
  {
    num: "01",
    title: "Moustiquaire enroulable",
    desc: "La solution la plus demandee pour les fenetres. Facile a ouvrir, discrete une fois relevee, durable au quotidien.",
    ideal:
      "Ideale pour chambre, cuisine, salle de bain et fenetres frequemment ouvertes",
  },
  {
    num: "02",
    title: "Moustiquaire plissee",
    desc: "Parfaite pour les portes-fenetres et baies vitrees. Ouverture laterale souple, faible encombrement et excellent confort d'usage.",
    ideal: "Ideale pour terrasse, jardin, balcon et grandes ouvertures",
  },
  {
    num: "03",
    title: "Moustiquaire fixe",
    desc: "Une solution simple, propre et durable pour les ouvertures peu sollicitees. Protection permanente sans manipulation.",
    ideal: "Ideale pour cave, veranda, cellier et fenetres peu utilisees",
  },
];

const reasons = [
  {
    number: "01",
    title: "Showroom local a Chambery",
    text: "Vous pouvez voir les modeles, comparer les finitions et echanger avec une equipe proche de chez vous.",
  },
  {
    number: "02",
    title: "Prise de mesures a domicile",
    text: "Nous prenons les mesures sur place pour vous orienter vers la moustiquaire la plus adaptee a vos ouvertures.",
  },
  {
    number: "03",
    title: "Fabrication sur mesure",
    text: "Chaque moustiquaire est fabriquee selon vos cotes pour un rendu net, precis et fiable dans le temps.",
  },
  {
    number: "04",
    title: "Pose soignee par nos techniciens",
    text: "Installation propre, reglages, verifications et conseils d'utilisation : vous repartez avec une solution prete a l'emploi.",
  },
];

const painPoints = [
  "Vous n'ouvrez plus les fenetres a cause des moustiques",
  "Les solutions temporaires tiennent mal ou sont peu esthetiques",
  "Vous voulez garder l'air frais sans laisser entrer les insectes",
  "Vous cherchez une solution durable, propre et adaptee a vos menuiseries",
];

const benefits = [
  "Confort d'ete sans moustiques ni insectes",
  "Aeration naturelle de votre logement",
  "Solution discrete et esthetique",
  "Compatible avec fenetres, portes-fenetres et baies vitrees",
  "Fabrication sur mesure",
  "Pose professionnelle a Chambery et alentours",
];

const reviews = [
  {
    name: "karine routin",
    rating: "5/5",
    date: "4 novembre 2025",
    text: "Tres professionnel",
  },
  {
    name: "PATRICIA RENAUD",
    rating: "5/5",
    date: "6 juin 2025",
    text: "Je suis tout a fait satisfaite. Jean-Claude a ete efficace, fiable et tres agreable.",
  },
  {
    name: "Verdoia Jean Daniel",
    rating: "5/5",
    date: "20 fevrier 2024",
    text: "Tres bon rapport qualite prix, le service est excellent et les materiaux de bonne qualites. Je recommande les yeux fermes car je suis satisfait du resultat.",
  },
];

const faqs = [
  {
    question: "Quel type de moustiquaire choisir pour ma fenetre a Chambery ?",
    answer:
      "Pour une fenetre standard, la moustiquaire enroulable est souvent le meilleur choix. Pour une porte-fenetre ou une baie vitree, la moustiquaire plissee est generalement la plus confortable a l'usage.",
  },
  {
    question: "Proposez-vous la pose de moustiquaire a Chambery et autour ?",
    answer:
      "Oui. Caseo Chambery intervient pour la prise de mesures, la fabrication sur mesure et la pose de moustiquaires a Chambery ainsi que dans les communes voisines.",
  },
  {
    question: "Faut-il forcement une moustiquaire sur mesure ?",
    answer:
      "Pour obtenir une finition propre, une bonne tenue dans le temps et un usage confortable, le sur mesure est generalement la meilleure solution, surtout pour les portes-fenetres et baies vitrees.",
  },
  {
    question: "Combien coute une moustiquaire sur mesure ?",
    answer:
      "Le prix depend du type de moustiquaire, des dimensions, du nombre d'ouvertures et du niveau de finition souhaite. Le plus simple est de demander un devis gratuit pour obtenir un chiffrage adapte a votre projet.",
  },
  {
    question: "Comment se passe la prise de mesures ?",
    answer:
      "Apres votre demande, l'equipe Caseo Chambery vous recontacte pour qualifier votre besoin. Un technicien peut ensuite se deplacer chez vous pour mesurer precisement vos ouvertures avant fabrication.",
  },
  {
    question: "Quels sont les horaires du showroom Caseo Chambery ?",
    answer:
      "Le showroom est ouvert du lundi au vendredi de 08h00 a 12h00 puis de 13h30 a 18h00, et le samedi de 09h00 a 13h00.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Caseo Chambery - Menuiserie Diffusion",
  image: canonicalUrl,
  url: canonicalUrl,
  telephone: "+33479344852",
  description:
    "Caseo Chambery installe des moustiquaires sur mesure pour fenetres, portes-fenetres et baies vitrees a Chambery et dans les communes alentours.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "381 Avenue de Villarcher",
    postalCode: "73000",
    addressLocality: "Chambery",
    addressCountry: "FR",
  },
  areaServed: zones.map((city) => ({ "@type": "City", name: city })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "13:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "Caseo",
    url: "https://www.caseo-maison.com/",
  },
  sameAs: [showroomUrl, mapsUrl, reviewsUrl],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Head>
        <title>
          Moustiquaire sur mesure a Chambery avec pose | Devis gratuit | Caseo
          Chambery
        </title>
        <meta
          name="description"
          content="Caseo Chambery installe votre moustiquaire sur mesure a Chambery : fenetres, portes-fenetres et baies vitrees. Devis gratuit, prise de mesures a domicile et pose professionnelle."
        />
        <meta
          name="robots"
          content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        />
        <meta
          property="og:title"
          content="Moustiquaire sur mesure a Chambery avec pose | Caseo Chambery"
        />
        <meta
          property="og:description"
          content="Fenetres, portes-fenetres, baies vitrees : demandez votre devis gratuit pour une moustiquaire sur mesure a Chambery."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="theme-color" content="#f48221" />
        <link rel="canonical" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </Head>

      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="logo">
            <div className="logo-badge">C</div>
            <div className="logo-text">
              <strong>Caseo Chambery</strong>
              <span>Moustiquaires sur mesure</span>
            </div>
          </a>

          <nav className="nav">
            <a href="#solutions">Solutions</a>
            <a href="#pourquoi">Pourquoi Caseo</a>
            <a href="#local">Magasin</a>
            <a href="#faq">FAQ</a>
            <a href={devisUrl} className="btn btn-primary nav-cta">
              Recevoir mon devis gratuit
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-topline">
                <span className="hero-tag">Caseo Chambery - Voglans</span>
                <span className="hero-review-badge">
                  Avis clients visibles en ligne
                </span>
              </div>

              <h1>
                Moustiquaire sur mesure a Chambery avec pose
                <span> Devis gratuit</span>
              </h1>

              <p className="hero-text">
                Fenetres, portes-fenetres, baies vitrees : protegez votre maison
                des moustiques tout l'ete sans renoncer a l'air frais. Caseo
                Chambery prend les mesures, fabrique et pose votre moustiquaire
                sur mesure.
              </p>

              <div className="hero-points">
                <span>Prise de mesures a domicile</span>
                <span>Fabrication sur vos cotes</span>
                <span>Pose par nos techniciens</span>
              </div>

              <div className="hero-actions">
                <a href={devisUrl} className="btn btn-primary">
                  Recevoir mon devis gratuit
                </a>
                <a href={phoneLink} className="btn btn-secondary">
                  Appeler le showroom
                </a>
              </div>

              <div className="hero-stats">
                <div className="stat-card">
                  <strong>100%</strong>
                  <span>sur mesure</span>
                </div>
                <div className="stat-card">
                  <strong>Local</strong>
                  <span>showroom a Chambery</span>
                </div>
                <div className="stat-card">
                  <strong>Pose pro</strong>
                  <span>installation soignee</span>
                </div>
              </div>
            </div>

            <div className="hero-panel">
              <div className="hero-panel-label">Votre showroom local</div>
              <div className="hero-panel-title">
                Un projet simple, clair et bien accompagne
              </div>
              <p className="hero-panel-text">
                Venez voir les modeles au showroom Caseo Chambery ou faites
                directement votre demande en ligne pour etre recontacte.
              </p>

              <div className="hero-panel-box">
                <p>
                  <strong>Menuiserie Diffusion</strong>
                  <br />
                  381 Avenue de Villarcher
                  <br />
                  73000 Chambery
                </p>
                <a href={phoneLink}>{phoneDisplay}</a>
              </div>

              <div className="hero-panel-actions">
                <a href={devisUrl} className="btn btn-primary">
                  Demander un devis
                </a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark-outline"
                >
                  Voir l'itineraire
                </a>
              </div>

              <div className="zone-pills">
                {zones.map((z) => (
                  <span key={z}>{z}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="trust-bar">
          <div className="container trust-grid">
            <div className="trust-item">
              <div className="trust-number">01</div>
              <div>
                <strong>Prise de mesures a domicile</strong>
                <span>Des conseils adaptes a votre logement</span>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-number">02</div>
              <div>
                <strong>Fabrication sur mesure</strong>
                <span>Une moustiquaire adaptee a chaque ouverture</span>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-number">03</div>
              <div>
                <strong>Installation professionnelle</strong>
                <span>Une pose propre et durable dans le temps</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container problem-grid">
            <div className="problem-copy">
              <p className="section-tag">Le probleme le plus frequent</p>
              <h2>Marre des moustiques des que vous ouvrez les fenetres ?</h2>
              <p className="section-text">
                En ete, beaucoup de foyers n'osent plus aerer correctement leur
                logement a cause des moustiques et autres insectes. Les
                solutions temporaires sont souvent peu esthetiques, peu solides
                et peu pratiques a utiliser au quotidien.
              </p>
            </div>

            <div className="problem-panel">
              <div className="problem-panel-head">
                <span>Ce que vivent souvent nos clients</span>
              </div>

              <div className="problem-list">
                {painPoints.map((item, index) => (
                  <div key={item} className="problem-item">
                    <div className="problem-index">0{index + 1}</div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="section">
          <div className="container">
            <p className="section-tag">Nos solutions</p>
            <h2>Des moustiquaires adaptees a chaque ouverture</h2>
            <p className="section-text">
              Caseo Chambery vous accompagne pour choisir la bonne solution
              selon votre usage, le type d'ouverture et le niveau de confort
              recherche.
            </p>

            <div className="solutions-grid">
              {solutions.map((s) => (
                <article key={s.num} className="solution-card">
                  <div className="solution-num">{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span>{s.ideal}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <p className="section-tag">Les avantages</p>
            <h2>Pourquoi installer une moustiquaire sur mesure a Chambery ?</h2>
            <p className="section-text">
              Une moustiquaire bien choisie vous permet de profiter de l'air
              frais sans subir les insectes, tout en gardant une integration
              propre et discrete a vos menuiseries.
            </p>

            <div className="benefits-grid">
              {benefits.map((benefit) => (
                <div key={benefit} className="benefit-card">
                  <span className="benefit-check">✓</span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pourquoi" className="section">
          <div className="container why-grid">
            <div>
              <p className="section-tag">Pourquoi choisir Caseo Chambery</p>
              <h2>Un showroom local, une equipe qui se deplace</h2>
              <p className="section-text why-text">
                Vous ne choisissez pas une moustiquaire standard achetee a la
                va-vite. Vous beneficiez d'un accompagnement local avec prise de
                mesures, fabrication sur mesure et pose professionnelle.
              </p>

              <div className="why-feature">
                <div className="why-feature-label">Preuve sociale</div>
                <div className="why-feature-title">
                  Des avis clients consultables en ligne
                </div>
                <p>
                  Les retours clients rassurent avant un devis. Ils montrent la
                  qualite de l'accueil, du conseil, de la pose et du suivi du
                  projet.
                </p>
              </div>
            </div>

            <div className="reasons-grid">
              {reasons.map((r) => (
                <article key={r.title} className="reason-card">
                  <div className="reason-number">{r.number}</div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="section-tag">Tarif & devis</p>
            <h2>Le prix d'une moustiquaire depend surtout de votre projet</h2>
            <p className="section-text">
              Le tarif varie selon le type de moustiquaire, les dimensions, le
              nombre d'ouvertures, les contraintes de pose et la finition
              choisie. Pour obtenir un prix juste, le plus efficace reste de
              demander un devis gratuit aupres de Caseo Chambery.
            </p>

            <div className="price-box">
              <div>
                <strong>Besoin d'un prix precis ?</strong>
                <p>
                  Recevez un devis gratuit selon vos dimensions, votre type
                  d'ouverture et le niveau de finition souhaite.
                </p>
              </div>
              <a href={devisUrl} className="btn btn-primary">
                Demander mon devis gratuit
              </a>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <p className="section-tag">Comment ca se passe</p>
            <h2>De la demande a la pose, tout est cadre</h2>

            <div className="process-grid">
              {[
                {
                  n: "1",
                  title: "Vous nous contactez",
                  desc: "Par telephone ou via la demande de devis. L'equipe qualifie votre besoin et vous oriente.",
                },
                {
                  n: "2",
                  title: "Prise de mesures a domicile",
                  desc: "Un technicien se deplace pour mesurer precisement vos ouvertures et vous conseiller.",
                },
                {
                  n: "3",
                  title: "Fabrication sur mesure",
                  desc: "Votre moustiquaire est realisee selon vos dimensions exactes et votre configuration.",
                },
                {
                  n: "4",
                  title: "Pose et reglages",
                  desc: "Nous installons la moustiquaire et nous verifions son bon fonctionnement avant la fin de l'intervention.",
                },
              ].map((s) => (
                <article key={s.n} className="process-step">
                  <div className="process-circle">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-reviews">
          <div className="container">
            <p className="section-tag">Avis clients</p>
            <h2>Des retours visibles en ligne pour vous rassurer</h2>
            <p className="section-text">
              Voici quelques retours publics consultables en ligne pour le
              showroom Caseo Chambery.
            </p>

            <div className="reviews-header">
              <div className="reviews-badge">
                <strong>Avis clients publics</strong>
                <span>Caseo Chambery</span>
              </div>
              <a
                href={reviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                Voir tous les avis
              </a>
            </div>

            <div className="reviews-grid">
              {reviews.map((review) => (
                <article
                  key={`${review.name}-${review.date}`}
                  className="review-card"
                >
                  <div className="review-top">
                    <strong>{review.name}</strong>
                    <span>{review.rating}</span>
                  </div>
                  <p className="review-date">{review.date}</p>
                  <p className="review-text">"{review.text}"</p>
                  <a
                    href={reviewsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="review-link"
                  >
                    Consulter la source
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="zones" className="section section-dark">
          <div className="container">
            <p className="section-tag dark-tag">Zone d'intervention</p>
            <h2>Pose de moustiquaire a Chambery et dans les environs</h2>
            <p className="section-text dark-text">
              Caseo Chambery intervient pour la moustiquaire sur mesure a
              Chambery, Voglans, La Motte-Servolex, Bassens, Cognin, Barberaz,
              Aix-les-Bains et Le Bourget-du-Lac.
            </p>

            <div className="zones-grid">
              {zones.map((z, i) => (
                <span key={z} className={i === 0 ? "zone-main" : ""}>
                  {z}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="local" className="section">
          <div className="container">
            <p className="section-tag">Magasin & horaires</p>
            <h2>Retrouvez Caseo Chambery au showroom</h2>
            <p className="section-text">
              Tous les acces utiles sont ici : telephone, demande de devis,
              carte du magasin et horaires du showroom.
            </p>

            <div className="local-grid">
              <div className="map-card">
                <iframe
                  src={mapsEmbedUrl}
                  className="map-frame"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte Caseo Chambery"
                />
                <div className="map-actions">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Voir l'itineraire
                  </a>
                  <a href={devisUrl} className="btn btn-secondary">
                    Faire une demande de devis
                  </a>
                </div>
              </div>

              <div className="hours-card">
                <div className="hours-head">
                  <p className="section-tag small-tag">Horaires showroom</p>
                  <h3>Caseo Chambery</h3>
                  <p>
                    Menuiserie Diffusion
                    <br />
                    381 Avenue de Villarcher
                    <br />
                    73000 Chambery
                  </p>
                </div>

                <div className="hours-list">
                  {openingHours.map((item) => (
                    <div className="hours-row" key={item.day}>
                      <strong>{item.day}</strong>
                      <span>{item.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="hours-actions">
                  <a href={phoneLink} className="btn btn-dark">
                    Appeler le {phoneDisplay}
                  </a>
                  <a href={devisUrl} className="btn btn-primary">
                    Recevoir mon devis gratuit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container seo-block">
            <p className="section-tag">Moustiquaire Chambery</p>
            <h2>
              Installation de moustiquaire sur mesure pour fenetre,
              porte-fenetre et baie vitree
            </h2>
            <p className="section-text">
              Caseo Chambery vous accompagne pour votre projet de moustiquaire
              sur mesure, de la prise de mesures a la pose finale. Nos solutions
              sont adaptees aux fenetres, portes-fenetres et baies vitrees, avec
              un accompagnement local, un showroom accessible et une fabrication
              sur mesure pour Chambery et ses environs.
            </p>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container">
            <p className="section-tag">FAQ moustiquaire Chambery</p>
            <h2>Les questions frequentes</h2>

            <div className="faq-list">
              {faqs.map((f, i) => (
                <div key={i} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    {f.question}
                    <span
                      className={openFaq === i ? "faq-plus open" : "faq-plus"}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && <p className="faq-answer">{f.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-wrap">
          <div className="cta-box">
            <div>
              <h2>Votre moustiquaire sur mesure a Chambery commence ici</h2>
              <p>
                Devis gratuit, prise de mesures a domicile, fabrication sur
                mesure et pose par nos techniciens. Contactez Caseo Chambery
                pour lancer votre projet.
              </p>
            </div>

            <div className="cta-buttons">
              <a href={devisUrl} className="btn btn-white">
                Recevoir mon devis gratuit
              </a>
              <a href={phoneLink} className="btn btn-dark-outline">
                Appeler le showroom
              </a>
            </div>
          </div>
        </section>
      </main>

      <div className="mobile-sticky-cta">
        <a href={phoneLink} className="mobile-sticky-btn mobile-call">
          Appeler
        </a>
        <a href={devisUrl} className="mobile-sticky-btn mobile-devis">
          Devis gratuit
        </a>
      </div>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© 2026 Caseo Chambery - Menuiserie Diffusion</span>
          <div className="footer-links">
            <a href={showroomUrl} target="_blank" rel="noreferrer">
              Page showroom Caseo Chambery
            </a>
            <a href={devisUrl} target="_blank" rel="noreferrer">
              Demande de devis Caseo
            </a>
            <a
              href="https://www.caseo-maison.com/"
              target="_blank"
              rel="noreferrer"
            >
              Site officiel Caseo
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
