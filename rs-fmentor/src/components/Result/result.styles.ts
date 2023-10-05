import styled from "styled-components";
import { Gradients, Fonts, Neutral } from "@src/utilities";

export const StyledResult = styled.div`
    width: 375px;
    height: 45%;
    padding: 10px 50px 10px 50px;
    border-radius: 20px 20px 30px 30px;
    background: linear-gradient(to bottom, ${Gradients.backgroundSlateBlue}, ${Gradients.backgroundRoyalBlue});
    font-family: ${Fonts.hankenGrotesk};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h2{
        color: ${Neutral.lightLavender};
        font-size: 1.6rem;
    }

    .circle{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 120px;
        width: 120px;
        border-radius: 50%;
        background: linear-gradient(to top, ${Gradients.circlePersianBlue}, ${Gradients.circleVioletBlue});

        p{
            color: ${Neutral.white};
            font-size: 4.8rem;
            font-weight: 700;
        }

        span{
            color: ${Neutral.lightLavender};
            font-size: 1.5rem;
        }
    }

    .text{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;

        h3{
            color: ${Neutral.white};
            font-size: 2.1rem;
            font-weight: 500;
        }

        p{
            font-size: 1.4rem;
            color: ${Neutral.lightLavender};
            text-align: center;
        }

    }

    @media (min-width:1440px){
        height: 100%;
        border-radius: inherit;

        h2{
            font-size: 2rem;
        }

        .circle{
            height: 200px;
            width: 200px;

            p{
                font-size: 7rem;
            }
        }

        .text{
            gap: 10px;
            h3{
                font-size: 3rem;
            }

            p{
                font-size: 1.8rem;
            }
        }
    }
`
