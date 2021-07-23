import React, { useState } from 'react'
import Start from '../components/pages/Quiz/Start'
import Quiz from '../components/pages/Quiz/Quiz'


function QuizApp() {

  const [start, setStart] = useState(false);

  return (
    <div className="d-flex w-100 justify-content-center align-items-center">
      <div>
          <div className="quiz">
              { start ? <Quiz /> : <Start props={setStart} />} 
          </div>
      </div>
    </div>

  );
}

export default QuizApp;

//     margin-left: 2em;
//background-color: white;