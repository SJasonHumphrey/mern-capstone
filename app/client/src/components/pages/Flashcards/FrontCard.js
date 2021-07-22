import React from 'react';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';

const FrontCard = (props) => {

  return (
    <div className="container cursor-pointer drop-shadow" style={{backgroundColor:'#222F94', width:'500px', height:'300px' }} >
      <div onClick={props.handleCardFlip} className="row justify-content-center align-items-center card-review" style={{height:'100%'}} >
        {/* <div className="col-md-1 col-2 text-center arrow-hover p-0">
          <i onClick={props.previousCard} className="fas fa-chevron-left arrow"></i>
        </div> */}

        <div className=" col-1">
        <FaChevronCircleLeft onClick={props.previousCard} className="text-white" />
        </div>

        <div className="col-md-10 col-8  align-self-stretch flash-card-face">
          <p className="text-center text-white review-text mt-5 fs-3">
            {props.question}
          </p>
        </div>

        <div className=" col-1 ">
        <FaChevronCircleRight onClick={props.nextCard} className="text-white"/>
        </div>

      </div>
    </div>
  )
}

export default FrontCard;
