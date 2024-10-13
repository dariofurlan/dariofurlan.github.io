import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Dario Furlan" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <h2 className="text-3xl font-Outfit py-4" id="me">Chi sono</h2>
      <div className="flex flex-row flex-wrap items-center justify-center">
        <div className="avatar mr-2">
          <div className="h-full rounded-full w-64">
            <img src="/profile_3.jpg" alt="Dario Furlan" />
          </div>
        </div>
        <div className="flex-1 min-w-80 px-2">
          <p className="prose py-2">
            Nato nel 2000, vivo e lavoro a Padova come sviluppatore full-stack freelance, collaborando principalmente con piccole e medie imprese. Sono laureato in Informatica e programmo professionalmente dal 2018, anche se la mia passione per il codice è iniziata molto prima, all&apos;età di 15 anni.
          </p>
          <p className="prose py-2">
            Ho un&apos;esperienza completa nello sviluppo software, dal backend al mobile, dal web allo sviluppo su serverless, passando per la gestione di database SQL e noSQL. Mi piace affrontare ogni incarico con un approccio perfezionista e creativo, cercando soluzioni eleganti ed efficienti. Un professore ha definito il mio modo di scrivere codice come &quot;estroso&quot;, e forse non aveva tutti i torti.
          </p>
        </div>
      </div>
      <div className="mx-auto card bg-base-200 w-full max-w-sm shrink-0 shadow-gray-400 shadow-xl my-8">
        <form className="card-body"
          action="https://formie.io/form/2845024d-fc14-409d-aaa9-22dcb1e8d0c3"
          method="POST">
          <h2 id="contact" className="card-title text-3xl font-Outfit self-center">Contattami</h2>

          <input name="_redirect" type="hidden" value="https://dariofurlan.com/#form-success" />

          <input name="_redirect_error" type="hidden" value="https://dariofurlan.com/#form-error" />

          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text">Nome</span>
            </label>
            <input className="input input-bordered grow" name="name" type="text" placeholder="Mario Rossi" required />
          </div>

          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input className="input input-bordered grow" name="email" type="email" placeholder="mario.rossi@example.com" required />
          </div>

          <div className="form-control">
            <label htmlFor="message" className="label">
              <span className="label-text">Messaggio</span>
            </label>
            <textarea
              name="message"
              placeholder="Messaggio"
              className="textarea textarea-bordered resize-none textarea-sm w-full max-w-xs" required />
          </div>
          <button className="mt-4 btn btn-primary">Conferma</button>
        </form>
      </div>
    </>
  );
}