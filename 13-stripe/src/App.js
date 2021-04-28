import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Submenu from "./components/Submenu";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </Fragment>
  );
}

export default App;
