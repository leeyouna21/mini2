import Main from "./components/Main/Main";
import Sum from "./components/Main/Sum";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/Sum" element={<Sum />} />
      </Routes>
    </Router>
    </div>
  );
  
}

export default App;