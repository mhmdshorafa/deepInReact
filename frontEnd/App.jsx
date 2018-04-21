'user strict';

import React, { Component } from 'react';
import { getDevices } from './actions/statisticsActions'
import Statics from './statistics_page'
import { Header } from 'semantic-ui-react';
class App extends Component {
  render() {
    return <div>
      <Header as='h2' attached='top' Float Left>
      <img className= 'image' src='https://scontent.fjrs2-1.fna.fbcdn.net/v/t1.15752-9/31081536_10156576182789396_5423082804671938560_n.png?_nc_cat=0&oh=bd8c5310f68a7a269b6fdca0f5e3feaa&oe=5B6A883D'/>
    </Header><Statics /></div>;
  }
}

module.exports = App;
