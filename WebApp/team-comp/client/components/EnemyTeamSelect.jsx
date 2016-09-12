import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import HeroListItem from './HeroListItem.jsx';

EnemyTeam = new Mongo.Collection("enemyTeam");

export default class EnemyTeamSelect extends TrackerReact(Component) {

  processEnemy(event) {
    event.preventDefault();
    console.log('setting Enemy Team');
    var enemyPlayer1 = this.refs.enemyPlayer1.value.trim();
    var enemyPlayer2 = this.refs.enemyPlayer2.value.trim();
    var enemyPlayer3 = this.refs.enemyPlayer3.value.trim();
    var enemyPlayer4 = this.refs.enemyPlayer4.value.trim();
    var enemyPlayer5 = this.refs.enemyPlayer5.value.trim();
    var enemyPlayer6 = this.refs.enemyPlayer6.value.trim();

    var enemyTeam = [enemyPlayer1, enemyPlayer2, enemyPlayer3, enemyPlayer4, enemyPlayer5, enemyPlayer6];
    console.log(enemyTeam);
    
    
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

            <select ref="enemyPlayer4">
              {this.listHeroes().map( (hero) =>{
                return <HeroListItem key={hero._id._str} heroItem={hero} />
              })}
            </select>

            <select ref="enemyPlayer5">
              {this.listHeroes().map( (hero) =>{
                return <HeroListItem key={hero._id._str} heroItem={hero} />
              })}
            </select>

            <select ref="enemyPlayer6">
              {this.listHeroes().map( (hero) =>{
                return <HeroListItem key={hero._id._str} heroItem={hero} />
              })}
            </select>

          </div>

          <br />
          
          <input type="button" onClick={this.processEnemy.bind(this)} value="Submit" />
        </form>
      </div>
    )
  }
  
}