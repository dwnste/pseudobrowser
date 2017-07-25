import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

import './App.css';

import Home from './Home';
import Page from './Page';


class App extends Component {
  state = {
    src: ''
  }

  setUrl = (event) => {
    if(event.key === 'Enter') {
      let url;
      let src = document.getElementsByClassName('App__url_input')[0].value;
      try { 
        url = new URL(src) 
      } catch (e) {
        url = null
      }

      if (url) {
        this.props.history.push('/');
        this.setState({
          src: url
        });
      } else {
        this.props.history.push('/home');
      }
    }
  }

  componentDidMount() {
    this.props.history.push('/home');
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
          <div>
            <Route exact path="/" render={() => ( <Page src={this.state.src}/> )} />
            <Route path="/home" component={Home} />
          </div>
      </div>
    );
  }
}


export default withRouter(App);
