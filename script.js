document.addEventListener("DOMContentLoaded", function () {
    const nextButton = document.getElementById("nextButton");
    const options = document.querySelectorAll("input[type='radio']");
    const previousButton = document.getElementById("previousButton");
  
    let currentQuestion = 0;
    let score = 0;
  
    const questions = [
      {
        question: "What is the URL?",
        options: [
          "A Web Browser",
          "Searching engines",
          "Address of the web page displayed on the internet",
          "A computer software",
        ],
        answer: "Address of the web page displayed on the internet",
      },
      {
        question: "What is HTML?",
        options: [
          "Hypertext Markup Language",
          "Hypertext Transfer Protocol",
          "Hyper Text Preprocessor",
          "Hyperlink and Text Markup Language",
        ],
        answer: "Hypertext Markup Language",
      },
      {
        question: "Gmail is an example of ",
        options: [
          "Email Service",
          "Database Software",
          "Application Software",
          "Accounting Software",
        ],
        answer: "Email Service",
      },
      {
        question: "A Website is a Collection of",
        options: ["programs", "algorithms", "web pages", "graphics"],
        answer: "web pages",
      },
      {
        question:
          "Which of the following is the symbol that is must be used in an email address",
        options: ["#", "@", "%", "$"],
        answer: "@",
      },
    ];
    nextButton.addEventListener("click", function () {
      const selectedOption = document.querySelector(
        "input[type='radio']:checked"
      );
      if (!selectedOption) {
        alert("Please select an option!");
        return;
      }
  
      // Check if the selected option is correct
      if (selectedOption.value === questions[currentQuestion].answer) {
        score++;
      }
  
      // Move to the next question or finish the quiz
      currentQuestion++;
      if (currentQuestion < questions.length) {
        displayQuestion(currentQuestion);
      } else {
        finishQuiz();
      }
    });
  
    previousButton.addEventListener("click", function () {
      if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion(currentQuestion);
      }
    });
  
    function displayQuestion(questionNumber) {
      const currentQuestionObj = questions[questionNumber];
      const questionText = document.querySelector("h2");
      questionText.textContent = `${questionNumber + 1}. ${
        currentQuestionObj.question
      }`;
  
      options.forEach((option) => {
        option.checked = false;
      });
  
      options.forEach((option, index) => {
        option.value = currentQuestionObj.options[index];
        option.nextElementSibling.textContent = currentQuestionObj.options[index];
      });
    }
  
    function finishQuiz() {
      const quizContainer = document.querySelector("div");
      quizContainer.innerHTML = `<h1>Quiz Score</h1>
                                 <p>Right Answers: ${score}</p>
                                 <p>Your score is: ${score}/${questions.length}</p>`;
    }
  
    displayQuestion(currentQuestion);
  });
  