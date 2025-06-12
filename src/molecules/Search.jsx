import Input from "../atoms/Input";
import { useRef, useState } from "react";
import { mockWeatherData } from "../assets/mockData";

const Search = () => {
  const inputRef = useRef(null);
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);

  const handleSearch = () => {
    const city = inputRef.current?.value?.trim();
    if (!city) {
      console.log("City not provided");
      return;
    }

    const data = mockWeatherData[city];
    if (data) {
      setWeather({ city, ...data });

      setHistory((prev) => [...prev, city]);
    } else {
      setWeather(null);
      alert("Ciudad no encontrada.");
    }
  };

  const handleHistoryClick = (city) => {
    const data = mockWeatherData[city];
    if (data) {
      setWeather({ city, ...data });
    }
  };

  return (
    <div>
      <Input reference={inputRef} />
      <ButtonSearch handleSearch={handleSearch} />
      {weather && (
        <div>
          <h2>{weather.city}</h2>
          <p>Temperatura: {weather.temperature}</p>
          <p>Humidity: {weather.humidity}</p>
          <p>Wind Speed: {weather.windSpeed}</p>
        </div>
      )}
      {history.length > 0 && (
        <div>
          <h3>Historial:</h3>
          <div>
            {history.map((city) => (
              <button key={city} onClick={() => handleHistoryClick(city)}>
                {city}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
