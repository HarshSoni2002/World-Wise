import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Countryitem from "./CountryItem";
import { useLocalCities } from "../contexts/LocalCitiesContext";

function CountryList() {
  const { cities, isLoading } = useLocalCities();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <Countryitem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
