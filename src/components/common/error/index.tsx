import itachi from "assets/itachi_bg.jpeg";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <section className={`page ${styles.error}`}>
            <img src={itachi} alt="it's itachi" loading="lazy" title="Orewa, Ucchiha Itachi" />
            <h2>You are already under my genjutsu</h2>
            <Link to="/" replace title="Release out of my genjutsu">
                <button type="button">Click to release !</button>
            </Link>
        </section>
    );
};

export default ErrorPage;
