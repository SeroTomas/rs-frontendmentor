import { Fonts, Gradients, Neutral } from "@src/utilities";
import styled from "styled-components";

export const StyledSummary = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 55%;
flex-grow: 1;
padding: 20px;
font-family: ${Fonts.hankenGrotesk};

.title{
    font-size: 1.6rem;
}

.btn{
    outline: none;
    border: none;

    background: ${Neutral.darkGrayBlue};
    width: 100%;
    height: 50px;
    border-radius: 40px;
    color: ${Neutral.white};
    font-size: 1.5rem;
    font-weight: 500;
    transition: .2s ease;
    
    &:hover{
        cursor: pointer;
        background-color: ${Gradients.backgroundRoyalBlue};
    }

}

`