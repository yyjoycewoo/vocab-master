import React, { Component } from "react";
import "../styles/StudyList.css";
import Flashcard from "./Flashcard";

class StudyList extends Component {
  render() {
    const currCard = this.state.currentCard;
    const numCards = this.props.cards.length;
    const card = this.props.cards[currCard];

    console.log(this.props.cards)
    return (
      <div className="StudyList">
        { typeof(card) !== "undefined" && [
          <Flashcard key={card["key"]}
            id={card["key"]}
            setId={card["setId"]}
            question={card["question"]}
            answer={card["answer"]}
            color={card["color"]}
            display={this.props.mode} />,
          <button className="next btn btn-secondary" onClick={this.goToNextCard}>Next</button>,
          <div className="progress" >Progress: {currCard+1} / {numCards}</div>
        ]
        }
      </div>
    )
  }

  constructor(props) {
    super(props);
    this.state = { currentCard: 0};
    this.goToNextCard = this.goToNextCard.bind(this);
  }

  goToNextCard() {
    const numCards = this.props.cards.length;
    const nextCard = (this.state.currentCard + 1) % numCards;
    this.setState({currentCard: nextCard});
  }
}
export default StudyList;
