import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Paginate from "react-js-pagination";
import AnimePoster from "../animePoster";
import SearchBar from "../searchBar";
import { IBulkResult } from "types";

const SearchResults = () => {
    const { search } = useLocation();
    const animeName = new URLSearchParams(search).get("search");
    const [animeList, setAnimeList] = useState({} as IBulkResult);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(10);
    const resultPerPage = 10;

    useEffect(() => {
        window.scrollTo(0, 0);
        const getData = async () => {
            const response = await fetch(`https://api.jikan.moe/v4/anime?q=${animeName}&limit=${resultPerPage}&page=${currentPage}`);
            const data: IBulkResult = await response.json();

            setAnimeList(data);
            setTotalResults(data?.pagination?.items?.total);
        };
        getData();
    }, [animeName, currentPage]);

    const onPageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <section className={`page ${styles.search_section}`}>
            <SearchBar />
            <h2 title={`Results for ${animeName}`}>You searched for "{animeName}"</h2>
            <div className={styles.anime_container}>
                {animeList.data?.length
                    ? animeList.data.map((anime) => (
                          <AnimePoster image={anime.images.webp.image_url} mal_id={anime.mal_id} title={anime.title_english} key={anime.mal_id} />
                      ))
                    : null}
            </div>
            {totalResults > resultPerPage ? (
                <Paginate
                    activePage={currentPage}
                    itemsCountPerPage={resultPerPage}
                    totalItemsCount={totalResults}
                    onChange={onPageChange}
                    pageRangeDisplayed={3}
                    nextPageText="Next"
                    prevPageText="Previous"
                    firstPageText="First"
                    lastPageText="Last"
                    activeClass="active_page"
                    activeLinkClass="active_link__page"
                    hideDisabled={true}
                />
            ) : null}
        </section>
    );
};

export default SearchResults;
