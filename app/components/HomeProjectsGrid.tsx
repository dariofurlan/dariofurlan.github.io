import { Link } from "react-router";
import { projects, type Project } from "~/data/projects";

export default function HomeProjectsGrid() {
    // Show only featured projects (first 3)
    const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

    return (
        <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
                {featuredProjects.map((project: Project) => (
                    <Link 
                        key={project.url}
                        to={project.url}
                        className="group block"
                    >
                        <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
                            <div className="card-body p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="avatar">
                                        <div className="w-12 h-12 rounded-xl">
                                            <img 
                                                src={project.icon} 
                                                alt={project.name} 
                                                className="w-full h-full object-cover rounded-xl shadow-lg"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="card-title font-Outfit text-lg group-hover:text-primary transition-colors">
                                        {project.name}
                                    </h3>
                                </div>
                                
                                <div className="flex flex-wrap gap-1 mb-3">
                                    {project.tags.slice(0, 2).map((tag: string) => (
                                        <div key={tag} className="badge badge-outline badge-xs">
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="text-xs text-base-content/60 group-hover:text-primary transition-colors">
                                    Scopri di più →
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            
            <div className="text-center">
                <Link to="/case_study" className="btn btn-outline btn-wide">
                    Vedi Tutti i Progetti
                </Link>
            </div>
        </div>
    );
}