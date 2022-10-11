import { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

const getLocalStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const App = () => {
  const [theme, setTheme] = useState(getLocalStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>OverReacted</h1>
          <button className="btn" onClick={toggleTheme}>
            Toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item}></Article>;
        })}
      </section>
    </main>
  );
};

export default App;
