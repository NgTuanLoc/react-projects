import React, { useState } from "react";

import List from "./components/List";
import { data } from "./data/data";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All !!!
        </button>
      </section>
    </main>
  );
};

export default App;
