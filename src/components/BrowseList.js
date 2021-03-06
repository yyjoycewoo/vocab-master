import React, { Component } from "react";
import "../styles/BrowseList.css";
import Flashcard from "./Flashcard";
import AddCard from "./AddCard";

class BrowseList extends Component {
  render() {
    return (
      <div className="BrowseList">
        {this.renderCards()}
        <AddCard addCard={this.addCard} />
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  renderCards() {
    return this.props.cards.map(card => (
      <Flashcard key={card["key"]}
        id={card["key"]}
        question={card["question"]}
        setId={card["setId"]}
        answer={card["answer"]}
        removeCard={this.removeCard}
        display={this.props.mode}
        color={card["color"]}/>
    ));
  }

  addCard(newCard) {
    const keyCounter = this.props.cards.length + 1;
    newCard["key"] = keyCounter;
    this.props.addCardToSet(newCard);
  }

  removeCard(setId, cardId) {
    this.props.removeCardFromSet(setId, cardId);
  }



}

export default BrowseList;
