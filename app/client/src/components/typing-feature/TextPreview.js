import React from 'react'

// Where the text that the user is going to write goes
const TextPreview = (props) => {

    // text and userInput state from TypingTest component
    // split text by letter so we can map through it
    const text = props.text.split('')
    const userInput = props.userInput

  return (
    <>
      <div className="border rounded p-3 mb-4">
          {/* make a new array from text with current element (currentChar)
          and index of current element (index)
          */}
          {text.map((currentChar, index) => {
            //   console.log(currentChar)
            //   console.log(index)
            //   variable that will store color of span
              let color = '';
            //   check if there is something to compare. if current index of currentChar < total # of chars in userInput
              if (index < userInput.length){

                // if the curentChar doesn't match the userInput, the letter will be red (misspelled)
                // else the letter will be green (correctly spelled)
                  if (currentChar === props.userInput[index]){
                    color = '#dfffa0' // green
                  } else {
                    color = '#fcbea4' //red
                  }
              }
            //   return span with currentChar in text preview
              return <span key={index} style={{backgroundColor: color}}>{currentChar}</span>
          })}
      </div>
    </>
  )
}

export default TextPreview
