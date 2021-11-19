import { useEffect, useState } from "react";
import Follower from "./Follower";
import { useFetch } from "./useFetch";

const App = () => {
  const { loading, data } = useFetch();

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "Loading ..." : "Pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {data.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default App;
