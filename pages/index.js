export default function LandingPageMoustiquaires() {
  const benefits = [
    {
      title: "Protection efficace",
      text: "Bloquez moustiques, mouches et insectes tout en gardant l’air frais dans votre maison.",
    },
    {
      title: "Sur mesure",
      text: "Des moustiquaires adaptées à vos fenêtres, portes-fenêtres et baies coulissantes.",
    },
    {
      title: "Esthétique discrète",
      text: "Des finitions sobres et élégantes pour s’intégrer à votre habitat sans l’alourdir.",
    },
    {
      title: "Pose par des pros",
      text: "Conseil, prise de cotes et installation soignée pour un résultat durable.",
    },
  ];

  const steps = [
    "Échange sur votre besoin",
    "Prise de mesures et conseil produit",
    "Fabrication sur mesure",
    "Pose et mise en service",
  ];

  const products = [
    {
      name: "Moustiquaire enroulable",
      text: "Idéale pour les fenêtres du quotidien, simple à manipuler et discrète.",
    },
    {
      name: "Moustiquaire plissée",
      text: "Parfaite pour les baies vitrées et passages fréquents grâce à son ouverture fluide.",
    },
    {
      name: "Moustiquaire fixe",
      text: "Une solution pratique et économique pour les ouvertures peu sollicitées.",
    },
  ];

  const reviews = [
    {
      name: "Sophie M.",
      text: "Installation propre et rapide. On peut enfin laisser les fenêtres ouvertes le soir.",
    },
    {
      name: "Julien R.",
      text: "Très bon conseil sur le choix des moustiquaires pour notre baie coulissante.",
    },
    {
      name: "Claire et Thomas",
      text: "Produit discret, solide et vraiment confortable au quotidien.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-white px-4 py-1 text-sm text-slate-600 shadow-sm">
              Moustiquaires sur mesure
            </div>
            <h1 className="max-w-xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Profitez de l’air frais, pas des moustiques.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Équipez vos fenêtres et baies vitrées avec des moustiquaires sur mesure, esthétiques et faciles à vivre.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#formulaire"
                className="rounded-2xl bg-slate-900 px-6 py-4 text-center text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Demander un devis gratuit
              </a>
              <a
                href="#produits"
                className="rounded-2xl border border-slate-300 px-6 py-4 text-center text-base font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Voir les solutions
              </a>
            </div>
            <div className="mt-8 grid max-w-lg grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
                <p className="text-2xl font-bold">100%</p>
                <p className="mt-1 text-sm text-slate-600">sur mesure</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
                <p className="text-2xl font-bold">Rapide</p>
                <p className="mt-1 text-sm text-slate-600">prise de contact</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
                <p className="text-2xl font-bold">Pro</p>
                <p className="mt-1 text-sm text-slate-600">pose soignée</p>
              </div>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl">
              <div className="aspect-[4/3] rounded-2xl bg-slate-100 p-6">
                <div className="flex h-full items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-white text-center text-slate-500">
                  <div>
                    <p className="text-lg font-semibold text-slate-700">Visuel produit / maison</p>
                    <p className="mt-2 text-sm">Ajoute ici une photo de fenêtre ou baie équipée d’une moustiquaire.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold">Fenêtres</p>
                  <p className="mt-1 text-sm text-slate-600">Enroulable, fixe, battante</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold">Baies vitrées</p>
                  <p className="mt-1 text-sm text-slate-600">Plissée, coulissante, grand format</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Pourquoi choisir cette solution</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Un vrai confort au quotidien</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="produits" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Nos solutions</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Des moustiquaires adaptées à chaque ouverture
              </h2>
              <div className="mt-8 grid gap-5">
                {products.map((product) => (
                  <div key={product.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{product.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Comment ça se passe</p>
              <ol className="mt-6 space-y-4">
                {steps.map((step, index) => (
                  <li key={step} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 font-semibold text-white">
                      {index + 1}
                    </div>
                    <div className="pt-2 text-sm font-medium text-slate-700">{step}</div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="rounded-[2rem] bg-slate-900 px-8 py-12 text-white md:px-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">La bonne période pour agir</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Préparez votre maison avant la pleine saison.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
                Anticipez les beaux jours avec une solution durable, discrète et confortable pour toute la famille.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href="#formulaire"
                className="rounded-2xl bg-white px-6 py-4 text-center font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                Obtenir mon devis
              </a>
              <a
                href="tel:+33000000000"
                className="rounded-2xl border border-white/30 px-6 py-4 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Appeler le magasin
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Avis clients</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Ils apprécient le confort retrouvé</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm leading-7 text-slate-600">“{review.text}”</p>
                <p className="mt-4 font-semibold text-slate-900">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="formulaire" className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Demande de devis</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Parlez-nous de votre projet</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Laissez vos coordonnées pour être recontacté rapidement et recevoir une étude adaptée à votre besoin.
            </p>
            <div className="mt-8 space-y-4 text-sm text-slate-600">
              <p>✔ Devis gratuit</p>
              <p>✔ Conseil personnalisé</p>
              <p>✔ Étude sur mesure</p>
            </div>
          </div>

          <form className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-2xl border border-slate-300 px-4 py-4 outline-none ring-0 placeholder:text-slate-400 focus:border-slate-900" type="text" placeholder="Prénom et nom" />
              <input className="rounded-2xl border border-slate-300 px-4 py-4 outline-none ring-0 placeholder:text-slate-400 focus:border-slate-900" type="tel" placeholder="Téléphone" />
            </div>
            <input className="rounded-2xl border border-slate-300 px-4 py-4 outline-none ring-0 placeholder:text-slate-400 focus:border-slate-900" type="email" placeholder="Adresse e-mail" />
            <input className="rounded-2xl border border-slate-300 px-4 py-4 outline-none ring-0 placeholder:text-slate-400 focus:border-slate-900" type="text" placeholder="Ville / Code postal" />
            <select className="rounded-2xl border border-slate-300 px-4 py-4 text-slate-500 outline-none focus:border-slate-900">
              <option>Type d’ouverture concernée</option>
              <option>Fenêtre</option>
              <option>Porte-fenêtre</option>
              <option>Baie vitrée</option>
              <option>Plusieurs ouvertures</option>
            </select>
            <textarea className="min-h-[140px] rounded-2xl border border-slate-300 px-4 py-4 outline-none placeholder:text-slate-400 focus:border-slate-900" placeholder="Décrivez votre besoin"></textarea>
            <label className="flex items-start gap-3 text-sm text-slate-600">
              <input type="checkbox" className="mt-1" />
              <span>J’accepte que mes données soient utilisées pour être recontacté dans le cadre de ma demande.</span>
            </label>
            <button type="submit" className="rounded-2xl bg-slate-900 px-6 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-0.5">
              Envoyer ma demande
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:px-8 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Votre enseigne — Moustiquaires sur mesure</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-900">Mentions légales</a>
            <a href="#" className="hover:text-slate-900">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
