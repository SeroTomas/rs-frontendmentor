
import UnitStyleDefiner from "../UnitStyleDefiner";
import { StyledSummaryUnit } from "./summaryUnit.style";
import { UnitType } from "@src/utilities";

const SummaryUnit = ({ category, score, icon }: UnitType) => {

    return (
        <UnitStyleDefiner category={category}>
            <StyledSummaryUnit>
                <div className="info">
                    <img src={icon} alt="icon" />
                    <p>{category}</p>
                </div>
                <div className="score">
                    <span>{score}</span> <p>/ 100 </p>
                </div>
            </StyledSummaryUnit >
        </UnitStyleDefiner>
    )
}
export default SummaryUnit