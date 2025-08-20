import { useMatches } from "react-router";


export default function Breadcrumb() {
    const matches = useMatches();

    return <div className="breadcrumbs text-sm px-6 mt-1 mx-auto">
        <ul className="justify-center">
            {matches
                .filter(
                    (match) =>
                        match.handle && match.handle.breadcrumb
                )
                .map((match, index) => (
                    <li key={index}>
                        {match.handle.breadcrumb(match)}
                    </li>
                ))}
        </ul>
    </div>
}