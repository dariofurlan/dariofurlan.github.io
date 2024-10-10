

export default function Content({ children }: { children: React.ReactNode }) {
    return <main className="lg:container lg:mx-auto p-4">
        {children}
    </main>
}