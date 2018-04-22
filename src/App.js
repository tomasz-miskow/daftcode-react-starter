import { hot } from 'react-hot-loader';
import * as React from 'react';
import Home from './view/Home';
import Menu from './components/Menu';
import Counter from './components/Counter';

import './styles/theme.sass';

const MENU_ITEMS = [
  { name: 'Home' },
  { name: 'Search' },
  { name: 'Contact' },
];

function f() {
  console.log('success'); // eslint-disable-line
}

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main>
        <Menu items={MENU_ITEMS} />
        <Home username="DaftCoder" />
        <Counter from={10} to={0} onSuccess={f} />
        <Counter from={60} to={0} onSuccess={f} />
        <Counter from={120} to={0} onSuccess={f} />
        <Counter from={180} to={0} onSuccess={f} />
      </main>
    );
  }
}

export default hot(module)(App);
