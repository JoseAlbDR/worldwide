/* eslint-disable react/prop-types */
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city, i) => {
        return <CityItem key={i} city={city} />;
      })}
    </ul>
  );
}

export default CityList;
