import React from 'react';

const Form = (props) => {
  const card = props.card;

  return (
    <form onSubmit={props.submit} onReset={props.reset} className="form">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <label htmlFor="question">
          Question:
        </label>
        <textarea name="question" value={card['question']} rows="3" onChange={props.change} className="flash-card-textarea" />
        <label htmlFor="answer" className="mt-3">
          Answer:
        </label>
        <textarea name="answer" value={card['answer']} rows="3" onChange={props.change} className="flash-card-textarea" />
      </div>
      <div className="d-flex justify-content-center m-4 mb-5">
        <button type="reset" className="btn m-1 rounded-0 btn btn-outline-dark mono-font" >Cancel</button>
        <button type="submit" className="btn m-1 rounded-0 btn btn-outline-dark mono-font ">Save Card</button>
      </div>
    </form>
  )
}

export default Form;
