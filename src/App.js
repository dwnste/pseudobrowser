import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css';

const Home = (props) => {
  return <div className="home_wrapper">
      <p> Welcome home. </p>
      <img src="http://i52.tinypic.com/ibfjsw.jpg" alt="welcome home" />
    </div>
}

const Page = (props) => {
  return <iframe title="This is a unique title" src={props.src} frameBorder="0"></iframe>
}

class App extends Component {
  state = {
    src: ''
  }

  constructor(props) {
    super(props)

    this.router = undefined;
  }

  setUrl = (event) => {
    if(event.key === 'Enter') {
      let url;
      let src = document.getElementsByClassName('url_input')[0].value;
      try { 
        url = new URL(src) 
      } catch (e) {
        url = null
      }

      if (url) {
        this.router.history.push('/');
        this.setState({
          src: url
        });
      } else {
        this.router.history.push('/home');
      }
    }
  }

  componentDidMount() {
    this.router.history.push('/home');
  }

  render() {
    return (
      <Router ref={ el => this.router = el }>
        <div className="App">
          <div className="App-header">
            <button className="home_button">
              <Link to="/home"><i className="material-icons">home</i></Link>
            </button>
            <input className="url_input" type="text" onKeyPress={this.setUrl} />
          </div>
            <div>
              <Route exact path="/" render={() => ( <Page src={this.state.src}/> )} />
              <Route path="/home" component={Home} />
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
