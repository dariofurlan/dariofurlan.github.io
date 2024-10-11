
const logoSize = "h-8 w-8 sm:h-12 sm:w-12 inline-block";

function TechEl({ name, logo }: { name: string, logo: string }) {
    return <div className="flex sm:min-w-32 flex-1 flex-col items-center hover:cursor-pointer px-2 py-4 transition duration-500 ease-in-out hover:scale-105 sm:hover:scale-110">
        <img src={logo} alt={name} className={logoSize} />
        <span className="font-Outfit text-lg font-500 text-center pt-2">{name}</span>
    </div>
}

export default function Services() {
    return <div className="max-w-[680px] mx-auto bg-base-300 rounded-box p-4">
        <h2 className="text-3xl font-Outfit" id="services">My Tech Stack</h2>
        <div className="divider" >
            <h3 className="text-xl text-center font-bold font-Outfit pb-4 pt-2" id="backend">Software Development</h3>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center">
            <div className="card bg-base-100 flex-1 min-w-40 shadow-xl m-2">
                <div className="card-body">
                    <h2 className="card-title">Tailored Software Development</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 flex-1 min-w-40 shadow-xl m-2">
                <div className="card-body">
                    <h2 className="card-title">Solution Architect</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 flex-1 min-w-40 shadow-xl m-2">
                <div className="card-body">
                    <h2 className="card-title">Software Analysis</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 flex-1 min-w-40 shadow-xl m-2">
                <div className="card-body">
                    <h2 className="card-title">Software Design</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 flex-1 min-w-40 shadow-xl m-2">
                <div className="card-body">
                    <h2 className="card-title">Software Development</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 flex-1 min-w-40 shadow-xl m-2">
                <div className="card-body">
                    <h2 className="card-title">Consultant</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 flex-1 min-w-40 shadow-xl m-2">
                <div className="card-body">
                    <h2 className="card-title">ECommerce</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 flex-1 min-w-40 shadow-xl m-2">
                <div className="card-body">
                    <h2 className="card-title">Maintenance</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 flex-1 min-w-40 shadow-xl m-2">
                <div className="card-body">
                    <h2 className="card-title">Personal & Professional Website</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 flex-1 min-w-40 shadow-xl m-2">
                <div className="card-body">
                    <h2 className="card-title">Hosting</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="divider" >
            <h3 className="text-xl text-center font-bold font-Outfit pb-4 pt-2" id="web">Web Technologies</h3>
        </div>
    </div>
}