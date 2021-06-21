import React, { Component } from "react";
import  { Wrapper } from '../../styles/styleContact';
import Main from '../../Main';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineWhatsApp } from "react-icons/ai";


class Contact extends Component {

  render() {
    return (
      <Wrapper>
        <div>
            <Main />
        </div>
        <section id="contact">
            <h1>
              CONTATOS
            </h1>

          <div className="whatsapp">
            <AiOutlineWhatsApp className="logowpp"/>
            <a href="https://wa.me/message/WVBMSKCHBB4MK1">
              (13)991896964
            </a>
            <p>
              Clique no link do WhatsApp para acessar!
            </p>
          </div>

          <div className="instagram">
            <AiOutlineInstagram className="logoinst"/>
            <a href="https://www.instagram.com/smartpoint013/">
             @smartpoint013
            </a>
            <p>
              Clique no link do Instagram para acessar!
            </p>
          </div>

          <div className="facebook">
            <AiOutlineFacebook  className="logoface"/>
            <a href="https://www.facebook.com/smartpoint013">
              /Smartpoint013
            </a>
            <p>
              Clique no link do Facebook para acessar!
            </p>
          </div>


        </section>
      </Wrapper>
    );
  }
}

export default Contact;
