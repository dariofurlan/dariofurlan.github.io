export interface Project {
  id: string;
  name: string;
  icon: string;
  url: string;
  description: string;
  tags: string[];
  category: string;
  year?: number;
  status?: 'completed' | 'in-progress' | 'archived';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'pythia',
    name: 'PythIA',
    icon: '/icon/pythia_lg.png',
    url: '/case_study/PythIA',
    description: 'Assistente AI per call center che analizza conversazioni in tempo reale, suggerendo consigli agli operatori basati sul sentiment dell\'utente.',
    tags: ['AI', 'Machine Learning', 'Enterprise', 'Real-time'],
    category: 'AI & Machine Learning',
    year: 2023,
    status: 'completed',
    featured: true
  },
  {
    id: 'vanilla-club',
    name: 'Vanilla Club',
    icon: '/icon/vanilla_lg.png',
    url: '/case_study/Vanilla',
    description: 'Ecosistema digitale completo per discoteche: QR dinamici, pagamenti contactless, sicurezza avanzata e analytics in tempo reale.',
    tags: ['Mobile App', 'QR Tech', 'Payments', 'Security'],
    category: 'Digital Innovation',
    year: 2023,
    status: 'completed',
    featured: true
  },
  {
    id: 'docfiler',
    name: 'DocFiler',
    icon: '/icon/docfiler_lg.png',
    url: '/case_study/Docfiler',
    description: 'Portale enterprise con autenticazione SPID e certificazione blockchain per la gestione documentale sicura e tracciabile.',
    tags: ['SPID', 'Blockchain', 'Enterprise', 'Document Management'],
    category: 'Enterprise Solutions',
    year: 2024,
    status: 'completed',
    featured: true
  },
  {
    id: 'caribe-bay',
    name: 'Caribe Bay Booking',
    icon: '/icon/caribebay_lg.png',
    url: '/case_study/CaribeBay',
    description: 'Sistema di code virtuali per parco acquatico che permette di prenotare l\'accesso alle attrazioni eliminando attese fisiche.',
    tags: ['Mobile App', 'Booking System', 'Guest Experience'],
    category: 'Digital Innovation',
    year: 2022,
    status: 'completed',
    featured: false
  },
  {
    id: 'terme-di-giunone',
    name: 'Terme di Giunone',
    icon: '/icon/terme-giunone_lg.png',
    url: '/case_study/Giunone',
    description: 'Sistema di bigliettazione digitale con QR dinamici per terme: gestione abbonamenti, anti-contraffazione e accessi contactless per il settore termale.',
    tags: ['QR Dynamic', 'Digital Ticketing', 'Wellness', 'Anti-counterfeiting'],
    category: 'Digital Innovation',
    year: 2024,
    status: 'completed',
    featured: true
  },
  {
    id: 'distress-simulator',
    name: 'Distress Simulator',
    icon: '/icon/distress_lg.png',
    url: '/case_study/Distress',
    description: 'Simulatore VHF per addestramento marittimo che democratizza l\'accesso alla formazione nautica senza hardware costoso.',
    tags: ['Education', 'Maritime', 'Simulation', 'Accessibility'],
    category: 'Educational Technology',
    year: 2021,
    status: 'completed',
    featured: false
  }
];

export const projectCategories = Array.from(new Set(projects.map(p => p.category)));

export const projectStats = {
  totalProjects: projects.length,
  totalTechnologies: Array.from(new Set(projects.flatMap(p => p.tags))).length,
  totalCategories: projectCategories.length,
  featuredProjects: projects.filter(p => p.featured).length
};