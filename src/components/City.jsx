import { useParams, useSearchParams } from "react-router-dom";
import styles from "./City.module.css";
import { useEffect, useState } from "react";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const [city, setCity] = useState({});

  useEffect(() => {
    async function getCity() {
      try {
        const res = await fetch(`http://localhost:8000/cities/${id}`);
        if (!res.ok) throw new Error("Error fetching city.");
        const city = await res.json();
        setCity(city);
        console.log(city);
      } catch (err) {
        console.error(err);
      }
    }
    getCity();
  }, [id]);

  const { cityName, country, date, emoji, notes } = city;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>{/* <ButtonBack /> */}</div>
    </div>
  );
}

export default City;
