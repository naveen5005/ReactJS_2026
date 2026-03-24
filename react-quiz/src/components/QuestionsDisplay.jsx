const QuestionsDisplay = ({ question, dispatch, answer }) => {
  if (!question) return <div>Loading...</div>;
  const hasAnswered = answer !== null;
  const handleQuestionAnswer = (index) => {
    dispatch({ type: "newAnswer", payload: index });
    dispatch({ type: "correctAnswer", payload: question.correctOption === index ? question.points : 0 });
  };
  return (
    <div style={{ width: "600px", marginLeft: "26%" }}>
      <h3 className="question">{question.question}</h3>
      <ol className="options" style={{paddingBottom:"10px"}}>
        {question.options.map((opt, index) => (
          <li
            key={opt}
            onClick={() => handleQuestionAnswer(index)}
            style={{
              cursor: "pointer",
              backgroundColor:
                hasAnswered ? question.correctOption === index ? "lightgreen" : "red" : "",
              color: "white",
            }}
            disabled={hasAnswered}
          >
            {opt}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default QuestionsDisplay;
