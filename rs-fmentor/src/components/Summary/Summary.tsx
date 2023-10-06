import SummaryUnit from "./components/SummaryUnit/SummaryUnit";
import { StyledSummary } from "./summary.style";
import { data } from "@src/utilities";

const Summary = () => {
    return (
        <StyledSummary>
            <h2 className="title">Summary</h2>
            <div className="unit">
                {
                    data.map(element => <SummaryUnit
                        category={element.category}
                        score={element.score}
                        icon={element.icon}
                        key={element.category}
                    />)
                }
            </div>
            <button className="btn">Continue</button>
        </StyledSummary>
    )
}
export default Summary