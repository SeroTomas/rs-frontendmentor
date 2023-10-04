import { StyledApp, StyledLayout } from "./app.styles"
import { Result, Summary } from "./components"

function App() {

  return (
    <StyledApp>
      <StyledLayout>
        <Result />
        <Summary/>
      </StyledLayout>
    </StyledApp>
  )
}

export default App
