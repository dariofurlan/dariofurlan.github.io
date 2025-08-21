import { useState } from "react";
import type { AcademicProject } from "~/data/academicProjects";

interface AcademicProjectsOverviewProps {
  projects: AcademicProject[];
  categories: string[];
  stats: {
    totalProjects: number;
    totalTechnologies: number;
    totalCategories: number;
    featuredProjects: number;
    totalYears: number;
    collaborations: number;
  };
}

export function AcademicProjectsOverview({ projects, categories, stats }: AcademicProjectsOverviewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = !selectedCategory || project.category === selectedCategory;
    const matchesYear = !selectedYear || project.year === selectedYear;
    return matchesCategory && matchesYear;
  });

  const years = Array.from(new Set(projects.map(p => p.year))).sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="hero bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl shadow-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl">
                🎓
              </div>
            </div>
            <h1 className="text-5xl font-bold font-Outfit mb-6">
              Portfolio Progetti Accademici
            </h1>
            <p className="text-xl text-base-content/80 max-w-2xl mx-auto mb-8">
              Un viaggio attraverso i progetti universitari che hanno definito il mio percorso formativo: 
              dalla programmazione ad oggetti all'intelligenza artificiale, dalle esperienze internazionali 
              alla ricerca scientifica.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <div className="badge badge-outline badge-lg">Università di Padova</div>
              <div className="badge badge-outline badge-lg">Ricerca Scientifica</div>
              <div className="badge badge-outline badge-lg">Collaborazioni Internazionali</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <div className="stats stats-vertical lg:stats-horizontal shadow-xl bg-base-100 w-full">
            <div className="stat">
              <div className="stat-figure text-primary">
                <div className="text-4xl">📚</div>
              </div>
              <div className="stat-title">Progetti Accademici</div>
              <div className="stat-value text-primary">{stats.totalProjects}</div>
              <div className="stat-desc">Dal 2018 al 2025</div>
            </div>
            
            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="text-4xl">🏷️</div>
              </div>
              <div className="stat-title">Tecnologie</div>
              <div className="stat-value text-secondary">{stats.totalTechnologies}</div>
              <div className="stat-desc">Stack diversificati</div>
            </div>
            
            <div className="stat">
              <div className="stat-figure text-accent">
                <div className="text-4xl">🎯</div>
              </div>
              <div className="stat-title">Discipline</div>
              <div className="stat-value text-accent">{stats.totalCategories}</div>
              <div className="stat-desc">Ambiti di studio</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-info">
                <div className="text-4xl">🤝</div>
              </div>
              <div className="stat-title">Collaborazioni</div>
              <div className="stat-value text-info">{stats.collaborations}</div>
              <div className="stat-desc">Team projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Filters */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold font-Outfit text-center mb-8">Esplora i Progetti</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Filtra per Disciplina</span>
              </label>
              <select 
                className="select select-bordered w-full max-w-xs"
                value={selectedCategory || ""}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
              >
                <option value="">Tutte le Discipline</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Filtra per Anno</span>
              </label>
              <select 
                className="select select-bordered w-full max-w-xs"
                value={selectedYear || ""}
                onChange={(e) => setSelectedYear(e.target.value ? parseInt(e.target.value) : null)}
              >
                <option value="">Tutti gli Anni</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          {(selectedCategory || selectedYear) && (
            <div className="text-center">
              <button 
                className="btn btn-ghost btn-sm"
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedYear(null);
                }}
              >
                Rimuovi Filtri
              </button>
            </div>
          )}
        </div>

        {/* Academic Context Alert */}
        <div className="alert alert-info mb-12">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🎓</div>
            <div>
              <h3 className="font-semibold">Contesto Accademico</h3>
              <p className="text-sm">
                Questi progetti rappresentano il percorso di crescita durante gli studi universitari, 
                dalle basi della programmazione alle frontiere dell'intelligenza artificiale. 
                Ogni progetto ha contribuito a sviluppare competenze specifiche e mentalità scientifica.
              </p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="card-body">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{project.icon}</div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="badge badge-outline">{project.year}</div>
                    {project.featured && <div className="badge badge-primary">Featured</div>}
                  </div>
                </div>
                
                <h3 className="card-title text-xl font-bold font-Outfit mb-2">
                  {project.name}
                </h3>
                
                <p className="text-sm text-base-content/70 mb-2">
                  <strong>{project.course}</strong>
                  {project.collaboration && (
                    <span className="block text-xs mt-1">
                      🤝 Con: {project.collaboration}
                    </span>
                  )}
                </p>
                
                <p className="text-sm text-base-content/90 mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <div key={tag} className="badge badge-outline badge-sm">
                      {tag}
                    </div>
                  ))}
                  {project.tags.length > 3 && (
                    <div className="badge badge-ghost badge-sm">
                      +{project.tags.length - 3}
                    </div>
                  )}
                </div>
                
                <div className="card-actions justify-between items-center">
                  <div className="badge badge-secondary badge-sm">
                    {project.category}
                  </div>
                  <a 
                    href={project.url}
                    className="btn btn-primary btn-sm"
                  >
                    Scopri di Più
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">Nessun progetto trovato</h3>
            <p className="text-base-content/70">
              Prova a modificare i filtri per visualizzare più progetti.
            </p>
          </div>
        )}
      </div>

      {/* Academic Journey Timeline */}
      <div className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-Outfit text-center mb-12">Percorso Formativo</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="steps steps-vertical lg:steps-horizontal w-full">
              <div className="step step-primary">
                <div className="text-center">
                  <div className="text-2xl mb-2">🌱</div>
                  <h3 className="font-semibold">2018-2020</h3>
                  <p className="text-sm text-base-content/70">Basi Informatiche</p>
                  <p className="text-xs">OOP, Database, Erasmus+</p>
                </div>
              </div>
              <div className="step step-primary">
                <div className="text-center">
                  <div className="text-2xl mb-2">🚀</div>
                  <h3 className="font-semibold">2021-2022</h3>
                  <p className="text-sm text-base-content/70">Tecnologie Web</p>
                  <p className="text-xs">Full-stack, UX/UI, Team</p>
                </div>
              </div>
              <div className="step step-primary">
                <div className="text-center">
                  <div className="text-2xl mb-2">🧠</div>
                  <h3 className="font-semibold">2024-2025</h3>
                  <p className="text-sm text-base-content/70">AI & Research</p>
                  <p className="text-xs">ML, Vision, Bioinformatics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-Outfit mb-4">
            Interessato ai Dettagli Tecnici?
          </h2>
          <p className="text-xl text-base-content/80 mb-8 max-w-2xl mx-auto">
            Ogni progetto rappresenta un approfondimento tecnico specifico. 
            Esplora i dettagli implementativi, le sfide affrontate e i risultati ottenuti.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/case_study" className="btn btn-primary">
              Progetti Professionali
            </a>
            <a href="/services" className="btn btn-outline">
              I Miei Servizi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}