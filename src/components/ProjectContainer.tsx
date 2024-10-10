

export default function ProjectContainer({ children }: { children: React.ReactNode }) {
    return <div className="bg-base-200 max-w-screen-md mx-auto w-full p-4 rounded-xl flex flex-col">
        {children}
    </div>;
};