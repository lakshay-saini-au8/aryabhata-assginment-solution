import React from "react";
import defaultData from "./data";

class App extends React.Component {
  state = { data: null };
  handleSelect = (e) => {
    if (e.target.value !== "") {
      this.setState({ data: defaultData[e.target.value] });
    } else {
      this.setState({ data: null });
    }
  };
  render() {
    return (
      <div className="App">
        <form>
          <select onChange={this.handleSelect}>
            <option value="" selected>
              Select Option
            </option>
            <option value="psg"> Psg</option>
            <option value="up"> UP</option>
            <option value="uttarakhand"> Uttarakhand</option>
          </select>
        </form>
        {this.state.data && this.state.data.map((item) => <p>{item.title}</p>)}
      </div>
    );
  }
}

export default App;
