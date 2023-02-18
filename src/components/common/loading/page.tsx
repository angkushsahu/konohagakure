import styles from "./styles.module.scss";
import LoadingComponent from "./component";

const LoadingPage = () => {
    return (
        <section className={`page ${styles.loading_page}`}>
            <LoadingComponent />
        </section>
    );
};

export default LoadingPage;
