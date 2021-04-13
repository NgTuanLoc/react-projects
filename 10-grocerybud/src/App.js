import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [eiditId, setEiditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  return <section className="section-center">
    
  </section>;
}

export default App;
