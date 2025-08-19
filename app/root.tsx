import type { LinksFunction } from "react-router";
import { Links, Meta, NavLink, Outlet, Scripts, ScrollRestoration } from "react-router";
import EmailIcon from "./icons/EmailIcon";
import GithubIcon from "./icons/GithubIcon";
import GitlabIcon from "./icons/GitlabIcon";
import "./style.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script defer data-domain="dariofurlan.com" src="https://plausible.io/js/script.outbound-links.js"></script>
      </head>
      <body>
        {children}
        <Scripts />
        <ScrollRestoration />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return <>
    <h1>Caricamento</h1>
  </>
}

export default function App() {
  return <>
    <header className="p-2">
      <div className="navbar bg-neutral text-neutral-content rounded-box font-Outfit">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl flex flex-row">
            Dario Furlan
            <svg className="w-5" viewBox="0 0 18.5 33.434" xmlns="http://www.w3.org/2000/svg">
              <path d="m0.00001,33.434l0,-4.5l18,0l0,4.5l-18,0z" >
                <animate
                  attributeType="XML"
                  attributeName="fill"
                  values={`#d7dde4ff;#d7dde400;#d7dde4ff`}
                  dur="1s"
                  calcMode="discrete"
                  repeatCount="indefinite" />
              </path>
            </svg >
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/#contact">
                <EmailIcon className="h-5 w-5" />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <main className="lg:container lg:mx-auto p-4">
      <Outlet />
    </main>
    <footer className="footer bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current">
          <path
            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p>Copyright © {new Date().getFullYear()} Dario Furlan - All right reserved</p>
      </aside>
      <div className="grid-flow-col items-center">
        <table>
          <tbody>
            <tr>
              <th className="text-right">Partita IVA: </th>
              <td className="px-2 font-mono">IT05491440284</td>
            </tr>
            <tr>
              <th className="text-right">SDI: </th>
              <td className="px-2 font-mono">M5UXCR1</td>
            </tr>
            <tr>
              <th className="text-right">PEC: </th>
              <td className="px-2 font-mono">furlandario@pec.it</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://github.com/dariofurlan/">
          <GithubIcon className="h-7 w-7 text-neutral-content" />
        </a>
        <a href="https://gitlab.com/dariofurlan">
          <GitlabIcon className="h-7 w-7 text-neutral-content" />
        </a>
      </nav>
    </footer>
  </>;
}
