import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import App from './components/App.jsx';
import MainHeroSubmit from './components/MainHeroDB/MainHeroSubmit.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout,{
      content: (<App />)
    });
  }
  
});

FlowRouter.route('/addhero', {
  action() {
    mount(MainLayout,{
      content: (<MainHeroSubmit />)
    });
  }
});