// @flow
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import createStore from './Redux/store';

import Home from './pages/home/Home';

type Props = {};
type State = {};

class App extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const store = createStore();

    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/terminal" component={Terminal} />
          <Route exact path="/terminal" component={Terminal} />
        </Router>
      </Provider>
    );
  }
}

export default App;
