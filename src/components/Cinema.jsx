import Screen from "./Screen";
import Seat from "./Seat";

const Cinema = ({ numRows = 5, seatsPerRow = 4 }) => {
  const rows = Array.from({ length: numRows }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  return (
    <div>
      <Screen />

      {rows.map((row) => (
        <div key={row} className="seat_row">
          {Array.from({ length: seatsPerRow }, (_, i) => {
            const seatNumber = `${row}${i + 1}`;
            const randomAvailability = Math.random() > 0.3;
            return (
              <Seat
                key={seatNumber}
                number={seatNumber}
                isAvailable={randomAvailability}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Cinema;
