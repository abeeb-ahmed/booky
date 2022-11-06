import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/home/Home";
import Lists from "./screens/lists/Lists";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lists" element={<Lists />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
