import type { UIMatch } from "react-router";

type RouteHandle = {
    breadcrumb: (match: UIMatch) => JSX.Element;
}

declare module "react-router" {
    export function useMatches(): UIMatch<unknown, RouteHandle>[];
}