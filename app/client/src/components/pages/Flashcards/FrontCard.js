import React from 'react';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';

const FrontCard = (props) => {

  return (
    <div className="container cursor-pointer" style={{backgroundColor:'#4427C9', width:'500px', height:'300px' }} >
      <div onClick={props.handleCardFlip} className="row justify-content-center align-items-center card-review">
        <div className="col-md-1 col-2 text-center arrow-hover">
          <i onClick={props.previousCard} className="fas fa-chevron-left arrow"></i>
        </div>
        <div className="col-md-10 col-8">
          <h2 className="text-center font-weight-bold text-white review-text mt-5">
            {props.question}
          </h2>
        </div>
        <div>
        <FaChevronCircleLeft onClick={props.previousCard} className="text-white ml-5" style={{position:'absolute', marginRight:'10rem'}}/>
        <FaChevronCircleRight onClick={props.nextCard} className="text-white" style={{position:'absolute', marginLeft:'29rem'}} />
        </div>
      </div>
    </div>
  )
}

export default FrontCard;
