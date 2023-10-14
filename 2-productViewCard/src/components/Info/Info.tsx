import style from "./info.module.css";

const Info = () => {


    return (
        <div className={style.infoContainer}>
            <p className={style.sectionTitle}>PERFUME</p>
            <div>
                <h2 className={style.productName}>
                    Gabrielle Essence Eau De Parfum
                </h2>
                <p className={style.productDescription}>
                    A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
                </p>

                <div className={style.prices}>
                    <span className={style.newPrice}>$149.99</span>
                    <span className={style.oldPrice}>$169.99</span>
                </div>
            </div>
            <button className={style.cartButton}>add to Cart</button>
        </div>
    )
}
export default Info