import Input from "../atoms/Input";
import { useRef, useState } from "react";
import { mockWeatherData } from "../assets/mockData"; // importá tus datos
const Search = () => {
  return (
    <div>
      <Input />
      <ButtonSearch />
    </div>
  );
};

export default Search;
