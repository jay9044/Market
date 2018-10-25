import React from "react";
import { render } from "react-dom";
import StarRatings from "react-star-ratings";
import "../styles/Stall.scss";

class Stall extends React.Component {
  constructor() {
    super();
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.clickStallMore(this.props.stall.id);
  }

  render() {
    let cardlogo =
      this.props.stall.takes_card === true
        ? "/static/img/logos/visa.png"
        : "/static/img/logos/cash.png";
    let cartlogoalt =
      this.props.stall.takes_card === true
        ? "This stall accepts payment by credit card"
        : "This stall only accepts payments in cash";

    return (
      <div className="stall__info hvr-forward">
        <h3>{this.props.stall.title}</h3>
        <img className="stall__image" src={this.props.stall.image} />

        <StarRatings
          rating={Number(this.props.stall.average_rating)}
          starRatedColor="#0BBC62"
          numberOfStars={5}
          className="star__rating"
          starDimension="20px"
          starSpacing="5px"
        />
        <img src={cardlogo} alt={cartlogoalt} />
        <h3>{this.props.stall.category}</h3>
        <button onClick={this.submitHandler}>more info</button>
      </div>
    );
  }
}

export default Stall;
