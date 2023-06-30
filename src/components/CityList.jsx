import styles from "./CityList.module.css";

function CityList({ cities }) {
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
