import style from "./info.module.css";

const Info = () => {


    return (
        <div>
            <p>PERFUME</p>
            <div>
                <h2>
                    Gabrielle Essence Eau De Parfum
                </h2>
                <p>
                    A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
                </p>

                <div className={style.prices}>
                    <span>$149.99</span>
                    <span className={}>$169.99</span>
                </div>
            </div>
        </div>
    )
}
export default Info