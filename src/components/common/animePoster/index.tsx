import styles from "./styles.module.scss";

interface AnimePosterProps {
    mal_id: number;
    image: string;
    title: string;
}

const AnimePoster = ({ mal_id, image, title }: AnimePosterProps) => {
    return (
        <article key={mal_id} className={styles.anime} title={title}>
            <img src={image} alt="naruto" loading="lazy" className={styles.anime_poster} />
            <p className={styles.anime_title}>{title ? title : "Anonymous"}</p>
        </article>
    );
};

export default AnimePoster;
