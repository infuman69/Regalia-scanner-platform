import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from './components/homepage/Homepage';
import Scanpage from './components/scanpage/Scanpage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/scan" element={<Scanpage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
