

export default function Header() {
    return <header className="p-2">
        <div className="navbar bg-neutral text-neutral-content rounded-box font-Outfit">
            <div className="flex-1">
                <a href="/" className="btn btn-ghost text-3xl">
                    Dario Furlan
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#me">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </header>
}