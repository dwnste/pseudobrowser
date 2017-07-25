import React, { Component } from 'react';
import { Route, Link, withRouter, Switch } from 'react-router-dom';

import './App.css';

import Home from './Home';
import Page from './Page';


class App extends Component {

  setUrl = (event) => {
    if(event.key === 'Enter') {
      let src = document.getElementsByClassName('App__url_input')[0].value;
      this.props.history.push(`/page/${src}`);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App__header">
          <button className="App__home_button">
            <Link to="/home"><i className="material-icons">home</i></Link>
          </button>
          <input className="App__url_input" type="text" onKeyPress={this.setUrl} />
        </div>
          <Switch>
            <Route exact path="/" component = {Home} />
            <Route path="/home" component = {Home} />
            <Route path="/page/:url" render = {() => ( <Page src = { this.props.location.pathname.slice(6) } /> )} />
          </Switch>
      </div>
    );
  }
}


export default withRouter(App);
