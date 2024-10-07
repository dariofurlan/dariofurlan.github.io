

export default function Header() {
    return <header className="p-2">
        <div className="navbar bg-neutral text-neutral-content rounded-box font-Outfit">
            <div className="flex-1">
                <a href="/" className="btn btn-ghost text-3xl flex flex-row">
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
                    <li><a href="#me">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
        {/* <div className="sticky top-0 ">
            <ul className="menu bg-base-200 sm:menu-horizontal rounded-box">
                <li>
                    <a href="#me">About Me</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div> */}
    </header>
}