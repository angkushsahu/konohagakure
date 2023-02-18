import itachi from "assets/itachi_bg.jpeg";
import styles from "./styles.module.scss";
import SearchBar from "components/common/searchBar";

const Banner = () => {
    return (
        <section className={styles.banner} title="Orewa, Ucchiha Itachi">
            <img src={itachi} alt="itachi" loading="lazy" className={styles.banner_bg} />
            <SearchBar />
            <div className={styles.headline}>
                <p className={styles.quote} title="A quote by Itachi">
                    Every single one of us goes through life depending on and bound by our individual knowledge and awareness. And we call it reality.
                    However, both knowledge and awareness are equivocal. One's reality might be another's illusion. We all live inside our own
                    fantasies
                </p>
                <p className={styles.speaker}>- Itachi Ucchiha</p>
            </div>
        </section>
    );
};

export default Banner;
