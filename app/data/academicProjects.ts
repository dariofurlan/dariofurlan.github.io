export interface AcademicProject {
  id: string;
  name: string;
  icon: string;
  url: string;
  description: string;
  tags: string[];
  category: string;
  year: number;
  course?: string;
  collaboration?: string;
  status: 'completed' | 'in-progress';
  featured?: boolean;
}

export const academicProjects: AcademicProject[] = [
  {
    id: 'privacy-vision-2025',
    name: 'Privacy-Preserving Vision',
    icon: '🔒',
    url: '/project/PrivacyVision2025',
    description: 'Depth-only image classification for privacy-sensitive computer vision applications using standard CNNs, achieving 92% accuracy on real data.',
    tags: ['Computer Vision', 'Privacy-Preserving', 'Deep Learning', 'CNN', 'Healthcare'],
    category: 'Computer Vision & AI',
    year: 2025,
    course: 'Vision and Cognitive Systems',
    collaboration: 'Dawit Andargachew',
    status: 'completed',
    featured: true
  },
  {
    id: 'dnabert-2025',
    name: 'DNABERT Research',
    icon: '🧬',
    url: '/project/DNABERT2025',
    description: 'Reproduzione e analisi di modelli Transformer per predizione di promoter genomici, combinando NLP e Bioinformatica con validazione scientifica.',
    tags: ['Deep Learning', 'Bioinformatics', 'Transformers', 'NLP', 'Genomics'],
    category: 'Machine Learning & Bioinformatics',
    year: 2025,
    course: 'Machine Learning',
    collaboration: 'Nicolò Raccichini',
    status: 'completed',
    featured: true
  },
  {
    id: 'barber-scissorhands-2022',
    name: 'Barber Scissorhands',
    icon: '✂️',
    url: '/project/Scissorhands2022',
    description: 'Piattaforma web responsive per prenotazione servizi di barbiere con focus su accessibilità, mobile-first design e user experience.',
    tags: ['Web Development', 'Accessibility', 'Mobile-First', 'Team Project', 'UX/UI'],
    category: 'Web Technologies',
    year: 2022,
    course: 'Tecnologie Web',
    collaboration: 'Team Development',
    status: 'completed',
    featured: false
  },
  {
    id: 'wecare-2020',
    name: 'WeCare Database',
    icon: '🗄️',
    url: '/project/BaseDati2020',
    description: 'Progettazione e implementazione completa di database per organizzazione filantropica con metodologia avanzata e ottimizzazione performance.',
    tags: ['Database Design', 'SQL', 'Optimization', 'Methodology', 'Data Modeling'],
    category: 'Database Systems',
    year: 2020,
    course: 'Basi di Dati',
    status: 'completed',
    featured: false
  },
  {
    id: 'aquarius-pao-2020',
    name: 'Aquarius Ecosystem',
    icon: '🌊',
    url: '/project/Pao2020',
    description: 'Simulatore ecosistema marino basato su algoritmi Boids per apprendimento innovativo della programmazione ad oggetti.',
    tags: ['OOP', 'Simulation', 'Boids Algorithm', 'Java', 'Educational'],
    category: 'Object-Oriented Programming',
    year: 2020,
    course: 'Programmazione ad Oggetti',
    status: 'completed',
    featured: false
  },
  {
    id: 'erasmus-cork-2018',
    name: 'Erasmus+ Cork Experience',
    icon: '🇮🇪',
    url: '/project/ErasmusCork2018',
    description: 'Esperienza internazionale con sviluppo libreria Python per protocollo Modbus industriale, combinando crescita linguistica e competenze IoT.',
    tags: ['Modbus Protocol', 'Python', 'IoT', 'International', 'Low-Level'],
    category: 'International Experience',
    year: 2018,
    course: 'Erasmus+ Program',
    status: 'completed',
    featured: true
  }
];

export const academicCategories = Array.from(new Set(academicProjects.map(p => p.category)));

export const academicStats = {
  totalProjects: academicProjects.length,
  totalTechnologies: Array.from(new Set(academicProjects.flatMap(p => p.tags))).length,
  totalCategories: academicCategories.length,
  featuredProjects: academicProjects.filter(p => p.featured).length,
  totalYears: new Date().getFullYear() - Math.min(...academicProjects.map(p => p.year)) + 1,
  collaborations: academicProjects.filter(p => p.collaboration).length
};