import * as React from "react";
import * as ReactDOM from "react-dom/client";
import QuestionList from "./QuestionList";

function Welcome() {
  return (
    <div className="container">
      <h1>Welcome to React!</h1>
      <p className="lead">This is React Component with Rails!</p>
      <QuestionList />
    </div>
  );
}

const rootElement = document.getElementById("welcome");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Welcome />
    </React.StrictMode>
  );
}
export default Welcome;
