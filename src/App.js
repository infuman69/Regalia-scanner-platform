import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './components/homepage/Homepage';
import Scanpage from './components/scanpage/Scanpage';
import Regaliapass from './components/regalia_pass/Regaliapass';

function App() {
  return (
      <div className='App'>

      <Router>
        <Switch>
          <Route exact={true} path="/">
            <Homepage/>
          </Route>
          <Route exact={true} path="/scan">
            <Scanpage/>
          </Route>
          <Route exact={true} path="/:id">
            <Regaliapass/>
          </Route>
        </Switch>
      </Router>
      </div>

  );
}

export default App;
