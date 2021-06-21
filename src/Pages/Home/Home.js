import React, { Component } from "react";
import logo from "../../Archives/logoLaranja.png";
import { AiOutlineMobile } from "react-icons/ai";
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
          <div id="main">
            <div id="icon"className="vibrate-1">
              <AiOutlineMobile />
            </div>
          </div>


        </section>
      </Wrapper>
    );
  }
}

export default Home;
