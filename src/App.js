import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StaticRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'

class App extends Component {

  render() {
    return (
      <StaticRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </StaticRouter>
    );
  }
}

function mapStateToProps(state) {
  const { isFetching, items } = state

  return {
    isFetching,
    items
  }
}

export default connect(mapStateToProps)(App)