import React from 'react';


const BackCard = props => {
  return (
    <div className="container cursor-pointer bg-pink drop-shadow" style={{width:'500px', height:'300px'}} >

      <div onClick={props.handleCardFlip} className="row justify-content-center align-items-center card-review" style={{height:'100%'}} >
        <div className="col-1 "></div>

        <div className="col-md-10 col-8 align-self-stretch flash-card-face">
          <p className="text-center text-white review-text mt-5 fs-3">
            {props.answer}
          </p>
        </div>

        <div className="col-1 "></div>

      </div>

    </div>
  );
};

export default BackCard;
