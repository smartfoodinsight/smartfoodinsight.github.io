import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Privacy from "./components/privacy/Privacy";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
