import React, { Component } from "react";

class Test extends Component {
  state = { data: "hello" };
  componentDidMount() {
    fetch(
      "https://developerfunnel.herokuapp.com/hotellist/1?hcost=12000&lcost=6000"
    )
      .then((res) => {
        console.log("first", res);
        return res.json();
      })
      .then((res) => this.setState({ data: res }));
  }
  testFunc = () => {
    console.log(this);
    this.setState({ data: "changed state" });
  };

  render() {
    return (
      <div>
        {JSON.stringify(this.state)}
        <button onClick={this.testFunc}>Change State</button>
        <button onClick={this.clgtest}>Change Data</button>
        <br />
        {this.props.msg}
      </div>
    );
  }
}

export default Test;
