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
    height: 660px;

    @media (min-width:1440px) {
        width: 800px;
        height: 660px;
    }
`