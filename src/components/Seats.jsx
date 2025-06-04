const Seat = ({ color, seat, row }) => {
  const styles = {
    backgroundColor: color === "red" ? "red" : "green",
    width: "50px",
    height: "50px",
    borderRadius: "8px",
    margin: "5px",
  };

  return (
    <>
      <p>{seat + row}</p>
      <div style={styles}></div>
    </>
  );
};

export default Seat;
