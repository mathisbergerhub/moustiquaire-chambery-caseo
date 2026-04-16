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
  { day: "Dimanche", hours: "Fermé" },
];

const zones = [
  "Chambéry",
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
    desc: "La solution la plus demandée pour les fenêtres. Facile à ouvrir, discrète une fois relevée, durable au quotidien.",
    ideal: "Idéale pour chambre, cuisine, salle de bain et fenêtres fréquemment ouvertes",
  },
  {
    num: "02",
    title: "Moustiquaire plissée",
    desc: "Parfaite pour les portes-fenêtres et baies vitrées. Ouverture latérale souple, faible encombrement et excellent confort d’usage.",
    ideal: "Idéale pour terrasse, jardin, balcon et grandes ouvertures",
  },
  {
    num: "03",
    title: "Moustiquaire fixe",
    desc: "Une solution simple, propre et durable pour les ouvertures peu sollicitées. Protection permanente sans manipulation.",
    ideal: "Idéale pour cave, véranda, cellier et fenêtres peu utilisées",
  },
];

const reasons = [
  {
    number: "01",
    title: "Showroom local à Chambéry",
    text: "Vous pouvez voir les modèles, comparer les finitions et échanger avec une équipe proche de chez vous.",
  },
  {
    number: "02",
    title: "Prise de mesures à domicile",
    text: "Nous prenons les mesures sur place pour vous orienter vers la moustiquaire la plus adaptée à vos ouvertures.",
  },
  {
    number: "03",
    title: "Fabrication sur mesure",
    text: "Chaque moustiquaire est fabriquée selon vos cotes pour un rendu net, précis et fiable dans le temps.",
  },
  {
    number: "04",
    title: "Pose soignée par nos techniciens",
    text: "Installation propre, réglages, vérifications et conseils d’utilisation : vous repartez avec une solution prête à l’emploi.",
  },
];

const painPoints = [
  "Vous n’ouvrez plus les fenêtres à cause des moustiques",
  "Les solutions temporaires tiennent mal ou sont peu esthétiques",
  "Vous voulez garder l’air frais sans laisser entrer les insectes",
  "Vous cherchez une solution durable, propre et adaptée à vos menuiseries",
];

const benefits = [
  "Confort d’été sans moustiques ni insectes",
  "Aération naturelle de votre logement",
  "Solution discrète et esthétique",
  "Compatible avec fenêtres, portes-fenêtres et baies vitrées",
  "Fabrication sur mesure",
  "Pose professionnelle à Chambéry et alentours",
];

const reviews = [
  {
    name: "karine routin",
    rating: "5/5",
    date: "4 novembre 2025",
    text: "Très professionnel",
  },
  {
    name: "PATRICIA RENAUD",
    rating: "5/5",
    date: "6 juin 2025",
    text: "Je suis tout à fait satisfaite. Jean-Claude a été efficace, fiable et très agréable.",
  },
  {
    name: "Verdoia Jean Daniel",
    rating: "5/5",
    date: "20 février 2024",
    text: "Très bon rapport qualité prix, le service est excellent et les matériaux de bonne qualités. Je recommande les yeux fermés car je suis satisfait du résultat.",
  },
];

