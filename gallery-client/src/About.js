import React, { Component } from 'react';
import request from 'request';

class About extends Component {
  
  constructor(props) {
    super(props);
    this.state = {info:{}};
  }
  
  componentDidMount() {
    var self = this;
    request('http://127.0.0.1:8000/api/info', function (error, response, body) {
      var data = JSON.parse(body);
      self.setState({ info : data[0].fields });
    });
  }
  
  render() {
    return (
    <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">About</h1>
        <h3>Site Name: {this.state.info.title}</h3>
        <h3>Author: {this.state.info.author}</h3>
        <h3>E-mail: {this.state.info.email}</h3>
      </div>
      </div>
      </section>
    );
  }
}

export default About;