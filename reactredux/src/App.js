import React, { Component } from "react";

class App extends Component {
  state = { currentDate: null, imgUrl: null };

  handelchange = (e) => {
    e.preventDefault();
    const api = async (data) => {
      const img = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=ri0EZkle2DPanZWtyS8oZFgC4coub86CDtV5OiYV&date=${data}`
      );
      const { url } = await img.json();
      this.setState((prev) => ({ ...prev, imgUrl: url }));
    };
    api(e.target.value);
    this.setState((prev) => ({ ...prev, currentDate: e.target.value }));
  };

  render() {
    return (
      <>
        <form>
          {/* <select onChange={this.handleSelect}>
            <option value="" defaultValue>
              Select Option
            </option>
            <option value="USD"> USD</option>
            <option value="INR"> IND</option>
            <option value="EUR"> EUR</option>
          </select> */}
          <input type="date" onChange={this.handelchange} />
        </form>
        {this.state.imgUrl && <img src={`${this.state.imgUrl}`} alt="img" />}
      </>
    );
  }
}

export default App;
