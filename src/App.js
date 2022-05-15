import './App.css';
import { Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Scanpage from './components/scanpage/Scanpage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/scan" element={<Scanpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
