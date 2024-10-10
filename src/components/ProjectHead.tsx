

export default function ProjectHead({ title, description, icon }: { title: string, description: React.ReactNode, icon: React.ReactNode }) {
    return <div className="pb-2 mx-auto flex sm:flex-row flex-wrap flex-col items-center mb-4">
        <figure className="h-16 sm:mr-4 sm:mb-0 mb-4">
            {icon}
        </figure>
        <div>
            <h3 className="font-Outfit text-center sm:text-left text-2xl font-bold ">{title}</h3>
            <div className="font-Outfit text-center sm:text-left text-gray-400 text-sm">
                {description}
            </div>
        </div>
    </div>;
};