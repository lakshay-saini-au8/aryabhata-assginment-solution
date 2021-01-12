import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class App extends Component {
  responseFacebook = (response) => {
    console.log(response);
  };
  render() {
    return (
      <FacebookLogin
        appId="191045292645821"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />
    );
  }
}
