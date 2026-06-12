function generateQuiz(event) {
  event.preventDefault();

  new Typewriter("#quiz", {
    strings: "Quiz will be here",
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}
let quizFormElement = document.querySelector("#quiz-form");
quizFormElement.addEventListener("submit", generateQuiz);
