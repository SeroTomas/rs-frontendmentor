import style from "./App.module.css";
import CustomImage from "./components/CustomImage/CustomImage";
import Info from "./components/Info/Info";

function App() {

  return (
    <div className={style.screen}>
      <div className={style.card}>
        <CustomImage />
        <Info/>
      </div>
    </div>
  )
}

export default App
