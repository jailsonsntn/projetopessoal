import React, { Component } from "react";
import logo from "../../Archives/logoLaranja.png";
import { Wrapper } from "../../styles/styleHome";

import Main from "../../Main";

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <section>
          <div>
            <Main />
          </div>

          <div id="home" class="textone">
            <img src={logo} class="logo" alt="SmartPoint" />
            <h1>
              Loja especializa em acessórios para smartphones na baixada
              Santista
            </h1>
          </div>
        </section>
      </Wrapper>
    );
  }
}

export default Home;
