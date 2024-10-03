

export default function Content({ children }: { children: React.ReactNode }) {
    return <main className="container mx-auto p-4">
        {children}
    </main>
}