import { Category, PrimaryColors } from "@src/utilities"
import styled from "styled-components"

interface Props {
    children: React.ReactNode
    category: Category
}

const UnitStyleDefiner = ({ children, category }: Props) => {
    return (
        <StyledUnitStyleDefiner>
            <div className={category}>
                {children}
            </div>
        </StyledUnitStyleDefiner>
    )
}

export default UnitStyleDefiner;

const StyledUnitStyleDefiner = styled.div`
    .Reaction{
        color: ${PrimaryColors.lightRed};
        position: relative;
        
        &:after{
            content: " ";
            background-color: ${PrimaryColors.lightRed};
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            opacity: .1;
            border-radius: 5px;
        }
        
    }

    .Memory{
        color: ${PrimaryColors.orangeyYellow};
        position: relative;
       
        &:after{
            content: " ";
            background-color: ${PrimaryColors.orangeyYellow};
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            opacity: .1;
            border-radius: 5px;
        }
        
    }

    .Verbal{
        color: ${PrimaryColors.greenTeal};
        position: relative;
       
        &:after{
            content: " ";
            background-color: ${PrimaryColors.greenTeal};
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            opacity: .1;
            border-radius: 5px;
        }
        
    }

    .Visual{
        color: ${PrimaryColors.cobaltBlue};
        position: relative;
       
        &:after{
            content: " ";
            background-color: ${PrimaryColors.cobaltBlue};
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            opacity: .1;
            border-radius: 5px;
        }
        
    }
`