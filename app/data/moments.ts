export interface Moment {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  year: number;
  image: string;
  thumbnail?: string;
  alt: string;
  badgeColor: 'primary' | 'secondary' | 'accent' | 'warning' | 'success' | 'info';
}

export const moments: Moment[] = [
  {
    id: 'chiusura-vanilla',
    title: 'Chiusura del primo anno al Vanilla',
    description: 'Un momento di celebrazione e riflessione sul primo anno trascorso al Vanilla, un locale che ha segnato l\'inizio di un percorso significativo.',
    date: new Date('2022-09-03'),
    location: 'Jesolo, Italia',
    year: 2022,
    image: '/moments/chiusura-vanilla.jpeg',
    thumbnail: '/moments/chiusura-vanilla-thumbnail.jpeg',
    alt: 'Chiusura del primo anno al Vanilla',
    badgeColor: 'primary'
  },
  {
    id: "mongodb-local-2023",
    title: "MongoDB Local 2023",
    description: "Partecipazione a MongoDB Local 2023, un'importante conferenza per sviluppatori e professionisti del settore.",
    date: new Date('2023-10-04'),
    location: "Milano, Italia",
    year: 2023,
    image: "/moments/mongodb-local-2023.jpeg",
    thumbnail: "/moments/mongodb-local-2023-thumbnail.jpeg",
    alt: "MongoDB Local 2023",
    badgeColor: "secondary"
  },
  {
    id: "parchi-divertimento-2024-1",
    title: "Meeting Parchi Divertimenti 2024 - Giorno 1",
    description: "Espositore presso il meeting dei parchi divertimenti, presentando le ultime novità e tecnologie del settore.",
    date: new Date("2024-10-24"),
    location: "Gardaland, Italia",
    year: 2024,
    image: "/moments/parchi-divertimento.jpeg",
    thumbnail: "/moments/parchi-divertimento-thumbnail.jpeg",
    alt: "Parco Divertimenti 2024 - Giorno 1",
    badgeColor: "accent"
  },
  {
    id: "parchi-divertimento-2024-2",
    title: "Meeting Parchi Divertimenti 2024 - Giorno 2",
    description: "Continuazione dell'esperienza come espositore al meeting dei parchi divertimenti, con focus su innovazioni e collaborazioni.",
    date: new Date("2024-10-25"),
    location: "Gardaland, Italia",
    year: 2024,
    image: "/moments/parchi-divertimento-prezzemolo.jpeg",
    thumbnail: "/moments/parchi-divertimento-prezzemolo-thumbnail.jpeg",
    alt: "Parco Divertimenti 2024 - Giorno 2",
    badgeColor: "warning"
  },
  {
    id: "helpdesk-vanilla-2022",
    title: "Helpdesk al Vanilla",
    description: "Attività di supporto e assistenza presso il Vanilla, contribuendo a migliorare l'esperienza degli utenti.",
    date: new Date("2022-08-15"),
    location: "Jesolo, Italia",
    year: 2022,
    image: "/moments/help-desk-vanilla.jpeg",
    thumbnail: "/moments/help-desk-vanilla-thumbnail.jpeg",
    alt: "Helpdesk al Vanilla",
    badgeColor: "info"
  },
  {
    id: "hackaton-2024-ondasrl",
    title: "Hackaton Onda 2024",
    description: "Partecipazione all'Hackaton organizzato da Onda S.R.L. 2024, un evento dedicato all'innovazione e alla tecnologia.",
    date: new Date("2024-11-15"),
    location: "Villa Ca' Rezzonico, Bassano del Grappa Italia",
    year: 2024,
    image: "/moments/hackaton-2024-onda.jpeg",
    thumbnail: "/moments/hackaton-2024-onda-thumbnail.jpeg",
    alt: "Hackaton Onda 2024",
    badgeColor: "success"
  }
];

moments.sort((a, b) => {
  return b.date.getTime() - a.date.getTime();
});