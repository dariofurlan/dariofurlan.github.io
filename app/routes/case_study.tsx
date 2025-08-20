import { NavLink, Outlet } from "react-router";

export const handle = {
  breadcrumb: () => <NavLink to="case_study">project</NavLink>,
}

export default function CaseStudies() {
    return <Outlet/>
}