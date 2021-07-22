import React, { useState } from 'react'
import Start from '../components/pages/Quiz/Start'
import Quiz from '../components/pages/Quiz/Quiz'


function QuizApp() {

  const [start, setStart] = useState(false);

  return (
    <div>
        <div className="quiz d-flex justify-content-center">
            { start ? <Quiz /> : <Start props={setStart} />} 
        </div>
    </div>
  );
}

export default QuizApp;
