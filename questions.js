const difficulty = new Map([
  ["easy", "🥉"],
  ["medium", "🥈"],
  ["hard", "🥇"],
]);

export async function fetchQuestions() {
  try {
    const response = await fetch("https://opentdb.com/api.php?amount=10");
    const questions = await response.json();
    return formatQuestions(questions.results);
  } catch (error) {
    console.log(error);
    return "An error occured";
  }
}

function formatQuestions(questions) {
  return questions.reduce((acc, question) => {
    return (acc += `<li class="question">
            <div class="difficulty">${difficulty.get(question.difficulty)}</div>
            <div class="questionWrapper">
                <p class="questionText">${question.question}</p>
                <p class="correctAnswer">${question.correct_answer}</p>
            </li>`);
  }, ``);
}