const faqs = [
  {
    question: "Quel type de moustiquaire choisir pour ma fenêtre à Chambéry ?",
    answer:
      "Pour une fenêtre standard, la moustiquaire enroulable est souvent le meilleur choix. Pour une porte-fenêtre ou une baie vitrée, la moustiquaire plissée est généralement la plus confortable à l’usage.",
  },
  {
    question: "Proposez-vous la pose de moustiquaire à Chambéry et autour ?",
    answer:
      "Oui. Caséo Chambéry intervient pour la prise de mesures, la fabrication sur mesure et la pose de moustiquaires à Chambéry ainsi que dans les communes voisines.",
  },
  {
    question: "Faut-il forcément une moustiquaire sur mesure ?",
    answer:
      "Pour obtenir une finition propre, une bonne tenue dans le temps et un usage confortable, le sur mesure est généralement la meilleure solution, surtout pour les portes-fenêtres et baies vitrées.",
  },
  {
    question: "Combien coûte une moustiquaire sur mesure ?",
    answer:
      "Le prix dépend du type de moustiquaire, des dimensions, du nombre d’ouvertures et du niveau de finition souhaité. Le plus simple est de demander un devis gratuit pour obtenir un chiffrage adapté à votre projet.",
  },
  {
    question: "Comment se passe la prise de mesures ?",
    answer:
      "Après votre demande, l’équipe Caséo Chambéry vous recontacte pour qualifier votre besoin. Un technicien peut ensuite se déplacer chez vous pour mesurer précisément vos ouvertures avant fabrication.",
  },
  {
    question: "Quels sont les horaires du showroom Caséo Chambéry ?",
    answer:
      "Le showroom est ouvert du lundi au vendredi de 08h00 à 12h00 puis de 13h30 à 18h00, et le samedi de 09h00 à 13h00.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Caséo Chambéry - Menuiserie Diffusion",
  image: canonicalUrl,
  url: canonicalUrl,
  telephone: "+33479344852",
  description:
    "Caséo Chambéry installe des moustiquaires sur mesure pour fenêtres, portes-fenêtres et baies vitrées à Chambéry et dans les communes alentours.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "381 Avenue de Villarcher",
    postalCode: "73000",
    addressLocality: "Chambéry",
    addressCountry: "FR",
  },
  areaServed: zones.map((city) => ({ "@type": "City", name: city })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
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
    name: "Caséo",
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
          Moustiquaire sur mesure à Chambéry avec pose | Devis gratuit | Caséo
          Chambéry
        </title>
        <meta
          name="description"
          content="Caséo Chambéry installe votre moustiquaire sur mesure à Chambéry : fenêtres, portes-fenêtres et baies vitrées. Devis gratuit, prise de mesures à domicile et pose professionnelle."
        />
        <meta
          name="robots"
          content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        />
        <meta
          property="og:title"
          content="Moustiquaire sur mesure à Chambéry avec pose | Caséo Chambéry"
        />
        <meta
          property="og:description"
          content="Fenêtres, portes-fenêtres, baies vitrées : demandez votre devis gratuit pour une moustiquaire sur mesure à Chambéry."
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
              <strong>Caséo Chambéry</strong>
              <span>Moustiquaires sur mesure</span>
            </div>
          </a>

          <nav className="nav">
            <a href="#solutions">Solutions</a>
            <a href="#pourquoi">Pourquoi Caséo</a>
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
                <span className="hero-tag">Caséo Chambéry - Voglans</span>
                <span className="hero-review-badge">⭐ 4,5/5 - 84 avis</span>
              </div>

              <h1>
                Moustiquaire sur mesure à Chambéry avec pose
                <span> Devis gratuit</span>
              </h1>

              <p className="hero-text">
                Fenêtres, portes-fenêtres, baies vitrées : protégez votre maison
                des moustiques tout l’été sans renoncer à l’air frais. Caséo
                Chambéry prend les mesures, fabrique et pose votre moustiquaire
                sur mesure.
              </p>

              <div className="hero-points">
                <span>✔ Prise de mesures à domicile</span>
                <span>✔ Fabrication sur vos cotes</span>
                <span>✔ Pose par nos techniciens</span>
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
                  <span>showroom à Chambéry</span>
                </div>
                <div className="stat-card">
                  <strong>Pose pro</strong>
                  <span>installation soignée</span>
                </div>
              </div>
            </div>

            <div className="hero-panel">
              <div className="hero-panel-label">Votre showroom local</div>
              <div className="hero-panel-title">
                Un projet simple, clair et bien accompagné
              </div>
              <p className="hero-panel-text">
                Venez voir les modèles au showroom Caséo Chambéry ou faites
                directement votre demande en ligne pour être recontacté.
              </p>

              <div className="hero-panel-box">
                <p>
                  <strong>Menuiserie Diffusion</strong>
                  <br />
                  381 Avenue de Villarcher
                  <br />
                  73000 Chambéry
                </p>
                <a href={phoneLink}>{phoneDisplay}</a>
              </div>

              <div className="hero-panel-actions">
                <a href={devisUrl} className="btn btn-primary">
                  Demander un devis
                </a>
                <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn btn-dark-outline">
                  Voir l’itinéraire
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
                <strong>Prise de mesures à domicile</strong>
                <span>Des conseils adaptés à votre logement</span>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-number">02</div>
              <div>
                <strong>Fabrication sur mesure</strong>
                <span>Une moustiquaire adaptée à chaque ouverture</span>
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
          <div className="container two-col-block">
            <div>
              <p className="section-tag">Le problème le plus fréquent</p>
              <h2>Marre des moustiques dès que vous ouvrez les fenêtres ?</h2>
              <p className="section-text">
                En été, beaucoup de foyers n’osent plus aérer correctement leur
                logement à cause des moustiques et autres insectes. Les
                solutions temporaires sont souvent peu esthétiques, peu solides
                et peu pratiques à utiliser au quotidien.
              </p>
            </div>

            <div className="pain-card">
              {painPoints.map((item) => (
                <div key={item} className="pain-row">
                  <span>•</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="solutions" className="section">
          <div className="container">
            <p className="section-tag">Nos solutions</p>
            <h2>Des moustiquaires adaptées à chaque ouverture</h2>
            <p className="section-text">
              Caséo Chambéry vous accompagne pour choisir la bonne solution
              selon votre usage, le type d’ouverture et le niveau de confort
              recherché.
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
            <h2>Pourquoi installer une moustiquaire sur mesure à Chambéry ?</h2>
            <p className="section-text">
              Une moustiquaire bien choisie vous permet de profiter de l’air
              frais sans subir les insectes, tout en gardant une intégration
              propre et discrète à vos menuiseries.
            </p>

            <div className="benefits-grid">
              {benefits.map((benefit) => (
                <div key={benefit} className="benefit-card">
                  <span className="benefit-check">✔</span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pourquoi" className="section">
          <div className="container why-grid">
            <div>
              <p className="section-tag">Pourquoi choisir Caséo Chambéry</p>
              <h2>Un showroom local, une équipe qui se déplace</h2>
              <p className="section-text why-text">
                Vous ne choisissez pas une moustiquaire standard achetée à la
                va-vite. Vous bénéficiez d’un accompagnement local avec prise de
                mesures, fabrication sur mesure et pose professionnelle.
              </p>

              <div className="why-feature">
                <div className="why-feature-label">Preuve sociale</div>
                <div className="why-feature-title">
                  4,5/5 sur 84 avis pour Caséo Chambéry
                </div>
                <p>
                  Les avis clients rassurent avant un devis. Ils montrent la
                  qualité de l’accueil, du conseil, de la pose et du suivi du
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
            <h2>Le prix d’une moustiquaire dépend surtout de votre projet</h2>
            <p className="section-text">
              Le tarif varie selon le type de moustiquaire, les dimensions, le
              nombre d’ouvertures, les contraintes de pose et la finition
              choisie. Pour obtenir un prix juste, le plus efficace reste de
              demander un devis gratuit auprès de Caséo Chambéry.
            </p>

            <div className="price-box">
              <div>
                <strong>Besoin d’un prix précis ?</strong>
                <p>
                  Recevez un devis gratuit selon vos dimensions, votre type
                  d’ouverture et le niveau de finition souhaité.
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
            <p className="section-tag">Comment ça se passe</p>
            <h2>De la demande à la pose, tout est cadré</h2>

            <div className="process-grid">
              {[
                {
                  n: "1",
                  title: "Vous nous contactez",
                  desc: "Par téléphone ou via la demande de devis. L’équipe qualifie votre besoin et vous oriente.",
                },
                {
                  n: "2",
                  title: "Prise de mesures à domicile",
                  desc: "Un technicien se déplace pour mesurer précisément vos ouvertures et vous conseiller.",
                },
                {
                  n: "3",
                  title: "Fabrication sur mesure",
                  desc: "Votre moustiquaire est réalisée selon vos dimensions exactes et votre configuration.",
                },
                {
                  n: "4",
                  title: "Pose et réglages",
                  desc: "Nous installons la moustiquaire et nous vérifions son bon fonctionnement avant la fin de l’intervention.",
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
              Caséo Chambéry affiche une note de 4,5/5 sur 84 avis. Voici
              quelques retours publics consultables en ligne.
            </p>

            <div className="reviews-header">
              <div className="reviews-badge">
                <strong>4,5/5 - 84 avis</strong>
                <span>Caséo Chambéry</span>
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
                  <p className="review-text">“{review.text}”</p>
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
            <p className="section-tag dark-tag">Zone d’intervention</p>
            <h2>Pose de moustiquaire à Chambéry et dans les environs</h2>
            <p className="section-text dark-text">
              Caséo Chambéry intervient pour la moustiquaire sur mesure à
              Chambéry, Voglans, La Motte-Servolex, Bassens, Cognin, Barberaz,
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
            <h2>Retrouvez Caséo Chambéry au showroom</h2>
            <p className="section-text">
              Tous les accès utiles sont ici : téléphone, demande de devis,
              carte du magasin et horaires du showroom.
            </p>

            <div className="local-grid">
              <div className="map-card">
                <iframe
                  src={mapsEmbedUrl}
                  className="map-frame"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte Caséo Chambéry"
                />
                <div className="map-actions">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Voir l’itinéraire
                  </a>
                  <a href={devisUrl} className="btn btn-secondary">
                    Faire une demande de devis
                  </a>
                </div>
              </div>

              <div className="hours-card">
                <div className="hours-head">
                  <p className="section-tag small-tag">Horaires showroom</p>
                  <h3>Caséo Chambéry</h3>
                  <p>
                    Menuiserie Diffusion
                    <br />
                    381 Avenue de Villarcher
                    <br />
                    73000 Chambéry
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
            <p className="section-tag">Moustiquaire Chambéry</p>
            <h2>
              Installation de moustiquaire sur mesure pour fenêtre, porte-fenêtre
              et baie vitrée
            </h2>
            <p className="section-text">
              Si vous recherchez une moustiquaire à Chambéry, une pose de
              moustiquaire à Chambéry ou une installation de moustiquaire sur
              mesure pour votre maison, Caséo Chambéry vous accompagne de la
              prise de mesures à la pose finale. Nous proposons des solutions
              adaptées aux fenêtres, portes-fenêtres et baies vitrées, avec une
              approche locale, un showroom accessible et une fabrication sur
              mesure. Cette page a été conçue pour répondre aux besoins des
              habitants de Chambéry et des communes voisines qui souhaitent
              aérer leur logement sans laisser entrer les moustiques ni les
              insectes.
            </p>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container">
            <p className="section-tag">FAQ moustiquaire Chambéry</p>
            <h2>Les questions fréquentes</h2>

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
              <h2>Votre moustiquaire sur mesure à Chambéry commence ici</h2>
              <p>
                Devis gratuit, prise de mesures à domicile, fabrication sur
                mesure et pose par nos techniciens. Contactez Caséo Chambéry
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
          <span>© 2026 Caséo Chambéry - Menuiserie Diffusion</span>
          <div className="footer-links">
            <a href={showroomUrl} target="_blank" rel="noreferrer">
              Page showroom Caséo Chambéry
            </a>
            <a href={devisUrl} target="_blank" rel="noreferrer">
              Demande de devis Caséo
            </a>
            <a
              href="https://www.caseo-maison.com/"
              target="_blank"
              rel="noreferrer"
            >
              Site officiel Caséo
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
