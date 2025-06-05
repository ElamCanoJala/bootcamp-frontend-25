import "./Styles.css";

const Seat = ({ isAvailable, number }) => {
  return (
    <div className="seat_container">
      <p className="">{number}</p>
      <div
        className={`seat ${isAvailable ? "available" : "unavailable"} seat`}
      ></div>
    </div>
  );
};

export default Seat;
