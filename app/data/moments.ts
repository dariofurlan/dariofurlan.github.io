export interface Moment {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  year: number;
  image: string;
  alt: string;
  badgeColor: 'primary' | 'secondary' | 'accent' | 'warning' | 'success' | 'info';
}

export const moments: Moment[] = [
  {
    id: 'chiusura-vanilla',
    title: 'Chiusura del primo anno al Vanilla',
    description: 'Un momento di celebrazione e riflessione sul primo anno trascorso al Vanilla, un locale che ha segnato l\'inizio di un percorso significativo.',
    date: 'Settembre 2022',
    location: 'Jesolo, Italia',
    year: 2022,
    image: '/moments/chiusura-vanilla.jpeg',
    alt: 'Chiusura del primo anno al Vanilla',
    badgeColor: 'primary'
  },
  {
    id: "mongodb-local-2023",
    title: "MongoDB Local 2023",
    description: "Partecipazione a MongoDB Local 2023, un'importante conferenza per sviluppatori e professionisti del settore.",
    date: "Giugno 2023",
    location: "Milano, Italia",
    year: 2023,
    image: "/moments/mongodb-local-2023.jpeg",
    alt: "MongoDB Local 2023",
    badgeColor: "secondary"
  },
  {
    id: "parchi-divertimento-2024-1",
    title: "Meeting Parchi Divertimenti 2024 - Giorno 1",
    description: "Espositore presso il meeting dei parchi divertimenti, presentando le ultime novità e tecnologie del settore.",
    date: "Ottobre 2024",
    location: "Gardaland, Italia",
    year: 2024,
    image: "/moments/parchi-divertimento.jpeg",
    alt: "Parco Divertimenti 2024 - Giorno 1",
    badgeColor: "accent"
  },
  {
    id: "parchi-divertimento-2024-2",
    title: "Meeting Parchi Divertimenti 2024 - Giorno 2",
    description: "Continuazione dell'esperienza come espositore al meeting dei parchi divertimenti, con focus su innovazioni e collaborazioni.",
    date: "Ottobre 2024",
    location: "Gardaland, Italia",
    year: 2024,
    image: "/moments/parchi-divertimento-prezzemolo.jpeg",
    alt: "Parco Divertimenti 2024 - Giorno 2",
    badgeColor: "warning"
  },
  {
    id: "helpdesk-vanilla-2022",
    title: "Helpdesk al Vanilla",
    description: "Attività di supporto e assistenza presso il Vanilla, contribuendo a migliorare l'esperienza degli utenti.",
    date: "Giugno 2022",
    location: "Jesolo, Italia",
    year: 2022,
    image: "/moments/help-desk-vanilla.jpeg",
    alt: "Helpdesk al Vanilla",
    badgeColor: "info"
  }
];

moments.sort((a, b) => {
  return b.year - a.year || new Date(b.date).getTime() - new Date(a.date).getTime();
});