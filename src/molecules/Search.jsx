import Input from "../atoms/Input";
import { useRef, useState } from "react";
import { mockWeatherData } from "../assets/mockData";
import ButtonSearch from "../atoms/ButtonSearch";

const Search = () => {
  const inputRef = useRef(null);
  const [cityWeather, setCityWeather] = useState({
    cities: {},
    selectedCity: null,
  });

  const handleSearch = () => {
    const city = inputRef.current?.value;

    if (!city || !mockWeatherData[city]) {
      alert("City not found");
      return;
    }

    setCityWeather((prev) => ({
      cities: {
        ...prev.cities,
        [city]: mockWeatherData[city],
      },
      selectedCity: city,
    }));
  };

  const handleSelectCity = (city) => {
    setCityWeather((prev) => ({
      ...prev,
      selectedCity: city,
    }));
  };

  return (
    <div>
      <Input reference={inputRef} placeholder="Search for a city..." />
      <ButtonSearch handleSearch={handleSearch} />
      <div>
        {Object.keys(cityWeather.cities).map((city) => (
          <button key={city} onClick={() => handleSelectCity(city)}>
            {city}
          </button>
        ))}
      </div>
      {cityWeather.selectedCity &&
        cityWeather.cities[cityWeather.selectedCity] && (
          <div>
            <h2>{cityWeather.selectedCity}</h2>
            <p>
              Temperature:
              {cityWeather.cities[cityWeather.selectedCity].temperature}
            </p>
            <p>
              Humidity: {cityWeather.cities[cityWeather.selectedCity].humidity}
            </p>
            <p>
              Wind Speed:
              {cityWeather.cities[cityWeather.selectedCity].windSpeed}
            </p>
          </div>
        )}
    </div>
  );
};

export default Search;
