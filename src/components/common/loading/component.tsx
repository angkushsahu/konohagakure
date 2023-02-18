import sharingan from "assets/sharingan.svg";
import styles from "./styles.module.scss";

const LoadingComponent = () => {
    return (
        <div className={styles.loading_component}>
            <img src={sharingan} alt="sharingan" loading="lazy" />
        </div>
    );
};

export default LoadingComponent;
