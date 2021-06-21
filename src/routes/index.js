import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Route from './Route';

import Home from "../Pages/Home/Home";
import Services from "../Pages/Service/Services";
import Contato from "../Pages/Contact/Contact";


export default function Routes() {
  return (
    <Switch>
      <Redirect from="/home" to="/" />

      <Route path="/" exact component={Home} />
      <Route path="/products" component={Services}/>
      <Route path="/contact" component={Contato}/>
    </Switch>
  );
}

