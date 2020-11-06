import React from 'react';
import CaracterList from './Caracters/CaracterList'
import './App.css';
import {Route, Switch} from 'react-router-dom'
import SecondPg from './SecondPage/SecondPg'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route  component={CaracterList} path="/" exact/>
      <Route component={SecondPg} path="/:id" />
      </Switch>
    </div>
  );
}

export default App;
