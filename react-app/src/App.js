import { useState } from 'react';
import './App.css';

function App() {

  const [values, setValues] = useState(Array(9).fill(''))
  const [winner, setWinner] = useState('')
  const [nextChar, setNextChar] = useState('X')

  // Assuming player A will run the X
  // Assuming player B will run the 0

  //Game Logic : 
    //We have 9 boxes , creating the array of length 9.
    //Considering the id of first box location is 0 then next box is 1, 2 and so on.
    //When user will click on any of the  box will save the value of of that box at its location in values array 
    //and will check if wining combination is matched.


  function handleOnClickBox (ClickedBoxLocation) {

    // checking if the box is clicked again
    // suppose box 1 is clicked , so we checking id in values array has the value is location 1 or not
    // if location 1 has already has the value means, this box was clicked previously so will stop the moving forward steps of calculation

    if(values[ClickedBoxLocation]){
      return ;
    }
    
    // setting up the cahr for the next click
    setNextChar(
      nextChar === 'X' ? '0' : 'X'
    )

    // copying the existing values array
    const newvalues = [...values]

    // setting the value at location of clicked box
    newvalues[ClickedBoxLocation] = nextChar
    setValues(newvalues)


    const possibleWinCombinations = [
      [0,1,2], [3,4,5], 
      [6,7,8], [2,5,8], 
      [1,4,7],[0,3,6], 
      [0,4,8], [2,4,6]
    ]

    for(let i = 0; i<possibleWinCombinations.length; i++) {

      // Checking if any of the winning combination has matched means , 
      // if every locations of any of the winning combination has the same value

      const [a,b,c] = possibleWinCombinations[i] || []
      // a = first lication of the winning combination
      // b = second lication of the winning combination
      // c = third lication of the winning combination


      // if any one value from the winning combination is '' (default) mean that combination can not win
      // so skipping such combination
      if(newvalues[a] == '' || newvalues[b] == '' || newvalues[c] == ''){
        continue;
      }

      if( 
        newvalues[a] == newvalues[b] && 
        newvalues[c] == newvalues[b] && 
        newvalues[a] == newvalues[c]
      ){
        // if all the values of any combination are same 
        // means that combination has won .

        // setting the winnner here
        setWinner(
          newvalues[a] == 'X' ? 'A' : 'B'
        )
        break;
      }
      
      // if all the boxes are filled and still we do not have the winner
      // we will have to reset the game
      const isAllTheBoxesMarked = newvalues.every((val)=> val != '' )

      if(isAllTheBoxesMarked){
        handleGameRestart()
      }
    }

  }

 function handleGameRestart () {
    setWinner('')
    setValues(Array(9).fill(''))
 }


  return (
    <div className='wrapper'>

    <div className='gameBox'>
      {
        Array(9).fill(null).map((_, index) => (
          <div onClick={
            () => handleOnClickBox(index)
          }> 
            {values[index]} 
          </div>
        ))
      }
    </div>

      
      {
        winner && (
          <div>
            <h4>Winner is : {winner}</h4>
            <button 
              className='restartBtn'
              onClick={handleGameRestart}
            > Restart Game! </button>
          </div>
        )
      }
  

    </div>
    
  );
}

export default App;
