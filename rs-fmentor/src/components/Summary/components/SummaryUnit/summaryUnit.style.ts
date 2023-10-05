import { Neutral, PrimaryColors } from "@src/utilities";
import styled from "styled-components";

export const StyledSummaryUnit = styled.div`
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .info{
        display: flex;
        align-items: center;
        gap: 5px;
        font-weight: 700;

        p{
            font-size: 1.4rem;
        }
    }

    .score{
        display: flex;
        gap: 5px;
        align-items: center;
        font-size: 1.4rem;
        color: ${Neutral.darkGrayBlue};
        font-weight: 800;

        p{
            opacity: .6;
        }
        

    }
`