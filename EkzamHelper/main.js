window.onload = () => {
  const questionNodes = document.querySelectorAll('.question');
  
  const questions = [...questionNodes].map((questionElem) => {
    let question;
    let answer;


    try {
      question = questionElem.querySelector('.question-text').innerHTML.trim().toLowerCase();
      answer = questionElem.querySelector('.question-answer').innerHTML.trim().toLowerCase();
    } catch {
      question = '';
      answer = '';
    }

    return  {
      question,
      answer
    };
  });

  const input = document.querySelector('.question-input');
  const answer = document.querySelector('.answer');
  
  input.addEventListener('input', (evt) => {
    const userInput = evt.target.value.trim().toLowerCase();
    answer.innerHTML = '';
    questions.forEach((question) => {
      let countOfAnswers = 0;
      if (question.question.startsWith(userInput)) {
        countOfAnswers++;
        const answerString = ` ***** \n ${question.answer} \n  ***** <br> <br>`;
        answer.innerHTML += answerString;
      }

      if (countOfAnswers > 3) {
        answer.innerHTML = '';
      }
    });

    if (evt.target.value === '') {
      answer.innerHTML = '';
    }
  });


}