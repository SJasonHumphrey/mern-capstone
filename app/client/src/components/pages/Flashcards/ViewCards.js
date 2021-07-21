import { FaPencilAlt, FaTrashAlt} from "react-icons/fa";
import React, { useContext, useState } from 'react';
import Context from './Context/context.js';
import Modal from './Modal';

export default function ViewCards(props) {
  const { state, setActiveCard, setView } = useContext(Context);
  const cards = state.cards;
  const activeCard = state.activeCard;

  const [ isOpen, toggleModal ] = useState(false);

  const handleModal = (i) => {
    setActiveCard(i);
    toggleModal(true);
  }

  const handleUpdate = (i) => {
    setActiveCard(i);
    setView('update-cards');
  }

  return (
    <div>
      { isOpen &&
        <Modal activeCard={cards[activeCard]} toggleModal={toggleModal} deleteCards={props.deleteCards}/>
      }
      <h2 className="text-center font-weight-bold mb-3">My Cards</h2>
      <div className="container">
        <div className="row row-cols-md-3 row-cols-1">
          { cards.map((card, i) => {
            return (
              <div key={i} className="col mb-4">
                <div className="card h-100">
                  <div className="card-body bg-info">
                    <h5 className="card-title text-white font-weight-bold">Question:</h5>
                    <p className="card-text text-white">{card.question}</p>
                  </div>
                  <div className="card-body" style={{backgroundColor:'#4427C9'}}>
                    <h5 className="card-title text-white font-weight-bold">Answer:</h5>
                    <p className="card-text text-white">{card.answer}</p>
                  </div>
                  <div className="card-footer text-center d-flex justify-content-end" style={{backgroundColor:'#2C1981'}}>
                    <FaPencilAlt onClick={() => handleUpdate(i)} className="mt-1 text-white"/>
                    <FaTrashAlt onClick={() => handleModal(i)} className="m-1 text-white"/>
                  </div>
                </div>
              </div>
            )
          }) }
        </div>
      </div>
    </div>
  )
}
