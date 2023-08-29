const translation = {

    booking_home: {
        
        
        generic: {
            register: "Registrati",
            next: "Avanti",
            book_init: "Prenota Attrazione",
            restricted_area: "Area Riservata",

        },
        anagr: {
            name: "Nome",
            surname: "Cognome",
        },
        phone: {
            phone: "Telefono",
        },
        email: {
            email: "Email",
        },

        age: {
            age: "Sono maggiorenne (+18)",
        },
        
        privacy: {
            title1: "Dichiaro di aver letto ed accettato l' ",
            inf: "Informativa sulla Privacy.",  
        },

        marketing: {
            title1: "Dichiaro di aver letto ed accettato l' ",
            inf: "Informativa sul trattamento dei dati per finalità di marketing.",
        },
    
    },

    booking_status: {
        generics : {
            next: "Avanti",
            modify: "Modifica",
            dismiss: "Annulla",
            confirm: "Conferma",
        },
        pending: {
            attraction: "Scegli Attrazione",
            booked_for: "Orario Prenotazione: ",
            available: "disponibile",
            no_attractions: "Nessuna attrazione disponibile al momento.",
            opening_hours: "Ricordiamo che il parco è aperto dalle 10:00 alle 18:00.",
        },
        pending_review: {
            summary: "Riepilogo Prenotazione",
            booking_time: "Orario Prenotazione: ",
        },
        confirmed_review: {
            confirmed: "Prenotazione Confermata",
            code: "Codice prenotazione: ",
            reminder: "È possibile effettuare una prenotazione alla volta.",
        },
        expired: {
            booking_expired: "Booking Scaduto",
            description: "Hai terminato il tempo a disposizione per completare la prenotazione. Clicca sul pulsante per ripetere la prenotazione.",
            repeat: "Ripeti Prenotazione",
        },

    },

} as const;

export default translation;