import React, { useState } from 'react';

function TicTacToe({ board = 9 }) {
  const [xIsNext, setXisNext] = useState(true);
  const [boxvalues, setBoxValues] = useState(Array(board).fill(''));
  const [winner, setWinner] = useState(null); // To track the winner

  const calculateWinner = (boxvalues) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (boxvalues[a] && boxvalues[a] === boxvalues[b] && boxvalues[a] === boxvalues[c]) {
        return boxvalues[a]; // Return the winner ('X' or 'O')
      }
    }
    return null;
  };

  const handlePerBtnClick = (index) => {
    if (winner || boxvalues[index]) {
      return; // If there's a winner or the box is already filled, do nothing
    }

    const newBoxValues = [...boxvalues]; // Make a copy of the boxvalues array
    newBoxValues[index] = xIsNext ? 'X' : 'O'; // Update with 'X' or 'O'
    setBoxValues(newBoxValues); // Set the new array to the state

    const calculatedWinner = calculateWinner(newBoxValues);
    if (calculatedWinner) {
      setWinner(calculatedWinner); // Set the winner if there's one
    }

    setXisNext(!xIsNext); // Toggle the turn
  };

  const handleReset = () => {
    setBoxValues(Array(board).fill('')); // Reset the board
    setXisNext(true); // Reset turn to 'X'
    setWinner(null); // Clear the winner
  };

  return (
    <div className="container flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold mb-4">
        {winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`}
      </h1>
      <div className="board w-[70vw] h-[70vh] rounded-[30px] flex flex-wrap gap-2 justify-center">
        {boxvalues.map((value, index) => (
          <button
            key={index}
            onClick={() => handlePerBtnClick(index)}
            className="bg-[#d0f4de] w-[25%] h-[30%] rounded-lg text-7xl font-bold text-black border-4 border-pink-600"
          >
            {value}
          </button>
        ))}
      </div>
      <button
        onClick={handleReset}
        className="btn btn-secondary text-xl text-white font-bold px-10 border-4 border-violet-700 mt-4"
      >
        Reset
      </button>
    </div>
  );
}

export default TicTacToe;
