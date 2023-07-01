import styles from "./City.module.css";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCities } from "../context/CityContext";
import Spinner from "./Spinner";
import Button from "./Button";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { isLoading, setIsLoading, BASE_URL, currentCity, setCurrentCity } =
    useCities();

  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  useEffect(() => {
    async function getCity() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        if (!res.ok) throw new Error("Error fetching city.");
        const city = await res.json();
        setCurrentCity(city);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    getCity();
  }, [id, setIsLoading, BASE_URL]);

  const { cityName, date, emoji, notes } = currentCity;

  if (isLoading) return <Spinner />;

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

      <Button
        type="back"
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        &larr; Back
      </Button>
    </div>
  );
}

export default City;
