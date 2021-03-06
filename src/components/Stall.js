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
        
        <div onClick={this.submitHandler} className="stall">
        <img className="stall__image" src={this.props.stall.image}/>
        <div className="stall__wrapper">
        <h2>{this.props.stall.title}</h2>

        <h3 className="stall__average">(Average Rating)</h3>
        <StarRatings className="ratings"
          rating={Number(this.props.stall.average_rating)}
          starRatedColor="#f46350"
          numberOfStars={5}
          className="star__rating"
          starDimension="15px"
          starSpacing="5px"
        />
            <div className="stall__lowrow">
            <h3>{this.props.stall.category}</h3>
            <img className="stall__credit" src={cardlogo} alt={cartlogoalt}/>
            </div>
            </div>
            {/* <hr className="line"></hr> */}
        {/* <button onClick={this.submitHandler}>more info</button> */}
      </div>
    );
  }
}

export default Stall;
