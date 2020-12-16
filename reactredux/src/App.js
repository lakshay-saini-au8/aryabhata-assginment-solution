import React from "react";

class App extends React.Component {
  state = { data: null, convert: null, amount: "", result: 0 };
  handleSelect = (e) => {
    if (e.target.value !== "") {
      fetch(`https://api.exchangeratesapi.io/latest?base=${e.target.value}`)
        .then((res) => res.json())
        .then((res) =>
          this.setState((prevState) => {
            return { ...prevState, data: res.rates };
          })
        );
    } else {
      this.setState((prevState) => {
        return { ...prevState, data: null };
      });
    }
  };
  handleSelect2 = (e) => {
    this.setState((prevState) => {
      return { ...prevState, convert: e.target.value };
    });
  };
  handleInput = (e) => {
    this.setState((prevState) => {
      return { ...prevState, amount: e.target.value };
    });
  };

  onSubmitChange = (e) => {
    e.preventDefault();
    let converted =
      parseInt(this.state.data[this.state.convert]) *
      parseInt(this.state.amount);
    this.setState((prevState) => {
      return { ...prevState, result: converted };
    });
    console.log(parseInt("10"));
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmitChange}>
          <select onChange={this.handleSelect}>
            <option value="" defaultValue>
              Select Option
            </option>
            <option value="USD"> USD</option>
            <option value="INR"> IND</option>
            <option value="EUR"> EUR</option>
          </select>
          <select onChange={this.handleSelect2}>
            <option value="" defaultValue>
              Select Option
            </option>
            <option value="USD"> USD</option>
            <option value="INR"> IND</option>
            <option value="EUR"> EUR</option>
          </select>
          <input
            type="text"
            value={this.state.amount}
            onChange={this.handleInput}
          />
          <input type="submit" />
        </form>
        {this.state.result}
      </div>
    );
  }
}

export default App;
