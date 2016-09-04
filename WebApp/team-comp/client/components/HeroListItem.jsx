import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class HeroListItem extends Component {

  render() {
    var heroName = this.props.heroItem.name;
    return (
        <option value={heroName}>{heroName}</option>
    )
  }

}