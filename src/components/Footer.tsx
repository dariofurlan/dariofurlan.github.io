

export default function Footer() {
  return <footer className="footer p-10 bg-neutral text-neutral-content">
    <div>
      <p>Copyright &copy; {new Date().getFullYear()} Dario Furlan - All rights reserved</p>
    </div>
    <div>
      <p>Partita IVA: IT05491440284</p>
      <p>SDI: M5UXCR1</p>
    </div>
  </footer>
}