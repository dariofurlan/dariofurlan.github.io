import type { MetaFunction } from "react-router";
import { ProjectsOverview } from "~/components/ProjectsOverview";
import { projects, projectCategories, projectStats } from "~/data/projects";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio Progetti | Dario Furlan - Sviluppatore Full-Stack & AI Specialist" },
    { name: "description", content: "Esplora il portfolio completo di Dario Furlan: progetti innovativi in AI, sviluppo mobile, blockchain, sistemi enterprise e molto altro. Ogni progetto rappresenta una sfida tecnica unica e una crescita professionale." },
  ];
};

export default function CaseStudies() {
  return (
    <ProjectsOverview 
      projects={projects}
      categories={projectCategories}
      stats={projectStats}
    />
  );
}