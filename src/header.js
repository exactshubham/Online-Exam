import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router';
import App from './App';
import Admin from './admin';
import './App.css';

var header = React.createClass({
  componentWillMount(){
    this.style={
      float:'right'
    }
  },
  render(){
    return(
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/" component={App} style={this.style}>&nbsp;Dashboard</Link>
        <Link to="/admin" component={Admin} style={this.style}>Admin | </Link>
        <h2>Welcome to XT Select</h2>
      </div>
    </div>
    )
  }
})


export default header;