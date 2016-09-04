import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import HeroListItem from '../HeroListItem.jsx';

var heroToCounter;
var counterName;
export default class AddCounter extends TrackerReact(Component) {

  addCounter(event) {
    event.preventDefault();
    heroToCounter = this.refs.heroToCounter.value.trim();
    counterName = this.refs.counterAlt.value.trim();
    console.log('adding ' + counterName + ' as counter to ' + heroToCounter);
    Meteor.call('addCounter', heroToCounter, counterName);

    this.refs.counterAlt.value = "";
  }

  listHeroes() {
    console.log('checking listHeroes');
    return Heroes.find().fetch();
  }

  render() {

    return (
      <div className="counter-tool">
        <h3>Add Hero Counters</h3>

        <h5>Hero to Add Counter</h5>
        <select ref="heroToCounter">
          {this.listHeroes().map((hero) => {
            return <HeroListItem key={hero._id._str} heroItem={hero}/>
          })}
        </select>

        <h5>Add Counter</h5>
        <form className="counter-submit">
          <input type="text" ref="counterAlt" placeholder="Counter Name" />
          <input type="button" onClick={this.addCounter.bind(this)} value="Add Counter" />
        </form>


      </div>
    )

  }
}