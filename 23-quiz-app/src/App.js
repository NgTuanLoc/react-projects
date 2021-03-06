import { useGlobalContext } from "./context/context";

import SetupForm from "./components/SetupForm";
import Loading from "./components/Loading";
import Modal from "./components/Modal";
function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();

  if (waiting) return <SetupForm />;
  if (loading) return <Loading />;

  const { question, incorrect_answers, correct_answer } = questions[index];
  let answers = [...incorrect_answers];
  const randomIndex = Math.floor(Math.random() * 4);
  if (randomIndex === 3) {
    answers.push(correct);
  } else {
    answers.push(answers[randomIndex]);
    answers[randomIndex] = correct_answer;
  }

  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">
          correct answer : {correct}/{index}
        </p>
        <h2 dangerouslySetInnerHTML={{ __html: question }} />
        {answers.map((answer, index) => {
          return (
            <button
              key={index}
              className="answer-btn"
              onClick={() => checkAnswer(correct_answer === answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}
        <button className="next-question" onClick={() => nextQuestion()}>
          next question
        </button>
      </section>
    </main>
  );
}

export default App;
