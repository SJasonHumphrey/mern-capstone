import React, { useContext, useState } from 'react'
import ProgressBar from './ProgressBar';
import Context from '../Flashcards/Context/context';
import ReactCardFlip from 'react-card-flip';
import FrontCard from './FrontCard';
import BackCard from './BackCard';

const ReviewCards = () => {
  const { state, setActiveCard } = useContext(Context);
  const activeCard = state.activeCard;

  const [ isFlipped, flipCard ] = useState(false);
  const [ progress, setProgress ] = useState(0);

  const nextCard = (e) => {
    e.stopPropagation();
    if (activeCard === state.cards.length - 1) {
      setActiveCard(0);
      flipCard(false);
      updateProgress(0);
      return;
    }
    setActiveCard(activeCard + 1);
    flipCard(false);
    updateProgress(activeCard + 1);
  }

  const previousCard = (e) => {
    e.stopPropagation();
    if (activeCard === 0) {
      setActiveCard(state.cards.length - 1)
      flipCard(false);
      updateProgress(state.cards.length - 1);
      return;
    }
    setActiveCard(activeCard - 1);
    flipCard(false);
    updateProgress(activeCard - 1);
  }

  const handleCardFlip = (e) => {
    e.stopPropagation();
    flipCard(prevState => !prevState);
    updateProgress(activeCard + 1);
  }

  const updateProgress = (progress) => {
    setProgress(((progress) / state.cards.length) * 100);
  }

  return (
    <div>
      <h2 className="text-center font-weight-bold mb-3"><i className="fas fa-book-open icon"></i> Review</h2>
      { state.cards.length === 0 ?
        <h2 className="text-center font-weight-bold pt-4">Create flash cards first!</h2>
      : <div>
          <ProgressBar complete={progress} />
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" infinite={true}>
            <FrontCard
              key="front"
              question={state.cards[activeCard].question}
              previousCard={(e) => previousCard(e)}
              nextCard={(e) => nextCard(e)}
              handleCardFlip={(e) => handleCardFlip(e)}
            />
            <BackCard key="back" answer={state.cards[activeCard].answer} handleCardFlip={(e) => handleCardFlip(e)} />
          </ReactCardFlip>
          <div className="text-center">Click on card to flip sides</div>
        </div>
      }
    </div>
  )
}

export default ReviewCards;
