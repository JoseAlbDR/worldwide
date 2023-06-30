/* eslint-disable react/prop-types */
import styles from "./CityList.module.css";
import Spinner from "./Spinner";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  return (
    <ul className={styles.cityList}>
      {cities.map((citie, i) => {
        console.log(citie);
        return <li key={i}>{citie.cityName}</li>;
      })}
    </ul>
  );
}

export default CityList;
