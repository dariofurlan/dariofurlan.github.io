

export default function Me() {
    return <div>
        <h2 className="text-3xl font-Outfit py-4" id="me">Chi sono</h2>
        <div className="flex flex-row flex-wrap items-center justify-center">
            <div className="avatar mr-2">
                <div className="h-full w-64 rounded-xl">
                    <img src="/profile.jpg" />
                </div>
            </div>
            <div className="flex-1 min-w-80 px-2">
                <p className="py-2 text-xl">Dario Furlan</p>
                <p className="prose py-2">
                    Nato nel 2000, vivo e lavoro a Padova come sviluppatore full-stack freelance, collaborando principalmente con piccole e medie imprese. Sono laureato in Informatica e programmo professionalmente dal 2018, anche se la mia passione per il codice è iniziata molto prima, all'età di 15 anni.
                </p>
                <p className="prose py-2">
                    Ho un'esperienza completa nello sviluppo software, dal backend al mobile, dal web allo sviluppo su serverless, passando per la gestione di database SQL e noSQL. Mi piace affrontare ogni incarico con un approccio perfezionista e creativo, cercando soluzioni eleganti ed efficienti. Un professore ha definito il mio modo di scrivere codice come "estroso", e forse non aveva tutti i torti.
                </p>
            </div>
        </div>

    </div>
}