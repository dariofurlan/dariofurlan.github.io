

export default function ProjectHead({ title, description, icon }: { title: string, description: React.ReactNode, icon: string }) {
    return <div className="pb-2 mx-auto flex sm:flex-row flex-wrap sm:flex-nowrap flex-col items-center mb-4">
        <figure className="h-16 sm:mr-4 sm:mb-0 mb-4 flex-shrink-0">
            <img className="rounded-2xl h-16 bg-white shrink-0 shadow-xl shadow-gray-400" src={icon} alt={title} />
        </figure>
        <div>
            <h3 className="font-Outfit text-center sm:text-left text-2xl font-bold ">{title}</h3>
            <div className="font-Outfit text-center sm:text-left text-gray-400 text-sm text-wrap max-w-80">
                {description}
            </div>
        </div>
    </div>;
};