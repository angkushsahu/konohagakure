import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import AnimePoster from "components/common/animePoster";
import { IBulkResult } from "types";

const Trending = () => {
    const [topAnime, setTopAnime] = useState({} as IBulkResult);
    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(i);
    }

    useEffect(() => {
        const getTopAnime = async () => {
            const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
            const data: IBulkResult = await response.json();
            setTopAnime(data);
        };
        getTopAnime();
    }, []);

    const breakpoints = {
        0: { slidesPerView: 1, spaceBetween: 30 },
        520: { slidesPerView: 2, spaceBetween: 30 },
        780: { slidesPerView: 3, spaceBetween: 30 },
        1100: { slidesPerView: 4, spaceBetween: 30 },
        1280: { slidesPerView: 5, spaceBetween: 30 },
    };

    return (
        <section className={styles.trending}>
            <h2>Trending</h2>
            <div className={styles.movies}>
                <Swiper
                    freeMode={true}
                    centeredSlidesBounds
                    spaceBetween={30}
                    breakpoints={breakpoints}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {topAnime.data?.length
                        ? topAnime.data.map((anime) => (
                              <SwiperSlide key={anime.mal_id} className={styles.swiper}>
                                  <AnimePoster
                                      image={anime.images.webp.image_url}
                                      mal_id={anime.mal_id}
                                      title={anime.title_english}
                                      key={anime.mal_id}
                                  />
                              </SwiperSlide>
                          ))
                        : null}
                </Swiper>
            </div>
        </section>
    );
};

export default Trending;
