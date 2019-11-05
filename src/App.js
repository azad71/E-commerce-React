import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import Auth from './pages/auth/auth.component'

import './App.css';

 
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
			    <Route exact path='/' component={HomePage} />
        	<Route path='/shop' component={ShopPage} />
          <Route path='/auth' component={Auth} />
        </Switch>
      </div>
    );
  }
}

export default App;