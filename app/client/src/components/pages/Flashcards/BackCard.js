import React from 'react';

const BackCard = props => {
  return (
    <div className="container cursor-pointer bg-info" style={{width:'500px', height:'300px'}} >
      <div onClick={props.handleCardFlip} className="row justify-content-center align-items-center card-review">
        <div className="col-md-10 col-8">
          <h2 className="text-center font-weight-bold text-white review-text mt-5">
            {props.answer}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BackCard;
