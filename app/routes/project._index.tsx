import type { MetaFunction } from "react-router";
import { AcademicProjectsOverview } from "~/components/AcademicProjectsOverview";
import { academicProjects, academicCategories, academicStats } from "~/data/academicProjects";

export const meta: MetaFunction = () => {
  return [
    { title: "Progetti Accademici | Dario Furlan - Percorso Formativo Universitario" },
    { 
      name: "description", 
      content: "Esplora il portfolio dei progetti accademici di Dario Furlan: dal machine learning alla computer vision, dalla bioinformatica alle esperienze internazionali. Un viaggio formativo attraverso l'innovazione tecnologica universitaria." 
    },
    {
      name: "keywords",
      content: "progetti universitari, computer vision, machine learning, bioinformatics, DNABERT, privacy-preserving AI, database design, programmazione oggetti, Erasmus, ricerca scientifica"
    }
  ];
};

export default function ProjectsIndex() {
  return (
    <AcademicProjectsOverview 
      projects={academicProjects}
      categories={academicCategories}
      stats={academicStats}
    />
  );
}