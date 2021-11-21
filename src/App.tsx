import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
