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

      
    resultsContainer.innerHTML = `${numCorrect} din ${myQuestions.length} (${((numCorrect * 100)/ myQuestions.length).toFixed(2) }%) <br> Nota:<span> </span>${numCorrect  + 1} `;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  
  const myQuestions = [
    {
      question: "1.Cate grafuri neorientate cu 4 varfuri exista?",
      answers: {
        a: "32",
        b: "64",
        c: "6",
        d: "12"
      },
      correctAnswer: "b"
    },
    {
      question: "2.Se considera un graf neorientat G cu 12 noduri si 7 muchii. Care este numarul maxim de componente conexe din care poate fi format graful G?",
      answers: {
        a: "7",
        b: "9",
        c: "8"
      },
      correctAnswer: "c"
    },
    {
      question: "3.Se considera graful neorientat definit prin multimea varfurilor {1,2,3,4,5,6} si multimea muchiilor {[1,2],[2,3],[3,4],[3,5],[4,5],[1,3],[2,6],[2,4],[4,6]}. Care este numarul minim de muchii ce pot fi eliminate astfel incat graful partial obtinut sa nu mai fie conex?",  

      answers: {
        a: "4",
        b: "3",
        c: "2",
        d: "1"
      },
      correctAnswer: "c"
    },
     {
      question: "4.Intr-un graf neorientat cu 20 muchii, fiecare nod al grafului are gradul un numar nenul. Doar patru dintre noduri au gradul un numar par, restul nodurilor avand gradele numere impare. Care este numarul maxim de noduri pe care poate sale aiba graful?",  

      answers: {
        a: "32",
        b: "36",
        c: "10",
        d: "16"
      },
      correctAnswer: "b"
    },
    {
      question:"5.Se considera un graf neorientat cu 50 noduri si 32 muchii. Care este numarul maxim de varfuri cu gradul 0 pe care le poate avea graful?",
      answers: {
        a: "40",
        b: "45",
        c: "41",
        d: "50"
      },
      correctAnswer: "c"
    },
    {
      question:"6.Fie graful neorientat cu 6 noduri, numerotate de la 1 la 6, si muchiile [1,2], [1,3], [1,4], [2,3], [2,4], [3,4], [3,5], [4,5], [4,6], [5,6]. Care este numarul maxim de muchii ce pot fi eliminate astfel incat graful partial obtinut sa-si pastreze proprietatea de graf hamiltonian?",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4"
      },
      correctAnswer: "d"
    },
    {
      question:"7.Care dintre urmatoarele afirmatii este adevarata pentru graful neorientat avand multimea nodurilor X={1,2,3,4,5} si multimea muchiilor U={[1,2], [1,5], [2,3], [2,4], [3,4], [4,5]}?",
      answers: {
        a: "Este graf hamiltonian, dar nu este eulerian.",
        b: "Este graf eulerian, dar nu este hamiltonian.",
        c: "Este si graf hamiltonian si graf eulerian.",
        d: "Nu este graf hamiltonian, si nici nu este graf eulerian."
      },
      correctAnswer: "a"
    },
    {
      question:"8.Se considera graful neorientat cu nodurile numerotate de la 1 la 6 si avand muchiile [1,2], [2,3], [2,5], [2,6], [3,4], [4,5], [4,6], [5,6]. Cate lanturi elementare distincte si de lungime 3 exista de la nodul 1 la nodul 4 în graful dat? Doua lanturi sunt distincte dacă difera prin cel putin o muchie.",
      answers: {
        a: "0",
        b: "2",
        c: "4",
        d: "3"
      },
      correctAnswer: "d"
    },
    {
      question:"9.Se considera graful neorientat cu nodurile numerotate de la 1 la 6 si avand muchiile [1,2], [2,3], [2,5], [2,6], [3,4], [4,5], [4,6], [5,6]. Cate lanturi elementare distincte si de lungime 3 exista de la nodul 1 la nodul 4 în graful dat? Doua lanturi sunt distincte dacă difera prin cel putin o muchie.",
      answers: {
        a: "0",
        b: "2",
        c: "4",
        d: "3"
      },
      correctAnswer: "d"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();