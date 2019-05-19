import React, { Component } from 'react';
import Main from './Components/JS/MainComponent';
import Content from './Components/JS/ContentComponent'
import './App.css';
import { Route, Switch } from 'react-router' ;
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCoffee,faComment,faRetweet,faHeart} from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee,fab,faComment,faRetweet,faHeart)
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/sub' component={Content}/>
        </Switch>
      </div>
    );
  }
}
export default App;
