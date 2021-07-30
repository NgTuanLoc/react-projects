import React, { useState } from "react";

import Categories from "./components/Categories";
import Menu from "./components/Menu";
import items from "./data/data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);

    setMenuItems(newItems);
  };

  return (
    <section className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline" />
        <Categories filterItems={filterItems} categories={allCategories} />
        <Menu items={menuItems} />
      </div>
    </section>
  );
}

export default App;
