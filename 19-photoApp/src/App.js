import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
import "./index.css";

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    const urlPage = `&page=${page}`;
    let url = `${mainUrl}${clientID}${urlPage}`;

    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setPhotos((prevPhotos) => [...prevPhotos, ...data]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      ) {
        console.log("It works");
        setPage((prevPage) => prevPage + 1);
        console.log(page);
      }
    });
  }, []);

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input type="text" placeholder="search" className="form-input" />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>

      <section className="photos">
        <div className="photos-center">
          {photos &&
            photos.map((photo) => {
              return <Photo key={photo.id} {...photo} />;
            })}
        </div>
        {loading && <h2 className="loading">Loading ...</h2>}
      </section>
    </main>
  );
};

export default App;
