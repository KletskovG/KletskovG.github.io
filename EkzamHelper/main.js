window.onload = () => {
  const questionNodes = document.querySelectorAll('.question');
  
  const questions = [...questionNodes].map((questionElem) => {
    const result = {
      question: questionElem.querySelector('.question-text').innerHTML,
      answer: questionElem.querySelector('.question-answer').innerHTML,
    }
    return  result;
  });

  const input = document.querySelector('.question-input');
  const answer = document.querySelector('.answer');
  
  input.addEventListener('input', (evt) => {
    const userInput = evt.target.value.trim();
    answer.innerHTML = '';
    questions.forEach((question) => {
      if (question.question.startsWith(userInput)) {
        const answerString = ` ***** \n ${question.answer} \n  ***** <br> `;
        answer.innerHTML += answerString;
      }
    });

    if (evt.target.value === '') {
      answer.innerHTML = '';
    }
  });


}