import type { MetaFunction } from "@remix-run/cloudflare";
import Contact from "~/section/Contact";
import Me from "~/section/Me";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Me />
      <div className='divider'></div>
      {/* <Projects /> */}
      {/* <Services /> */}
      <div className='divider'></div>
      <Contact />
    </>
  );
}