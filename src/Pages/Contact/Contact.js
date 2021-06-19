import React, { Component } from "react";
import  { Wrapper } from '../../styles/styleContact';
import Main from '../../Main';


class Contact extends Component {

  render() {
    return (
      <Wrapper>
        <div>
            <Main />
          </div>
        <div id="contact">
          <h1>TEXT4</h1>
        </div>
      </Wrapper>
    );
  }
}

export default Contact;
