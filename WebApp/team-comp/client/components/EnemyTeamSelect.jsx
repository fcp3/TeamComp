import React from 'react';
import ReactDOM from 'react-dom';

EnemyTeam = new Mongo.Collection("enemyTeam");

export default class EnemyTeamSelect extends React.Component {

  setEnemy(event) {
    event.preventDefault();
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


  
  render() {
    return(
      <div className="enemy-player-select">
        <form className="enemy-team" onSubmit={this.setEnemy.bind(this)}>
          <div>
            <select ref="enemyPlayer1">
              <option value="Genji">Genji</option>
              <option value="McCree">McCree</option>
              <option value="Pharah">Pharah</option>
              <option value="Reaper">Reaper</option>
              <option value="Soldier: 76">Soldier: 76</option>
              <option value="Tracer">Tracer</option>
            </select>

            <select ref="enemyPlayer2">
              <option value="Genji">Genji</option>
              <option value="McCree">McCree</option>
              <option value="Pharah">Pharah</option>
              <option value="Reaper">Reaper</option>
              <option value="Soldier: 76">Soldier: 76</option>
              <option value="Tracer">Tracer</option>
            </select>

            <select ref="enemyPlayer3">
              <option value="Genji">Genji</option>
              <option value="McCree">McCree</option>
              <option value="Pharah">Pharah</option>
              <option value="Reaper">Reaper</option>
              <option value="Soldier: 76">Soldier: 76</option>
              <option value="Tracer">Tracer</option>
            </select>
          </div>

          <br />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
  
}