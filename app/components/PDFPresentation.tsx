interface PDFPresentationProps {
    filePath: string;
    title?: string;
}

export default function PDFPresentation({ filePath, title = "Presentazione" }: PDFPresentationProps) {
    return (
        <div className="mx-auto max-w-4xl">
            <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
            <div className="border border-gray-300 rounded-lg p-4 bg-white">
                <div className="w-full">
                    <iframe
                        src={filePath}
                        className="w-full h-[600px] border-0 rounded-lg shadow-lg"
                        title={title}
                        loading="lazy"
                    />
                </div>
                <div className="mt-4 text-center">
                    <a
                        href={filePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Apri PDF in nuova scheda
                    </a>
                </div>
            </div>
        </div>
    );
}