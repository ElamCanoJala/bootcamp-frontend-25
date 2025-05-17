class Seat {
  constructor(row, seat) {
    this.row = row;
    this.seat = seat;
    this.isAvailable = true;
  }

  reserve() {
    if (this.isAvailable) {
      this.isAvailable = false;
      return true;
    } else {
      return false;
    }
  }
}

class Cinema {
  constructor(rows, seatsPerRow) {
    this.rows = rows;
    this.seatsPerRow = seatsPerRow;
    this.seats = this.createSeats();
  }

  createSeats() {
    const seats = [];
    for (let i = 0; i < this.rows; i++) {
      const row = [];
      for (let j = 0; j < this.seatsPerRow; j++) {
        row.push(new Seat(i + 1, j + 1));
      }
      seats.push(row);
    }
    return seats;
  }

  showSeatStatus() {
    console.log("State of the Cinema:");
    for (let i = 0; i < this.rows; i++) {
      let rowStatus = `Row ${i + 1}:`;
      for (let j = 0; j < this.seatsPerRow; j++) {
        rowStatus += this.seats[i][j].isAvailable ? "-O" : "-X";
      }
      console.log(rowStatus);
    }
    console.log(
      `\nThere are ${
        this.seats.flat().length -
        this.seats.flat().filter((e) => e.isAvailable !== true).length
      } seats available`
    );
  }

  reserveSeat(row, number) {
    if (
      row >= 1 &&
      row <= this.rows &&
      number >= 1 &&
      number <= this.seatsPerRow
    ) {
      const seat = this.seats[row - 1][number - 1];
      if (seat.reserve()) {
        console.log(`You successfully reserve seat (${row}, ${number})`);
      } else {
        console.log(`The seat (${row}, ${number}) is occupied`);
      }
    } else {
      console.log(`The seat (${row}, ${number}) doesn't exists`);
    }
  }
}

const cinema = new Cinema(5, 10);
cinema.showSeatStatus(); //first time showing

cinema.reserveSeat(3, 5);
cinema.reserveSeat(1, 3);
cinema.reserveSeat(3, 5); //ocuppied message

cinema.showSeatStatus(); //second time showing
