import React, { Component } from "react";
import Gift from "./Gifts";
import { max_number } from "./helper/index";
class App extends Component {
  state = {
    gifts: []
  };
  addGift = () => {
    const { gifts } = this.state;
    const ids = this.state.gifts.map(gift => gift.id);
    const max_id = max_number(ids);
    gifts.push({ id: max_id + 1 });
    this.setState({ gifts });
  };
  removeGift = id => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id);
    this.setState({ gifts });
  };
  render() {
    return (
      <div className="app">
        <h2>Gifts Giver</h2>
        <div className="gifts-list">
          {this.state.gifts.map(gift => {
            return (
              <Gift gift={gift} removeGift={this.removeGift} key={gift.id} />
            );
          })}
        </div>
        <button className="btn-add" onClick={this.addGift}>
          Add Gifts
        </button>
      </div>
    );
  }
}

export default App;
