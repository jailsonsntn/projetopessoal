import React, { Component } from "react";
import { IoIosArrowDown} from "react-icons/io";
import Header from './components/Header/';


class Main extends Component {
  render() {
    return (
        <section id="header">
          <div>
            <Header />
          </div>
          <div id="main">
            <div id="icon"className="vibrate-1">
              <IoIosArrowDown />
            </div>
          </div>
        </section>
    );
  }
}
export default Main;
