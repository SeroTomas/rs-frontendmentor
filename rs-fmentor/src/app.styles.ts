import styled from "styled-components";
import { Neutral } from "./utilities";

export const StyledApp = styled.div`
    background-color: whitesmoke;
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
`

export const StyledLayout = styled.div`
    background-color: white;
    box-shadow: 0 1px 18px ${Neutral.darkGrayBlue};
    border-radius: 20px;
    width: 375px;
    height: 700px;

    @media (min-width:1440px) {
        display: flex;
        width: 800px;
        height: 550px;
    }
`