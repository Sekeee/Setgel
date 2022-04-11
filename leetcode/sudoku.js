const solveSudoku = (board) => {
  const sum = 45;
  let row = [];
  let col = [];
  let box = [];

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // No duplicate numbers + sum = 45
  // fill non duplicated numbers

  // row parts into an array
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const rowArr = [];
      rowArr.push(board[i][j]);
      row.push(rowArr);
    }
  }

  // Column parts into an array
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const colArr = [];
      colArr.push(board[j][i]);
      col.push(rowArr);
    }
  }

  // 3x3 Box into an array
  for (let i = 0; i < board.length / 3; i = i++) {
    for (let j = 0; j < board.length / 3; j++) {
      // [[1;1 , 1;2 , 1;3 , 2;1 , 2;2 , 2;3 , 3;1 , 3;2 , 3;3]]
      while (board.length < 10) {
        const boxArray = [];
        boxArray.push(board[i][j]);
      }
      board.length += 3;
    }
  }
  console.log(cow, rol, box);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      // row musnt be duplcated and the sum of an array must be equal to 45
    }
  }
  return board;
};
