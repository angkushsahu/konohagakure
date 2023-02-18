import styles from "./styles.module.scss";
import { useState } from "react";
import FlashScreen from "../flashscreen";
import Banner from "./banner";
import TopAnime from "./topAnime";

const HomePage = () => {
    const showFlashScreen = sessionStorage.getItem("flashScreen");
    const [flash, setFlash] = useState(showFlashScreen ? false : true);
    setTimeout(() => {
        setFlash(false);
        sessionStorage.setItem("flashScreen", "true");
    }, 3750);

    if (flash) {
        return <FlashScreen />;
    } else {
        return (
            <section className={`page ${styles.home}`}>
                <Banner />
                <TopAnime />
            </section>
        );
    }
};

export default HomePage;
