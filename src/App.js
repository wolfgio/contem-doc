// @flow
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch, 
  Route,

} from 'react-router-dom';

import createStore from './Redux/store';

import Home from './pages/home/Home';
import Terminal from './pages/Terminal';
import Desembaraco from './pages/Desembaraco';

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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/terminal" component={Terminal} />
            <Route exact path="/desembaraco" component={Desembaraco} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
