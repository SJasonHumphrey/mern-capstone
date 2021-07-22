import React from 'react'

const Accuracy = (props) => {

    // gets length of TextPreview
    const textLength = props.text.replace(' ', '').length

    // accuracy formula = # of (correctSymbols / totalSymbols) X 100%
    let accuracy = (props.correctSymbols * 100 / textLength) 


    

  return (
    <> 
    {/* changing to percentage completed for now */}
      <div>Percentage Completed: {accuracy.toFixed(2)}% </div>
    </>
  )
}

export default Accuracy
