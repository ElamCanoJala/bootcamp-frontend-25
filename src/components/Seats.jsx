const Seat = ({ color, seat, row }) => {
  const styles = {
    backgroundColor: color === "red" ? "red" : "green",
    width: "50px",
    height: "50px",
    borderRadius: "8px",
    margin: "5px",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      <p>{seat + row}</p>
      <div style={styles}></div>
    </div>
  );
};

export default Seat;
