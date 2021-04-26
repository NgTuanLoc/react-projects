import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";
import { Fragment } from "react";

function App() {
  return (<Fragment>
    <Home/>
    <Sidebar/>
    <Modal/>
  </Fragment>);
}

export default App;
