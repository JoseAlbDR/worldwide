import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import _ from "lodash";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const uniqueCountry = _.uniqBy(cities, "country");

  return (
    <div className={styles.countryList}>
      {uniqueCountry.map((city, index) => {
        return <CountryItem key={index} country={city} />;
      })}
    </div>
  );
}

export default CountryList;
