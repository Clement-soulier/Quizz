import { fetchQuestions } from "./questions.js";

const questionslist = document.querySelector(".questionsList");

fetchQuestions().then((formattedQuestions) => {
  questionslist.insertAdjacentHTML("afterbegin", formattedQuestions);
});

questionslist.addEventListener("click", ({ target }) => {
  if (target.classList.contains("difficulty")) {
    target.parentNode.classList.toggle("showAnswer");
  }
});
