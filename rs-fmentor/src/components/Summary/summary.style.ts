import { Fonts, Gradients, Neutral } from "@src/utilities";
import styled from "styled-components";

export const StyledSummary = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 55%;
flex-grow: 1;
padding: 20px;
font-family: ${Fonts.hankenGrotesk};

.title{
    font-size: 1.6rem;
}

.unit{
    display: flex;
    flex-direction: column;
    gap: 15px;
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
@media (min-width:1440px){
    height: 100%;
    justify-content: space-around;

    .title{
        font-size: 2rem;
    }

    .unit{
        gap: 20px;
    }

}

`