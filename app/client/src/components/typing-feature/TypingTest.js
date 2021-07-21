import React, { Component } from 'react'
import TextPreview from './TextPreview'
import Speed from './Speed'
import Accuracy from './Accuracy'



// typing speed/accuracy test

// what the state is reset to when we click "restart"
const initialState = {
    text: 'Test test',
    userInput: '',
    totalSymbols: 0,
    correctSymbols: 0,
    sec: 0,
    started: false,
    finished: false
}

export class TypingTest extends Component {

    state = initialState

    // set state back to empty once we restart
    onRestart = () => {
        this.setState(initialState)
    }

    // when the user types, set the userInput state to whatever they typed
    // start the timer
    // if they finished typing, stop timer
    onUserInputChange = (e) => {
        const value = e.target.value
        this.setTimer()
        this.onFinish(value)
        this.setState({
            userInput: value,
            correctSymbols: this.countCorrectSymbols(value),

        })
    }

    onFinish(userInput){
        // if user input === the preview text
        if (userInput === this.state.text){
            //stop timer
            clearInterval(this.interval);

            //set finished to true
            this.setState({
                finished: true
            })

        }
    }

    setTimer(){
        // if the timer hasn't started, turn it on
        if(this.state.started === false){
            this.setState({started: true});
            // run function each second
            this.interval = setInterval(()=>{
                // instead of passing object, pass function
                // setState is async, if using multiiple setStates in a row it can cause issues
                this.setState(prevProps => {
                    // incrementing number of seconds
                    return {sec: prevProps.sec + 1}
                })
            }, 1000)
        }
    }

    countCorrectSymbols(userInput){

        // get rid of white spaces
        const text = this.state.text.replace(' ', '')

        // get rid of white spaces in userInput, turn into array, then filter through
        // check if user's currentChar is = to same letter as on preview text. 
        // .length gives us the number of correct letters
        return userInput.replace(' ', '').split('').filter((currentChar, i) => currentChar === text[i]).length

    }

    render() {
        return (

            <div className="container mt-5 mb-5">
                <div className="row">

                    <div className="col-md-8 offset-md-2">
                        <h4 className="col-md-8 offset-md-4">Test your typing skills</h4>
                        {/* what user needs to type */}
                        {/* pass text and userInput from state as props to compare against each other for errors etc. */}
                        <TextPreview text={this.state.text} userInput={this.state.userInput}/>
                        {/* where the user will type */}
                        {/* if user is done typing, make textarea readOnly */}
                        <textarea
                        value={this.state.userInput}
                        onChange={this.onUserInputChange}
                        className="form-control mb-3"
                        placeholder="Start typing..."
                        readOnly={this.state.finished}
                        ></textarea>
                        {/* speed calculated by WPM */}
                        <Speed sec={this.state.sec} correctSymbols={this.state.correctSymbols}/>
                        <Accuracy text={this.state.text} correctSymbols={this.state.correctSymbols}></Accuracy>
                        <div className="text-right">
                            <button className="btn btn-light" onClick={this.onRestart}>Restart</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default TypingTest
