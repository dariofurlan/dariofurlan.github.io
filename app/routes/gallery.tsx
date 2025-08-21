import type { MetaFunction } from "react-router";
import { GalleryPage } from "~/components/GalleryPage";
import { moments } from "~/data/moments";

export const meta: MetaFunction = () => {
  return [
    { title: "Galleria Momenti | Dario Furlan - Eventi, Conferenze e Collaborazioni" },
    { 
      name: "description", 
      content: "Esplora la galleria fotografica dei momenti più significativi del percorso professionale di Dario Furlan: eventi tech, conferenze, hackathon, collaborazioni e milestone professionali dal 2022 ad oggi." 
    },
    {
      name: "keywords",
      content: "galleria fotografica, eventi tech, MongoDB Local, parchi divertimenti, hackathon, Vanilla Club, conferenze tecnologiche, momenti professionali, networking, crescita professionale"
    },
    {
      property: "og:title",
      content: "Galleria Momenti | Dario Furlan"
    },
    {
      property: "og:description",
      content: "Una raccolta fotografica dei momenti più significativi del percorso professionale: eventi, conferenze, collaborazioni e milestone."
    },
    {
      property: "og:image",
      content: "https://dariofurlan.it/moments/mongodb-local-2023.jpeg"
    },
    {
      property: "og:type",
      content: "website"
    },
    {
      name: "twitter:card",
      content: "summary_large_image"
    },
    {
      name: "twitter:title",
      content: "Galleria Momenti | Dario Furlan"
    },
    {
      name: "twitter:description",
      content: "Una raccolta fotografica dei momenti più significativi del percorso professionale"
    },
    {
      name: "twitter:image",
      content: "https://dariofurlan.it/moments/mongodb-local-2023.jpeg"
    }
  ];
};

export default function Gallery() {
  return <GalleryPage moments={moments} />;
}