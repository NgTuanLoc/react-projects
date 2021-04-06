import React, { useState } from "react";

import Categories from "./components/Categories";
import Menu from "./components/Menu";
import data from "./data/data";

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState([]);
  return (
    <section className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline" />
        <Categories />
        <Menu items={menuItems} />
      </div>
    </section>
  );
}

export default App;
