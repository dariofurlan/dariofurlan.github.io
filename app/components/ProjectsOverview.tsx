import { Link } from "react-router";
import type { Project } from "~/data/projects";

interface ProjectsOverviewProps {
  projects: Project[];
  categories: string[];
  stats: {
    totalProjects: number;
    totalTechnologies: number;
    totalCategories: number;
    featuredProjects: number;
  };
}

interface ProjectCardProps {
  project: Project;
}

// Helper function to get gradient colors based on project
function getProjectGradient(projectId: string) {
  const gradients = {
    'pythia': 'from-purple-500/10 to-pink-500/10',
    'vanilla-club': 'from-purple-500/10 to-pink-500/10', 
    'docfiler': 'from-green-500/10 to-blue-500/10',
    'terme-di-giunone': 'from-blue-500/10 to-teal-500/10',
    'caribe-bay': 'from-cyan-500/10 to-blue-500/10',
    'distress-simulator': 'from-orange-500/10 to-red-500/10'
  };
  return gradients[projectId as keyof typeof gradients] || 'from-gray-500/10 to-slate-500/10';
}

function ProjectCard({ project }: ProjectCardProps) {
  const gradientClass = getProjectGradient(project.id);
  
  return (
    <Link 
      to={project.url}
      className="group block"
    >
      <div className={`card bg-gradient-to-r ${gradientClass} shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]`}>
        <div className="card-body">
          <div className="flex items-start gap-4 mb-4">
            <div className="avatar">
              <div className="w-16 h-16 rounded-2xl">
                <img 
                  src={project.icon} 
                  alt={project.name} 
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="card-title font-Outfit text-xl group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                {project.featured && (
                  <div className="badge badge-primary badge-sm">Featured</div>
                )}
              </div>
              <p className="text-sm text-base-content/70 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map(tag => (
              <div key={tag} className="badge badge-outline badge-sm">
                {tag}
              </div>
            ))}
          </div>
          
          <div className="card-actions justify-end mt-4">
            <div className="btn btn-primary btn-sm group-hover:btn-accent transition-colors">
              Scopri di più →
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

interface ProjectsByCategoryProps {
  category: string;
  projects: Project[];
}

function ProjectsByCategory({ category, projects }: ProjectsByCategoryProps) {
  const categoryProjects = projects.filter(p => p.category === category);
  
  if (categoryProjects.length === 0) return null;

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-Outfit mb-4">{category}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {categoryProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export function ProjectsOverview({ projects, categories, stats }: ProjectsOverviewProps) {
  return (
    <div className="space-y-16 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold font-Outfit">Portfolio Progetti</h1>
          <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
            Una raccolta di progetti che rappresentano il mio percorso di crescita professionale. 
            Ogni progetto è un'infinity stone 💎 che ha arricchito le mie competenze.
          </p>
        </div>
        
        <div className="stats stats-horizontal shadow-xl bg-base-200">
          <div className="stat">
            <div className="stat-title">Progetti Completati</div>
            <div className="stat-value text-primary">{stats.totalProjects}</div>
            <div className="stat-desc">Dal 2019 ad oggi</div>
          </div>
          <div className="stat">
            <div className="stat-title">Tecnologie Diverse</div>
            <div className="stat-value text-secondary">{stats.totalTechnologies}+</div>
            <div className="stat-desc">Stack tecnologici utilizzati</div>
          </div>
          <div className="stat">
            <div className="stat-title">Settori</div>
            <div className="stat-value text-accent">{stats.totalCategories}</div>
            <div className="stat-desc">Diversi ambiti di applicazione</div>
          </div>
        </div>
      </section>

      {/* Projects by Category */}
      {categories.map(category => (
        <ProjectsByCategory 
          key={category} 
          category={category} 
          projects={projects} 
        />
      ))}

      {/* Call to Action */}
      <section className="card bg-gradient-to-r from-primary/10 to-secondary/10 shadow-xl">
        <div className="card-body text-center">
          <h2 className="card-title justify-center font-Outfit text-3xl mb-4">
            Hai un progetto in mente?
          </h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto mb-6">
            Sono sempre entusiasta di affrontare nuove sfide tecnologiche e creare soluzioni innovative. 
            Ogni progetto è un'opportunità per crescere e imparare qualcosa di nuovo.
          </p>
          <div className="card-actions justify-center">
            <a href="/#contact" className="btn btn-primary btn-lg">
              Iniziamo a Collaborare
            </a>
            <a href="/" className="btn btn-outline btn-lg">
              Torna alla Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}