import Input from "../atoms/Input";
import { useRef, useState } from "react";
import { mockWeatherData } from "../assets/mockData";

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
    </div>
  );
};

export default Search;
