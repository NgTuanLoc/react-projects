import { useEffect, useState } from "react";
import Follower from "./Follower";
import { useFetch } from "./useFetch";

const App = () => {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) {
      return;
    }
    setFollowers(data[page]);
  }, [data, page, followers, setFollowers, loading]);

  const handlePage = (pageNumber) => {
    setPage(pageNumber);
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let newPage = oldPage - 1;
      return newPage > 0 ? newPage : 0;
    });
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let newPage = oldPage + 1;
      return newPage < data.length ? newPage : data.length - 1;
    });
  };

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "Loading ..." : "Pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              Prev
            </button>
            {data.map((_, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${page === index ? "active-btn" : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="prev-btn" onClick={nextPage}>
              Next
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default App;
