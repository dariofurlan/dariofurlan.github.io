import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { MomentsGallery } from "~/components/MomentsGallery";
import { moments } from "~/data/moments";

export const meta: MetaFunction = () => {
  return [
    { title: "Dario Furlan - Sviluppatore Full-Stack & AI Specialist" },
    { name: "description", content: "Scopri Dario Furlan, sviluppatore Full-Stack e specialista in Intelligenza Artificiale, che offre soluzioni software personalizzate in sviluppo web e mobile, e-commerce, integrazione cloud, cybersecurity e automazione innovativa. Con sede a Padova, Dario unisce consulenza strategica e competenza tecnica per potenziare le operazioni aziendali con software su misura, soluzioni AI e gestione robusta dei database." },
  ];
};

export default function Index() {
  return (
    <div className="space-y-16 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="avatar">
            <div className="w-48 h-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="/profile.jpg" alt="Dario Furlan" />
            </div>
          </div>
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold font-Outfit">Dario Furlan</h1>
            <p className="text-xl text-base-content/80">Sviluppatore Full-Stack & Specialista AI</p>
            <p className="prose prose-lg max-w-none">
              Nato nel 2000, vivo e lavoro a Padova come sviluppatore full-stack freelance. 
              Programmo professionalmente dal 2018, con una passione per il codice iniziata a 15 anni. 
              Mi specializzo in soluzioni eleganti ed efficienti, con un approccio che un professore ha definito "estroso".
            </p>
          </div>
        </div>
      </section>

      {/* Academic Background */}
      <section>
        <h2 className="text-3xl font-bold font-Outfit text-center mb-12">🎓 Percorso Accademico</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* High School */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <div className="badge badge-primary">2015-2019</div>
              </div>
              <h3 className="card-title font-Outfit">ITI F. Severi</h3>
              <p className="text-sm text-base-content/70">Padova</p>
              <p className="text-sm mt-2">Diploma in Informatica e Telecomunicazioni</p>
              <div className="mt-4">
                <h4 className="font-semibold text-sm mb-2">Progetti Principali:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <Link to="/project/ErasmusCork2018" className="link link-accent">Erasmus+ Cork Experience</Link></li>
                  <li>• Prime applicazioni web</li>
                  <li>• Progetti di automazione</li>
                  <li>• Fondamenti di programmazione</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bachelor */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <div className="tooltip tooltip-right" data-tip="🤯 Plot twist: 5 anni per la triennale! Ma guarda sotto tutto quello che ho fatto nel mentre... Spoiler: lavoravo! 💪">
                  <div className="badge badge-secondary cursor-help">2019-2024</div>
                </div>
              </div>
              <h3 className="card-title font-Outfit">Laurea Triennale</h3>
              <p className="text-sm text-base-content/70">Università di Padova</p>
              <p className="text-sm mt-2">Informatica</p>
              <div className="mt-4">
                <h4 className="font-semibold text-sm mb-2">Progetti Significativi:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <Link to="/project/Scissorhands2022" className="link link-accent">Barber Scissorhands</Link> (Web Tech)</li>
                  <li>• <Link to="/project/Pao2020" className="link link-accent">Aquarius Ecosystem</Link> (OOP)</li>
                  <li>• <Link to="/project/BaseDati2020" className="link link-accent">WeCare Database</Link> (Database)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Master */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <div className="badge badge-accent">2025-presente</div>
              </div>
              <h3 className="card-title font-Outfit">Laurea Magistrale</h3>
              <p className="text-sm text-base-content/70">Università di Padova</p>
              <p className="text-sm mt-2">Artificial Intelligence (Computer Science)</p>
              <div className="mt-4">
                <h4 className="font-semibold text-sm mb-2">Progetti di Eccellenza:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <Link to="/project/PrivacyVision2025" className="link link-accent">Privacy-Preserving Vision</Link> (Vision)</li>
                  <li>• <Link to="/project/DNABERT2025" className="link link-accent">DNABERT Research</Link> (ML)</li>
                  <li>• <Link to="/case_study/PythIA" className="link link-accent">PythIA AI Assistant</Link> (Tesi)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Academic Projects CTA */}
        <div className="text-center mt-8">
          <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 shadow-xl">
            <div className="card-body">
              <h3 className="card-title justify-center font-Outfit text-xl">Esplora Tutti i Progetti Accademici</h3>
              <p className="text-base-content/80">
                Scopri il percorso formativo completo attraverso i progetti universitari: 
                dalla programmazione ad oggetti all'intelligenza artificiale.
              </p>
              <div className="card-actions justify-center mt-4">
                <Link to="/project" className="btn btn-primary">
                  Portfolio Progetti Accademici
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section>
        <h2 className="text-3xl font-bold font-Outfit text-center mb-12">💼 Esperienza Professionale</h2>
        
        {/* Key People */}
        <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 shadow-xl mb-8">
          <div className="card-body text-center">
            <h3 className="card-title justify-center font-Outfit text-2xl">Le Persone che Hanno Creduto in Me</h3>
            <p className="prose max-w-none">
              La mia carriera è stata plasmata da due mentori eccezionali: <strong>Enrico Giuriolo</strong> e <strong>Enrico Guidi</strong>, 
              che hanno visto il mio potenziale e mi hanno guidato attraverso progetti trasformativi che hanno definito 
              il mio percorso professionale.
            </p>
          </div>
        </div>

        {/* Work Timeline */}
        <div className="space-y-8">
          {/* SGI Servizi */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                <div>
                  <h3 className="card-title font-Outfit text-xl">SGI Servizi S.R.L.</h3>
                  <p className="text-base-content/70">con Enrico Giuriolo</p>
                </div>
                <div className="badge badge-outline">2022-presente</div>
              </div>
              <p className="mb-4">Stage universitario che mi ha introdotto al mondo dell'AI enterprise e del machine learning applicato.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Progetti Principali:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <Link to="/case_study/PythIA" className="link link-accent">PythIA - AI Call Center Assistant</Link> (tesi triennale)</li>
                    <li>• <Link to="/case_study/Docfiler" className="link link-accent">DocFiler - Blockchain Document Management</Link></li>
                  </ul>
                </div>
                {/* <div>
                  <h4 className="font-semibold mb-2">Sfide & Apprendimenti:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Prima esperienza con AI in produzione</li>
                    <li>• Gestione di big data</li>
                    <li>• Collaborazione con team enterprise</li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>

          {/* 42Night */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                <div>
                  <h3 className="card-title font-Outfit text-xl">42Night Startup</h3>
                  <p className="text-base-content/70">con Enrico Giuriolo e Enrico Guidi</p>
                </div>
                <div className="badge badge-outline">2022-2025</div>
              </div>
              <p className="mb-4">Esperienza imprenditoriale che mi ha insegnato l'importanza dell'innovazione e della visione a lungo termine.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Progetti Innovation:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <Link to="/case_study/Vanilla" className="link link-accent">Vanilla - Nightclub App</Link></li>
                    <li>• <Link to="/case_study/CaribeBay" className="link link-accent">Caribe Bay Booking System</Link></li>
                    <li>• <Link to="/case_study/Giunone" className="link link-accent">Terme di Giunone - Digital Ticketing</Link></li>
                  </ul>
                </div>
                {/* <div>
                  <h4 className="font-semibold mb-2">Competenze Acquisite:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Leadership tecnica</li>
                    <li>• Product management</li>
                    <li>• Visione imprenditoriale</li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>

          {/* Freelance */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                <div>
                  <h3 className="card-title font-Outfit text-xl">Libero Professionista</h3>
                  <p className="text-base-content/70">Autonomia e Crescita Personale</p>
                </div>
                <div className="badge badge-outline">2022-presente</div>
              </div>
              <p className="mb-4">Il culmine del mio percorso: la capacità di gestire progetti complessi in completa autonomia, 
              unendo tutte le competenze acquisite nel tempo.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Progetti Indipendenti:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <Link to="/case_study/Distress" className="link link-accent">Distress Simulator - Maritime Training</Link></li>
                    <li>• Consulenza AI per PMI</li>
                    <li>• Sviluppo full-stack custom</li>
                  </ul>
                </div>
                {/* <div>
                  <h4 className="font-semibold mb-2">Infinity Stones Collezionate:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Gestione clienti enterprise</li>
                    <li>• Architetture cloud-native</li>
                    <li>• Business development</li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Skills */}
      <section>
        <h2 className="text-3xl font-bold font-Outfit text-center mb-8">🗣️ Competenze Linguistiche</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-6 max-w-md">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body text-center p-6">
                <div className="text-3xl mb-2">🇮🇹</div>
                <h3 className="card-title text-lg justify-center font-Outfit">Italiano</h3>
                <p className="text-sm text-base-content/70">Madrelingua</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body text-center p-6">
                <div className="text-3xl mb-2">🇬🇧</div>
                <h3 className="card-title text-lg justify-center font-Outfit">Inglese</h3>
                <p className="text-sm text-base-content/70">Fluente (C1)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Commitment */}
      <section>
        <h2 className="text-3xl font-bold font-Outfit text-center mb-12">🤝 Impegno per la Comunità</h2>
        
        <div className="card bg-gradient-to-r from-accent/10 to-secondary/10 shadow-xl mb-8">
          <div className="card-body text-center">
            <h3 className="card-title justify-center font-Outfit text-2xl">Dare Indietro alla Società</h3>
            <p className="prose max-w-none">
              Credo fermamente nel valore del contribuire alla propria comunità. Attraverso progetti gratuiti, 
              volontariato e iniziative benefiche, cerco di utilizzare le mie competenze tecniche per fare la differenza.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Volunteer Work */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">🦁</div>
                <h3 className="card-title font-Outfit">Volontariato Leo/Lions</h3>
              </div>
              <p className="mb-4">
                Membro attivo dell'organizzazione internazionale Lions Club, contribuisco con competenze 
                tecniche e organizzative a iniziative benefiche locali e internazionali.
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Attività Principali:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Digitalizzazione processi associativi</li>
                    <li>• Supporto tecnologico per eventi benefici</li>
                    <li>• Coordinamento progetti di service</li>
                    <li>• Sviluppo soluzioni web per fundraising</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Valori Condivisi:</h4>
                  <div className="flex flex-wrap gap-2">
                    <div className="badge badge-outline">Servizio</div>
                    <div className="badge badge-outline">Solidarietà</div>
                    <div className="badge badge-outline">Innovazione</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Bono Projects */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">💝</div>
                <h3 className="card-title font-Outfit">Progetti Gratuiti</h3>
              </div>
              <p className="mb-4">
                Dedico parte del mio tempo a progetti pro bono per organizzazioni no-profit, 
                startup sociali e iniziative comunitarie che necessitano di supporto tecnologico.
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Tipi di Supporto:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Siti web per associazioni</li>
                    <li>• Sistemi di gestione eventi</li>
                    <li>• App per raccolta fondi</li>
                    <li>• Consulenza digitale gratuita</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Settori di Interesse:</h4>
                  <div className="flex flex-wrap gap-2">
                    <div className="badge badge-outline">Educazione</div>
                    <div className="badge badge-outline">Salute</div>
                    <div className="badge badge-outline">Ambiente</div>
                    <div className="badge badge-outline">Sociale</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-neutral text-neutral-content mt-8">
          <div className="card-body text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="card-title justify-center text-xl font-Outfit mb-2">Cerchi Supporto per un Progetto Sociale?</h3>
            <p className="mb-4">
              Se rappresenti un'organizzazione no-profit o hai un'idea che può fare la differenza nella comunità, 
              parliamone. Valuto con piacere collaborazioni pro bono per progetti con impatto sociale positivo.
            </p>
            <a href="#contact" className="btn btn-primary">Contattami</a>
          </div>
        </div>
      </section>

      {/* Moments Gallery */}
      <MomentsGallery moments={moments} />

      {/* Contact */}
      <section id="contact">
        <div className="card bg-base-200 shadow-xl max-w-md mx-auto">
          <form className="card-body"
            action="https://formie.io/form/2845024d-fc14-409d-aaa9-22dcb1e8d0c3"
            method="POST">
            <h2 className="card-title text-2xl font-Outfit self-center mb-4">📬 Iniziamo a Collaborare</h2>

            <input name="_redirect" type="hidden" value="https://dariofurlan.com/#form-success" />
            <input name="_redirect_error" type="hidden" value="https://dariofurlan.com/#form-error" />

            <div className="form-control">
              <label htmlFor="name" className="label">
                <span className="label-text">Nome</span>
              </label>
              <input className="input input-bordered" name="name" type="text" placeholder="Mario Rossi" required />
            </div>

            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input className="input input-bordered" name="email" type="email" placeholder="mario.rossi@example.com" required />
            </div>

            <div className="form-control">
              <label htmlFor="message" className="label">
                <span className="label-text">Messaggio</span>
              </label>
              <textarea
                name="message"
                placeholder="Raccontami del tuo progetto..."
                className="textarea textarea-bordered resize-none h-24" required />
            </div>
            <button className="btn btn-primary mt-4">Invia Messaggio</button>
          </form>
        </div>
      </section>
    </div>
  );
}