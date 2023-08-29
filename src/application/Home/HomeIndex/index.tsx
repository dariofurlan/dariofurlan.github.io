import { observer } from "mobx-react-lite";
import Tech from "../TechStack";
import WhoAmI from "../WhoAmI";
import Contacts from "../Contacts";
import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    height: 100%;
    margin: 0 auto;

    @media (min-width: 768px) {
        width: 768px;
    }
`;

export default function HomeView() {
    useEffect(() => {
        console.log("HomeView mounted")
    }, []);

    return <>
        <Container>
            <WhoAmI />
            <Contacts />
            <Tech />
        </Container>
    </>
}