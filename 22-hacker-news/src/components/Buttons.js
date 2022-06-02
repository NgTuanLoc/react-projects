import { useGlobalContext } from "../context/context";

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext();
  return (
    <div className="btn-container">
      <button disabled={isLoading} onClick={() => handlePage("desc")}>
        Prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button disabled={isLoading} onClick={() => handlePage("incr")}>
        Next
      </button>
    </div>
  );
};

export default Buttons;
