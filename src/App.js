// @flow
import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import LoginPage from './Pages/Login';

type Props = {};
type State = { isLogged: Boolean };
class App extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = { isLogged: false };
  }

  render() {
    const { isLogged } = this.state;
    if (!isLogged) return <LoginPage />;

    return (
      <Router>
        <Route exact path="/" />
      </Router>
    );
  }
}

export default App;
