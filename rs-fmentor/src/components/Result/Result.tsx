import { StyledResult} from "./result.styles"

const Result = () => {
    return (
        <StyledResult>
            <h2>Your Result</h2>
            <div className="circle">
                <p>76</p>
                <span>of 100</span>
            </div>
            <div className="text">
                <h3>Great</h3>
                <p>You scored higher than 65% of the people who have taken these tests.</p>
            </div>
        </StyledResult>
    )
}
export default Result