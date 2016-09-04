import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import EnemyTeamSelect from './EnemyTeamSelect.jsx';
import MainHeroSubmit from './MainHeroDB/MainHeroSubmit.jsx';

export default class App extends Component {

  render() {
    return (
      <div>
        <h1>Team Comp Generator</h1>

        <div>
          
          <h3>Enemy Team</h3>

          <EnemyTeamSelect />

        </div>

      </div>
    )
  }

}

