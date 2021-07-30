import React from "react";
import data from "./data/data";
import SingleQuestion from "./components/Question";

function App() {
  return (
    <main>
      <div className="container">
        <h3>Question and Answer about login</h3>
        <section className="info">
          {data.map((item, index) => {
            return <SingleQuestion key={index} {...item} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
