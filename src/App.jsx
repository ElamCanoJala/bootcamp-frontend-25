import "./App.css";
import Seat from "./components/Seats";

function App() {
  let seat = 0;
  let row = A;
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Seat color="red" />
      <Seat color="green" />
      <Seat color="green" />
      <Seat color="red" />
      <Seat color="green" />
      <Seat color="green" />
    </div>
  );
}

export default App;
