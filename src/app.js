import React from 'react';

import ToDo from './components/todo/todo.js';
import settingProvider from './context/settingContext.js';
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

export default class App extends React.Component {
  render() {
    return (
      <settingProvider>

        <ToDo />
      </settingProvider>
    );
  }
}
