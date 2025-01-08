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
        <div key={question.id}>
          <p>
            <b>Question:</b> {question.title}
          </p>
          <p>
            <b>tag:</b> {question.tag}
          </p>
        </div>
      ))}
    </div>
  );
}

export default QuestionList;
