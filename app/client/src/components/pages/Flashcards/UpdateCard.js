import React, { useState, useEffect, useContext } from 'react';
import Form from './Form';
import Context from '../Flashcards/Context/context';


const UpdateCard = (props) => {
  const { state, setView } = useContext(Context)
  const cards = state.cards;
  const activeCard = state.activeCard;

  const [ input, setInput ] = useState({
    question: '',
    answer: ''
  });

  const handleChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const editCards = props.editCards;
    editCards(input);
    setView('view-cards');
  }

  const handleReset = () => {
    setView('view-cards');
  }

  useEffect(() => {
    setInput(cards[activeCard])
  }, [])

  return (
    <div>
      <h2 className="text-center font-weight-bold mb-3">Update Card</h2>
      <div className="container">
        <Form
          card={input}
          change={handleChange}
          reset={handleReset}
          submit={handleSubmit}
        />
      </div>
    </div>
  )
}

export default UpdateCard;
