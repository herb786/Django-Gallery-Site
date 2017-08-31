import React, { Component } from 'react';
import request from 'request';

class Gallery extends Component {
    
  constructor(props) {
    super(props);
    const snake = {'name':'name','imageUrl':'url','caption':'caps'};
    this.state = {snakes : [snake,snake,snake]};
  }
  
  componentDidMount() {
    var self = this;
    request('http://127.0.0.1:8000/api/snakes', function (error, response, body) {
      var data = JSON.parse(body);
      const snake1 = data[0].fields;
      const snake2 = data[1].fields;
      const snake3 = data[2].fields;
      self.setState({snakes : [snake1, snake2, snake3]});
    });
  }
  
  render() {
    const snakes = this.state.snakes;
    return (
      <section className="hero is-dark">
      <div className="hero-body">
      <div className="container">
        <h1 className="title">Snake Gallery</h1>
        <div className="columns">
        <div className="column">Name: {snakes[0].name}<br/>
        <img src={snakes[0].imageUrl} alt={snakes[0].caption} />
        </div>
        <div className="column">Name: {snakes[1].name}<br/>
        <img src={snakes[1].imageUrl} alt={snakes[1].caption} />
        </div>
        <div className="column">Name: {snakes[2].name}<br/>
        <img src={snakes[2].imageUrl} alt={snakes[2].caption} />
        </div>
        </div>
      </div>
      </div>
      </section>
    );
  }
}

export default Gallery;