import React, { Component} from 'react';
import Form from '../Flashcards/Form';


export default class CreateCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const addCards = this.props.addCards;
    addCards(this.state)
    this.handleReset();
  }

  handleReset() {
    const setView =  this.props.setView;
    this.setState({
      question: '',
      answer: ''
    })
    setView('view-cards');
  }

  render() {
    return (
      <div>
        <h2 className="text-center font-weight-bold mb-3 mono-font ">Create New Card</h2>
        <div className="container">
          <Form
            card={this.state}
            change={(e) => this.handleChange(e)}
            reset={this.handleReset}
            submit={(e) => this.handleSubmit(e)}
          />
        </div>
      </div>
    )
  }
}
