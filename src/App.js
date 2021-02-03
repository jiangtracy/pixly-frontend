import './App.css';
import {Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

import Edit from './Edit'
import Homepage from './Homepage';
import Pictures from './Pictures';
/**  APP
 * App -> Edit  -> Picture 
 *        Homepage
 * */


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route exact path="/images">
          <Pictures/>
        </Route>
        <Route exact path="/images/:id">
          <Edit/>
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
