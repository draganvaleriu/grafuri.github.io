(function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} din ${myQuestions.length} (${((numCorrect * 100)/ myQuestions.length).toFixed(2) }%)`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  
  const myQuestions = [
    {
      question: "Cate grafuri neorientate cu 4 varfuri exista?",
      answers: {
        a: "32",
        b: "64",
        c: "6",
        d: "12"
      },
      correctAnswer: "b"
    },
    {
      question: "Se considera un graf neorientat G cu 12 noduri si 7 muchii. Care este numarul maxim de componente conexe din care poate fi format graful G?",
      answers: {
        a: "7",
        b: "9",
        c: "8"
      },
      correctAnswer: "c"
    },
    {
      question: "Se considera graful neorientat definit prin multimea varfurilor {1,2,3,4,5,6} si multimea muchiilor {[1,2],[2,3],[3,4],[3,5],[4,5],[1,3],[2,6],[2,4],[4,6]}. Care este numarul minim de muchii ce pot fi eliminate astfel incat graful partial obtinut sa nu mai fie conex?",  

      answers: {
        a: "4",
        b: "3",
        c: "2",
        d: "1"
      },
      correctAnswer: "c"
    },
     {
      question: "Intr-un graf neorientat cu 20 muchii, fiecare nod al grafului are gradul un numar nenul. Doar patru dintre noduri au gradul un numar par, restul nodurilor având gradele numere impare. Care este numarul maxim de noduri pe care poate sale aiba graful?",  

      answers: {
        a: "32",
        b: "36",
        c: "10",
        d: "16"
      },
      correctAnswer: "b"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();