import { useGlobalContext } from "../context/context";

const SetupForm = () => {
  const { quiz, error, handleChange, handleSubmit } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>quiz</h2>
          <div className="form-control">
            <label htmlFor="amount">number of question</label>
            <input
              className="form-input"
              min={1}
              max={50}
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">category</label>
            <select
              className="form-input"
              name="category"
              id="category"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="difficulty">difficulty</label>
            <select
              className="form-input"
              name="difficulty"
              id="difficulty"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          {error && (
            <p className="error">
              can not generate questions, please try different options
            </p>
          )}
          <button className="submit-btn" type="submit" onClick={handleSubmit}>
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
