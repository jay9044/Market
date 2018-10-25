import React from "react";
import Stalls from "./Stalls";
import Map from "./Map";
import Nav from "./Nav";
import Filter from "./Filter";

class MarketApp extends React.Component {
  constructor() {
    super();
    this.state = {
      stalls: [],
      filteredStalls: [],
      desRatingFilter: false,
      hidefilter: false
    };
    this.stallFetch = this.stallFetch.bind(this);
    this.receiveFilteredResults = this.receiveFilteredResults.bind(this);
    this.receiveDesRatingFilter = this.receiveDesRatingFilter.bind(this);
    this.desRatingFilterHandle = this.desRatingFilterHandle.bind(this);
    this.hidefilter = this.hidefilter.bind(this);

  }

  componentDidMount() {
    this.stallFetch();
  }

  hidefilter(){
this.setState({hidefilter:!this.state.hidefilter})
  }

  stallFetch() {
    fetch("/api/market_stall/")
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.setState({
          stalls: data,
          filteredStalls: data
        });
      });
  }

  desRatingFilterHandle(array) {
    let newArray = [...array];
    if (this.state.desRatingFilter == true) {
      newArray.sort(function(a, b) {
        return b.average_rating - a.average_rating;
      });
      this.receiveFilteredResults(newArray);
    } else {
      newArray.sort(function(a, b) {
        return a.id - b.id;
      });
      this.receiveFilteredResults(newArray);
    }
  }

  receiveDesRatingFilter() {
    this.setState(
      {
        desRatingFilter: !this.state.desRatingFilter
      },
      () => this.desRatingFilterHandle(this.state.filteredStalls)
    );
  }

  receiveFilteredResults(filteredStalls) {
    this.setState({
      filteredStalls: filteredStalls
    });
  }

  componentDidMount() {
    this.stallFetch();
  }

  // POST REVIEW should ==
  // {market_stall_id: 1,user_name: "Chris",rating: 5, review: "sublime"}

  render() {
    return (
      <div>
        <Nav />
        <Map />
        <Filter
          filteredStalls={this.state.filteredStalls}
          stalls={this.state.stalls}
          filteredResultsReceiver={this.receiveFilteredResults}
          desRatingFilter={this.receiveDesRatingFilter}
        />
        <Stalls
          stalls={this.state.stalls}
          filteredStalls={this.state.filteredStalls}
          hidefilter={this.hidefilter}
        />
      </div>
    );
  }
}

export default MarketApp;
