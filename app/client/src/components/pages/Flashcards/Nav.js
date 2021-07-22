import React from 'react'
import { FaCode } from 'react-icons/fa';

export default function Nav(props) {
  const setView = props.setView;
  const view = props.view;
  const setActiveCard = props.setActiveCard;
  let viewClass;
  let reviewClass;
  let createClass;

  if (view === 'view-cards') {
    viewClass = 'active';
    reviewClass = '';
    createClass = '';
  } else if (view === 'review-cards') {
    viewClass = '';
    reviewClass = 'active';
    createClass = '';
  } else if (view === 'create-card') {
    viewClass = '';
    reviewClass = '';
    createClass = 'active';
  }

  const handleReviewClick = () => {
    setActiveCard(0);
    setView('review-cards');
  }

  return (
    <div className="bg-main flash-card-nav">
    <nav className="navbar d-flex flex-column flex-md-row justify-content-end mb-4">
      <div className="navbar-brand mr-0">
        <h4 className=" cursor-pointer mono-font"><FaCode className="text-white"/> Coding Flashcards</h4>
      </div>
      <div className="ml-md-auto mono-font">
        <button onClick={handleReviewClick} className='btn m-1 rounded-0 btn btn-outline-light'>Review</button>
        <button onClick={() => setView('view-cards')} className='btn m-1 rounded-0 btn btn-outline-light'>View Cards</button>
        <button onClick={() => setView('create-card')} className='btn m-1 rounded-0 btn btn-outline-light'>Create Card</button>
      </div>
    </nav>
    </div>
  )
}
