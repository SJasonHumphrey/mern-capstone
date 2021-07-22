import React, { Component } from 'react';
import ViewCards from '../components/pages/Flashcards/ViewCards';
import ReviewCards from '../components/pages/Flashcards/ReviewCards';
import CreateCard from '../components/pages/Flashcards/CreateCard';
import Nav from '../components/pages/Flashcards/Nav';
import UpdateCard from '../components/pages/Flashcards/UpdateCard';
import { ContextProvider } from './pages/Flashcards/Context/context';

export default class Cards extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: 'create-card',
      cards: [],
      activeCard: null
    }
    this.setView = this.setView.bind(this);
    this.addCards = this.addCards.bind(this);
    this.deleteCards = this.deleteCards.bind(this);
    this.setActiveCard = this.setActiveCard.bind(this);
    this.editCards = this.editCards.bind(this);
  }

  componentDidMount() {
    const storedCards = JSON.parse(localStorage.getItem('flash-cards'));
    if (!storedCards) {
      return;
    } else if (storedCards.length > 0) {
      this.setState({ cards: storedCards });
    }
  }

  setView(newView) {
    this.setState({ view: newView })
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard addCards={this.addCards} setView={this.setView} />;
      case 'review-cards':
        return <ReviewCards />;
      case 'view-cards':
        return <ViewCards deleteCards={this.deleteCards} />;
      case 'update-cards':
        return <UpdateCard editCards={this.editCards} />;
      default:
        return null;
    }
  }

  saveCards() {
    const cards = JSON.stringify(this.state.cards);
    localStorage.setItem('flash-cards', cards)
  }

  addCards(card) {
    const cards = this.state.cards;
    const newCards = cards.concat(card);
    this.setState({ cards: newCards }, this.saveCards);
  }

  setActiveCard(i) {
    this.setState({ activeCard: i })
  }

  deleteCards() {
    const newCards = this.state.cards.slice(0);
    newCards.splice(this.state.activeCard, 1);
    this.setState({ cards: newCards }, this.saveCards);
  }

  editCards(card) {
    const newCards = this.state.cards.slice(0);
    newCards.splice(this.state.activeCard, 1, card);
    this.setState({ cards: newCards }, this.saveCards);
  }

  render() {
    const state = this.state;
    const setActiveCard = this.setActiveCard;
    const setView = this.setView;
    return (
      <div className="container-fluid p-0">
        <Nav setView={this.setView} view={this.state.view} setActiveCard={this.setActiveCard} />
        <ContextProvider value={{ state, setActiveCard, setView }} >
          {this.getView()}
        </ContextProvider>
      </div>
    );
  }
}
