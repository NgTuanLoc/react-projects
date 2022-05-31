import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Movie from "./components/SingleMovie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/movies/:id" element={<Movie />} />
    </Routes>
  );
}

export default App;
