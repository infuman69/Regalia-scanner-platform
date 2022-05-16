import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './components/homepage/Homepage';
import Scanpage from './components/scanpage/Scanpage';
import Regaliapass from './components/regalia_pass/Regaliapass';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
      </>
  );
}

export default App;
