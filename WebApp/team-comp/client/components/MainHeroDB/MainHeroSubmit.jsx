import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import AddCounter from './AddCounter.jsx';

Heroes = new Mongo.Collection("heroes");

var heroName;
var heroRole;

export default class MainHeroSubmit extends Component {

  addHero(event) {

    event.preventDefault();
    heroName = this.refs.heroName.value.trim();
    heroRole = this.refs.heroRole.value.trim();
    console.log('Hero already in database?');
    console.log(Heroes.find({"name": heroName}) == null);
    console.log('adding ' + heroName + ': ' + heroRole);
    Meteor.call('addMainHero', heroName, heroRole);

    this.refs.heroName.value = "";
    this.refs.heroRole.value = "";
  }

  resetHeroes(event) {
    event.preventDefault();
    Meteor.call("resetHeroes");
  }

  render() {
    return(
      <div className="main-hero-submit">
  
        <h1>Hero Insert</h1>
  
        <form className="main-hero-form">
          <input type="text" ref="heroName" placeholder="Hero Name" />
          <input type="text" ref="heroRole" placeholder="Hero Role" />
          <input type="button" onClick={this.addHero.bind(this)} value="Submit" />
        </form>

        <AddCounter />

        <input type="button" onClick={this.resetHeroes.bind(this)} value="Reset"/>

      </div>
    )
  }

}