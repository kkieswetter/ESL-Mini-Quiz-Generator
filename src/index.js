function displayQuiz(response) {
  new Typewriter("#quiz", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
    html: true,
  });
}

function generateQuiz(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "03cod874fae253f4bfbb6d506867t5ea";
  let prompt = `User instructions: Generate a mini ESL quiz about ${instructionsInput.value}`;
  let context =
    "You are an expert ESL teacher and love to create mini quizzes. Generate 10 ESL questions on the topic to test the student's grammar and vocabulary knowledge. Formatting rule: You must seperate every single question with a <br /> tag so they appear on a new line. For example: Question 1: ... <br/> Question 2: ... <br/>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayQuiz);
}
let quizFormElement = document.querySelector("#quiz-form");
quizFormElement.addEventListener("submit", generateQuiz);
