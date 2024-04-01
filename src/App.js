import React from "react";
import Main from "./components/Main/Main";
import Sum from "./components/Main/Sum";
import Loading from "./components/Main/Loading";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* 맨 처음 경로를 main으로 지정 */}
          <Route path="/" element={<Navigate to="/main" />} />
          <Route path="/main" element={<Main />} />
          <Route path="/sum" element={<Sum />} />
          <Route path="/Loading" element={<Loading />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
