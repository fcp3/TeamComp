import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import HeroListItem from './HeroListItem.jsx';

EnemyTeam = new Mongo.Collection("enemyTeam");

export default class EnemyTeamSelect extends TrackerReact(Component) {

  setEnemy(event) {
    event.preventDefault();
    console.log('setting Enemy Team');
    var enemyPlayer1 = this.refs.enemyPlayer1.value.trim();
    var enemyPlayer2 = this.refs.enemyPlayer2.value.trim();
    var enemyPlayer3 = this.refs.enemyPlayer3.value.trim();
    var enemyTeam = [enemyPlayer1, enemyPlayer2, enemyPlayer3];
    console.log(enemyTeam);

    Meteor.call('resetEnemy');

    for( i = 0; i < enemyTeam.length; i++) {
      var enemyHero = enemyTeam[i];
      Meteor.call('setEnemyTeam', enemyHero);
    }
  }

  listHeroes() {
    return Heroes.find().fetch();
  }


  
  render() {

    return(
      <div className="enemy-player-select">
        <form className="enemy-team">
          <div>

            <select ref="enemyPlayer1">
              {this.listHeroes().map( (hero) =>{
                return <HeroListItem key={hero._id._str} heroItem={hero} />
              })}
            </select>

            <select ref="enemyPlayer2">
              {this.listHeroes().map( (hero) =>{
                return <HeroListItem key={hero._id._str} heroItem={hero} />
              })}
            </select>

            <select ref="enemyPlayer3">
              {this.listHeroes().map( (hero) =>{
                return <HeroListItem key={hero._id._str} heroItem={hero} />
              })}
            </select>
          </div>

          <br />
          
          <input type="button" onClick={this.setEnemy.bind(this)} value="Submit" />
        </form>
      </div>
    )
  }
  
}