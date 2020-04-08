import React from "react";
import Lab8aPage from "./pages/lab-8a";
import Lab8bPage from "./pages/lab-8b";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="Nav-panel">
          <nav style={{}}>
            <Link
              to="/lab-8a"
              style={{
                color: "#9BCCC1",
                paddingLeft: "10vw",
                paddingRight: "10vw",
                fontSize: "calc(18px + 2vmin)"
              }}
            >
              Lab 8a
            </Link>

            <Link
              to="/lab-8b"
              style={{
                color: "#9BCCC1",
                paddingLeft: "10vw",
                paddingRight: "10vw",
                fontSize: "calc(18px + 2vmin)"
              }}
            >
              Lab 8b
            </Link>
          </nav>
        </div>
        <Routes>
          <Route exact path="/" element={<Lab8aPage />} />
          <Route path="/lab-8a" element={<Lab8aPage />} />
          <Route path="/lab-8b" element={<Lab8bPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
