/* eslint-disable react/prop-types */
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../context/CityContext";

function CityList() {
  const { cities, isLoading, isError, error } = useCities();
  if (isLoading) return <Spinner />;
  if (isError) return <Message message={error} />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city, i) => {
        return <CityItem key={i} city={city} />;
      })}
    </ul>
  );
}

export default CityList;
