import React, { useState } from 'react';

function Gameboard({onSelectSquare,activePlayerSymbol}) {
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard(prevGameBoard => {
      const updatedBoard = [...prevGameBoard.map(row => [...row])];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol; // For now, setting the selected square to 'X', you can change this logic as needed
      return updatedBoard;
    });
  }

  onSelectSquare

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default Gameboard;
