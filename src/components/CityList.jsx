import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import Cityitem from "./Cityitem";
import Message from "./Message";
// import { useCities } from "../contexts/CitiesContext";
import { useLocalCities } from "../contexts/LocalCitiesContext";

function CityList() {
  const { cities, isLoading } = useLocalCities();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <Cityitem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
