import style from "./customImage.module.css";
import useDevice from "../../hooks/useDevice";

const CustomImage = () => {

    const dispositive = useDevice();

    return (
        <div className={style.imageContainer}>
            <img src={dispositive} alt="foto del producto" />
        </div>
    )
}
export default CustomImage