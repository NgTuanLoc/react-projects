import { useGlobalContext } from "../context/context";

const Stories = () => {
  const { isLoading, hits } = useGlobalContext();

  if (isLoading) return <div className="loading"></div>;

  return (
    <section className="stories">
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story;

        return (
          <article key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} | </span>
              {num_comments} comments
            </p>
            <div>
              <a
                className="read-link"
                target="_blank"
                rel="noopener noreferrer"
                href={url}
              >
                read more
              </a>
              <button className="remove-btn">remove</button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
