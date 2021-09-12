import { useState } from "react";
import s from "./Searchbar.module.css";

export default function Searchbar({ onSubmit }) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(searchQuery);
        setSearchQuery("");
    };

    return (
        <header className={s.Searchbar}>
            <form className={s.SearchForm} onSubmit={handleSubmit}>
                <button type="submit" className={s.SearchFormButton}>
                    <span className={s.SearchFormButtonLabel}>Search</span>
                </button>

                <input
                    className={s.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={handleInputChange}
                    value={searchQuery}
                />
            </form>
        </header>
    );
}