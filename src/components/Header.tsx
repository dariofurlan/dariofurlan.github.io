

export default function Header() {
    return <header>
        <nav className="navbar bg-neutral text-neutral-content">
            <div className="container mx-auto">
                <div className="flex-1">
                    <a href="#" className="text-lg font-bold">Dario Furlan</a>
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">Me</button>
                    <button className="btn btn-square btn-ghost">Projects</button>
                    <button className="btn btn-square btn-ghost">Services</button>
                    <button className="btn btn-square btn-ghost">Contact</button>
                </div>
            </div>
        </nav>
    </header>
}