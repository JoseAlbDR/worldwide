import { useState } from "react";
import styles from "./SearchBar.module.css";
import { useCities } from "../context/CityContext";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const { searchCity } = useCities();
  const navigate = useNavigate();

  async function handleSearch(e) {
    try {
      e.preventDefault();
      const { lat, lng } = await searchCity(query);
      setQuery("");
      navigate(`form?lat=${lat}&lng=${lng}`);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <form className={styles.search} onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <button className={styles.searchBtn}>🔍</button>
    </form>
  );
}

export default SearchBar;
