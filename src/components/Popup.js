import React, {useEffect} from 'react'
import { checkWin } from './helpers/helpers'

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayAble, playAgain }) => {
  
  let finalMessage =''
  let finalMessageRevealWord = ''
  let playAble = true

    if(checkWin(correctLetters, wrongLetters, selectedWord, ) === 'win'){
        finalMessage = "Congratulation! You Won!"
        playAble = false
    } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose'){
        finalMessage = "Unfortunately You Lose"
        finalMessageRevealWord = `... the word was ${selectedWord}`
        playAble = false
    }

    useEffect(() => setPlayAble(playAble))

    return (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
    <div className="popup">
      <h2> {finalMessage}</h2>
      <h3>{finalMessageRevealWord}</h3>
      <button onClick={playAgain}>Play Again</button>
    </div>
  </div>
  )
}

export default Popup
