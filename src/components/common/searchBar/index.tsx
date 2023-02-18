import styles from "./styles.module.scss";
import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const navigate = useNavigate();
    const searchRef = useRef<HTMLInputElement>(null);

    const onSearch = (e: FormEvent) => {
        e.preventDefault();
        if (searchRef && searchRef.current && searchRef.current.value) {
            navigate(`/anime?search=${searchRef.current.value}`);
        }
    };

    return (
        <form onSubmit={onSearch} className={styles.search_box}>
            <label htmlFor="search"></label>
            <input type="text" name="search" id="search" ref={searchRef} placeholder="Search anime e.g., Naruto" title="Search anime e.g., Naruto" />
            <button type="submit" title="Start searching">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
