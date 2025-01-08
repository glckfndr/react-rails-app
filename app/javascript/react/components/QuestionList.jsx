import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const questionsUrl = "/api/v1/questions";
  useEffect(() => {
    fetch(questionsUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setQuestions(response))
      .catch(() =>
        console.log("An error occurred while fetching the questions.")
      );
  }, []);
  return (
    <div>
      {questions.map((question) => (
        <div className="card rounded-1 mt-3" key={question.id}>
          <div className="card-body">
            <h2 className="card-title">{question.title}</h2>
            <p className="lead">
              <span className="badge bg-primary">{question.tag}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionList;
