import Head from "next/head";

const canonicalUrl = "https://landing-moustiquaires.vercel.app/";
const showroomUrl =
  "https://www.caseo-maison.com/magasins/page/caseo-chambery-voglans-85/magasin-fenetre-chambery-caseo-71";

const solutions = [
  {
    title: "Moustiquaire enroulable",
    text: "La solution discrète et pratique pour les fenêtres du quotidien, avec une manipulation simple et un rendu propre.",
  },
  {
    title: "Moustiquaire plissée",
    text: "Idéale pour les portes-fenêtres et baies vitrées à Chambéry, avec un passage fluide et un encombrement réduit.",
  },
  {
    title: "Moustiquaire fixe",
    text: "Parfaite pour les ouvertures peu sollicitées, avec un excellent rapport simplicité, efficacité et sobriété.",
  },
];

const reasons = [
  {
    title: "Caséo Chambéry, ancré localement",
    text: "Votre projet est suivi par l'équipe de Chambéry-Voglans, avec showroom, conseil et accompagnement de proximité.",
  },
  {
    title: "Du vrai sur-mesure",
    text: "Chaque moustiquaire est adaptée à vos dimensions, à votre type d'ouverture et à l'esthétique de votre maison.",
  },
  {
    title: "Pose soignée",
    text: "Prise de mesures, recommandation produit et installation sont pensées pour un résultat durable et net.",
  },
  {
    title: "Confort au quotidien",
    text: "Vous aérez vos pièces sans laisser entrer moustiques, mouches et insectes, même en pleine saison.",
  },
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

const faqs = [
  {
    question: "Quel type de moustiquaire choisir à Chambéry ?",
    answer:
      "Tout dépend de votre ouverture et de votre usage. Pour une fenêtre, une moustiquaire enroulable est souvent idéale. Pour une baie vitrée ou une porte-fenêtre, la moustiquaire plissée est généralement la solution la plus confortable.",
  },
  {
    question: "Faut-il une moustiquaire sur mesure pour une baie vitrée ?",
    answer:
      "Oui, pour une baie vitrée, le sur-mesure est fortement recommandé. Il permet d'obtenir une ouverture fluide, une finition propre et une parfaite adaptation aux dimensions réelles.",
  },
  {
    question: "Caséo Chambéry intervient-il autour de Chambéry ?",
    answer:
      "Oui. La landing est pensée pour Chambéry, mais l'équipe peut aussi accompagner les projets autour de Voglans, La Motte-Servolex, Cognin, Bassens, Barberaz et Aix-les-Bains selon votre besoin.",
  },
  {
    question: "Comment obtenir un devis pour une moustiquaire à Chambéry ?",
    answer:
      "Vous pouvez appeler directement le showroom Caséo Chambéry ou demander un devis depuis cette page pour être recontacté et orienté vers la solution la plus adaptée.",
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
    "Caséo Chambéry accompagne les projets de moustiquaires sur mesure pour fenêtres, portes-fenêtres et baies vitrées à Chambéry et aux alentours.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "381 Avenue de Villarcher",
    postalCode: "73000",
    addressLocality: "Chambéry",
    addressCountry: "FR",
  },
  areaServed: zones.map((city) => ({
    "@type": "City",
    name: city,
  })),
  parentOrganization: {
    "@type": "Organization",
    name: "Caséo",
    url: "https://www.caseo-maison.com/",
  },
  sameAs: [showroomUrl],
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
  return (
    <>
      <Head>
        <title>
          Moustiquaire Chambéry : pose sur mesure fenêtres et baies | Caséo
          Chambéry
        </title>
        <meta
          name="description"
          content="Caséo Chambéry installe vos moustiquaires sur mesure pour fenêtres, portes-fenêtres et baies vitrées. Devis gratuit, prise de mesures, pose soignée à Chambéry et alentours."
        />
        <meta
          name="robots"
          content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        />
        <meta
          name="keywords"
          content="moustiquaire Chambéry, moustiquaire sur mesure Chambéry, moustiquaire baie vitrée Chambéry, Caséo Chambéry, moustiquaire Voglans"
        />
        <meta
          property="og:title"
          content="Moustiquaire Chambéry | Caséo Chambéry"
        />
        <meta
          property="og:description"
          content="Moustiquaires sur mesure à Chambéry pour fenêtres, portes-fenêtres et baies vitrées."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="theme-color" content="#15213b" />
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

      <main className="min-h-screen bg-[#fbf7f1] text-[#15213b]">
        <header className="sticky top-0 z-30 border-b border-[#15213b]/10 bg-[#fbf7f1]/85 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
            <a href="#top" className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e75b72] text-sm font-bold text-white">
                C
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#6f7d93]">
                  Caséo
                </p>
                <p className="text-sm font-semibold text-[#15213b]">
                  Chambéry - Moustiquaires
                </p>
              </div>
            </a>

            <div className="hidden items-center gap-6 md:flex">
              <a
                href="#solutions"
                className="text-sm font-medium text-[#41546f] transition hover:text-[#15213b]"
              >
                Solutions
              </a>
              <a
                href="#pourquoi"
                className="text-sm font-medium text-[#41546f] transition hover:text-[#15213b]"
              >
                Pourquoi Caséo
              </a>
              <a
                href="#faq"
                className="text-sm font-medium text-[#41546f] transition hover:text-[#15213b]"
              >
                FAQ
              </a>
              <a
                href="tel:+33479344852"
                className="rounded-full bg-[#15213b] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                04 79 34 48 52
              </a>
            </div>
          </div>
        </header>

        <section id="top" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(231,91,114,0.14),_transparent_28%),radial-gradient(circle_at_80%_10%,_rgba(21,33,59,0.08),_transparent_24%),linear-gradient(180deg,#fffaf5_0%,#fbf7f1_100%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
            <div>
              <div className="inline-flex rounded-full border border-[#d9dfe8] bg-white px-4 py-2 text-sm text-[#52647d] shadow-sm">
                Caséo Chambéry | Moustiquaires sur mesure
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.32em] text-[#e75b72]">
                Vos projets bien encadrés
              </p>

              <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight text-[#15213b] md:text-6xl lg:text-7xl">
                Moustiquaires sur mesure à Chambéry
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#41546f] md:text-xl">
                Vous recherchez une moustiquaire à Chambéry pour une fenêtre,
                une porte-fenêtre ou une baie vitrée ? Caséo Chambéry vous
                accompagne avec une solution sur mesure, esthétique et pensée
                pour durer.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+33479344852"
                  className="rounded-full bg-[#e75b72] px-7 py-4 text-center text-base font-semibold text-white shadow-[0_18px_35px_rgba(231,91,114,0.22)] transition hover:-translate-y-0.5"
                >
                  Demander mon devis gratuit
                </a>
                <a
                  href={showroomUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#cbd4df] bg-white px-7 py-4 text-center text-base font-semibold text-[#15213b] transition hover:border-[#15213b]"
                >
                  Voir le showroom de Chambéry
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-[#dde3eb] bg-white p-5 shadow-[0_10px_30px_rgba(21,33,59,0.06)]">
                  <p className="text-3xl font-bold text-[#15213b]">100%</p>
                  <p className="mt-1 text-sm text-[#52647d]">sur mesure</p>
                </div>
                <div className="rounded-[1.5rem] border border-[#dde3eb] bg-white p-5 shadow-[0_10px_30px_rgba(21,33,59,0.06)]">
                  <p className="text-3xl font-bold text-[#15213b]">Local</p>
                  <p className="mt-1 text-sm text-[#52647d]">
                    showroom à Chambéry
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-[#dde3eb] bg-white p-5 shadow-[0_10px_30px_rgba(21,33,59,0.06)]">
                  <p className="text-3xl font-bold text-[#15213b]">Pose</p>
                  <p className="mt-1 text-sm text-[#52647d]">soignée</p>
                </div>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="relative overflow-hidden rounded-[2rem] bg-[#15213b] p-8 text-white shadow-[0_30px_80px_rgba(21,33,59,0.30)]">
                <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#e75b72]/30 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,transparent_45%,rgba(255,255,255,0.05)_100%)]" />

                <div className="relative">
                  <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur">
                    Chambéry • Voglans • Savoie
                  </div>

                  <div className="mt-10">
                    <p className="text-xs uppercase tracking-[0.36em] text-white/55">
                      Caséo Chambéry
                    </p>
                    <p className="mt-3 max-w-sm text-4xl font-bold leading-none sm:text-5xl">
                      Fenêtres, portes-fenêtres et baies vitrées
                    </p>
                    <p className="mt-5 max-w-sm text-base leading-7 text-white/72">
                      Une landing locale pensée pour les recherches
                      “moustiquaire Chambéry”, avec un discours aligné à la
                      marque Caséo et à l’expertise du showroom.
                    </p>
                  </div>

                  <div className="mt-10 grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur sm:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-white/55">
                        Showroom
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-white">
                        Menuiserie Diffusion
                        <br />
                        381 Avenue de Villarcher
                        <br />
                        73000 Chambéry
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-white/55">
                        Contact
                      </p>
                      <a
                        href="tel:+33479344852"
                        className="mt-2 block text-sm font-semibold leading-6 text-white transition hover:text-[#ffd7de]"
                      >
                        04 79 34 48 52
                      </a>
                      <a
                        href={showroomUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 block text-sm text-white/72 transition hover:text-white"
                      >
                        Voir la page officielle Caséo Chambéry
                      </a>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/72">
                    {zones.map((zone) => (
                      <span
                        key={zone}
                        className="rounded-full border border-white/12 px-3 py-2"
                      >
                        {zone}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#15213b]/8 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-6 md:grid-cols-3 md:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e75b72]">
                Adresse locale
              </p>
              <p className="mt-2 text-sm leading-6 text-[#41546f]">
                381 Avenue de Villarcher, 73000 Chambéry
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e75b72]">
                Recherche ciblée
              </p>
              <p className="mt-2 text-sm leading-6 text-[#41546f]">
                Page optimisée pour “moustiquaire Chambéry”, “moustiquaire sur
                mesure Chambéry” et “moustiquaire baie vitrée Chambéry”.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e75b72]">
                Ancrage Caséo
              </p>
              <p className="mt-2 text-sm leading-6 text-[#41546f]">
                Direction visuelle inspirée du site officiel Caséo, adaptée pour
                une landing locale plus directe et plus orientée conversion.
              </p>
            </div>
          </div>
        </section>

        <section id="solutions" className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#e75b72]">
              Moustiquaire Chambéry
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#15213b] md:text-5xl">
              Des solutions sur mesure pour chaque ouverture
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#41546f]">
              Fenêtre de chambre, porte-fenêtre de terrasse ou grande baie
              vitrée : l’objectif reste le même, protéger votre intérieur tout
              en gardant l’air frais et la lumière.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {solutions.map((item, index) => (
              <article
                key={item.title}
                className="group rounded-[2rem] border border-[#dde3eb] bg-white p-8 shadow-[0_16px_40px_rgba(21,33,59,0.06)] transition hover:-translate-y-1"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#15213b] text-sm font-bold text-white">
                  0{index + 1}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-[#15213b]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[#52647d]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="pourquoi"
          className="border-y border-[#15213b]/8 bg-[#f3eee7]"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#e75b72]">
                  Pourquoi Caséo Chambéry
                </p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#15213b] md:text-5xl">
                  Une landing locale, plus crédible et plus utile
                </h2>
                <p className="mt-6 text-lg leading-8 text-[#41546f]">
                  Au lieu d’une page générique, l’idée est de faire ressentir
                  immédiatement trois choses : la marque Caséo, le point de
                  contact de Chambéry, et la spécialisation moustiquaire sur
                  mesure.
                </p>

                <div className="mt-8 rounded-[2rem] bg-[#15213b] p-8 text-white">
                  <p className="text-xs uppercase tracking-[0.32em] text-white/50">
                    Intention SEO locale
                  </p>
                  <p className="mt-4 text-2xl font-bold">
                    Se positionner sur “moustiquaire Chambéry”
                  </p>
                  <p className="mt-4 text-base leading-8 text-white/72">
                    Le mot-clé principal est repris dans le title, le H1, le
                    premier paragraphe, les sections de preuve locale et la FAQ,
                    sans sur-optimisation artificielle.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {reasons.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[2rem] border border-white/60 bg-white p-7 shadow-[0_14px_34px_rgba(21,33,59,0.06)]"
                  >
                    <h3 className="text-xl font-bold text-[#15213b]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-[#52647d]">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#e75b72]">
                Showroom local
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#15213b] md:text-5xl">
                Votre projet moustiquaire démarre à Chambéry
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#41546f]">
                Cette page n’est pas seulement pensée pour être trouvée sur
                Google. Elle doit aussi rassurer, orienter et donner envie de
                contacter le showroom Caséo Chambéry dès la première visite.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-[#dde3eb] bg-white p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6b7a90]">
                    Coordonnées
                  </p>
                  <p className="mt-3 text-lg font-semibold leading-7 text-[#15213b]">
                    381 Avenue de Villarcher
                    <br />
                    73000 Chambéry
                  </p>
                  <a
                    href="tel:+33479344852"
                    className="mt-4 inline-block text-base font-semibold text-[#e75b72]"
                  >
                    04 79 34 48 52
                  </a>
                </div>

                <div className="rounded-[1.75rem] border border-[#dde3eb] bg-white p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6b7a90]">
                    Villes ciblées
                  </p>
                  <p className="mt-3 text-base leading-8 text-[#41546f]">
                    {zones.join(", ")}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[linear-gradient(135deg,#15213b_0%,#22355d_58%,#e75b72_160%)] p-8 text-white shadow-[0_30px_70px_rgba(21,33,59,0.24)]">
              <p className="text-xs uppercase tracking-[0.34em] text-white/50">
                Requête principale
              </p>
              <p className="mt-3 text-4xl font-bold leading-tight">
                Moustiquaire
                <br />
                Chambéry
              </p>
              <p className="mt-5 text-base leading-8 text-white/78">
                Le nom de la landing, son titre, sa structure et son maillage
                doivent tous converger vers cette intention de recherche.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Title et H1 centrés sur “moustiquaire Chambéry”",
                  "Références directes à Caséo Chambéry et à l'adresse locale",
                  "FAQ locale pour enrichir la sémantique et le SEO",
                  "CTA showroom et téléphone visibles dès le hero",
                ].map((line) => (
                  <div
                    key={line}
                    className="rounded-full border border-white/12 bg-white/10 px-4 py-3 text-sm"
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-[#15213b]/8 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#e75b72]">
                FAQ moustiquaire Chambéry
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#15213b] md:text-5xl">
                Les questions fréquentes à Chambéry
              </h2>
            </div>

            <div className="mt-12 grid gap-4">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[1.75rem] border border-[#dde3eb] bg-[#fbf7f1] p-6"
                >
                  <summary className="cursor-pointer list-none text-lg font-semibold text-[#15213b]">
                    {item.question}
                  </summary>
                  <p className="mt-4 max-w-4xl text-base leading-8 text-[#52647d]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="overflow-hidden rounded-[2.25rem] bg-[#15213b] px-8 py-12 text-white md:px-12 md:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ffb9c6]">
                  Demande de devis
                </p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                  Votre moustiquaire sur mesure à Chambéry commence ici
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                  Pour transformer cette page en vrai levier local, l’étape
                  suivante sera d’ajouter soit un vrai formulaire connecté, soit
                  un bouton de prise de contact vers votre système commercial.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white/10 p-7 backdrop-blur">
                <div className="grid gap-4">
                  <a
                    href="tel:+33479344852"
                    className="rounded-full bg-[#e75b72] px-6 py-4 text-center text-base font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    Appeler Caséo Chambéry
                  </a>
                  <a
                    href={showroomUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/20 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10"
                  >
                    Voir la page du showroom
                  </a>
                  <a
                    href="https://www.caseo-maison.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/20 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10"
                  >
                    Découvrir l’univers Caséo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#15213b]/8 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-[#52647d] md:flex-row md:items-center md:justify-between md:px-8">
            <p>© 2026 Caséo Chambéry - Menuiserie Diffusion</p>
            <div className="flex flex-wrap gap-5">
              <a
                href={showroomUrl}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#15213b]"
              >
                Magasin Caséo Chambéry
              </a>
              <a
                href="https://www.caseo-maison.com/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#15213b]"
              >
                Site officiel Caséo
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
