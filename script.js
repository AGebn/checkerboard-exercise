function square() {
  let square = document.createElement("div");
  square.style.width = "11.1%";
  square.style.paddingBottom = "11.1%";
  square.style.float = "left";
  return square;
}

function buildCheckerBoard() {
  for (let i = 0; i < 81; i++) {
    if (i % 2 === 0) {
      let redSquare = square();
      redSquare.style.backgroundColor = "red";
      document.body.append(redSquare);
    } else {
      let blackSquare = square();
      blackSquare.style.backgroundColor = "black";
      document.body.append(blackSquare);
    }
  }
}

buildCheckerBoard();
