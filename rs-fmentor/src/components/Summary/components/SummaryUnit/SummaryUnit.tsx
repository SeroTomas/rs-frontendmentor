import { StyledSummaryUnit } from "./summaryUnit.style";

interface Props {
    category: string
    score: number
    icon: string
}

const SummaryUnit = ({ category, score, icon }: Props) => {
    return (
        <StyledSummaryUnit>
            <div className="info">
                <img src={icon} alt="icon" />
                <p>{category}</p>
            </div>
            <p className="score">
                {score} / 100
            </p>
        </StyledSummaryUnit>
    )
}
export default SummaryUnit