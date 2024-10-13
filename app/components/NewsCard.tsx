
export interface INewsPiece {
    title: string;
    date: string;
    link: string;
    img: string;
    desc?: string;
}

export default function NewsCard({ title, date, link, img }: INewsPiece) {
    return <div className="flex-1 card bg-base-100 w-96 min-w-72 shadow-xl mr-4">
        <figure>
            <img
                src={img}
                alt="Vanilla" />
        </figure>
        <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <div className="self-end text-xs text-gray-400">{date}</div>
            {/* <p>{desc}</p> */}
            <div className="card-actions justify-end">
                <a className="link link-primary" href={link} target="_blank" rel="noopener noreferrer">Leggi l'articolo Completo</a>
            </div>
        </div>
    </div>
}