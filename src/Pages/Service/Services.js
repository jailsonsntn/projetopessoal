import React, { Component } from "react";

import  { Wrapper } from '../../styles/styleService';
import Main from '../../Main';


class Services extends Component {
  render() {
    return (
      <Wrapper>
        <section id="services">
        <div>
            <Main />
          </div>
          <div  class="produtos">
            <h1>Cases</h1>
              <h2>Cases iPhone</h2>
                <p>Diversas cores e modelos diponíveis com e sem proteção de camera</p>
              <h2>Cases Samsung</h2>
                <p>Diversas cores e modelos diponíveis com e sem proteção de camera</p>
              <h2>Cases Xiaomi</h2>
                <p>Diversas cores e modelos diponíveis com e sem proteção de camera</p>
              <h2>Cases Motorola</h2>
                <p>Diversas cores e modelos diponíveis com e sem proteção de camera</p>
          </div>
        </section>
      </Wrapper>
    );

  };

}

export default Services;
