const quizData = [
	{
		question: 'What is the most used programming language in 2019?',
		a: 'Java',
		b: 'C',
		c: 'Python',
		d: 'JavaScript',
		correct: 'd',
	},
	{
		question: 'Who is the President of US?',
		a: 'Florin Pop',
		b: 'Donald Trump',
		c: 'Ivan Saldano',
		d: 'Mihai Andrei',
		correct: 'b',
	},
	{
		question: 'What does HTML stand for?',
		a: 'Hypertext Markup Language',
		b: 'Cascading Style Sheet',
		c: 'Jason Object Notation',
		d: 'Helicopters Terminals Motorboats Lamborginis',
		correct: 'a',
	},
	{
		question: 'What year was JavaScript launched?',
		a: '1996',
		b: '1995',
		c: '1994',
		d: 'none of the above',
		correct: 'b',
	},
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const quizHeader = document.querySelector('.quiz-header');

let currentQuiz = 0;
let score = 0;

const loadQuiz = function () {
	const currentQuestion = quizData[currentQuiz];

	const quizMarkup = `
        <h2 id="question">${currentQuestion.question}</h2>
        <ul>
            <li>
                <input type="radio" id="a" name="answer" class="answer" />
                <label id="a_text" for="a">${currentQuestion.a}</label>
            </li>
            <li>
                <input type="radio" id="b" name="answer" class="answer" />
                <label id="b_text" for="b">${currentQuestion.b}</label>
            </li>
            <li>
                <input type="radio" id="c" name="answer" class="answer" />
                <label id="c_text" for="c">${currentQuestion.c}</label>
            </li>
            <li>
                <input type="radio" id="d" name="answer" class="answer" />
                <label id="d_text" for="d">${currentQuestion.d}</label>
            </li>
        </ul>
    `;
	quizHeader.innerHTML = '';
	quizHeader.insertAdjacentHTML('afterbegin', quizMarkup);
};

loadQuiz();

function checkAnswers() {
	const answerEls = document.querySelectorAll('.answer');
	let answer;
	answerEls.forEach((ans) => {
		if (ans.checked) {
			answer = ans.id;
		}
	});
	return answer;
}

submitBtn.addEventListener('click', function () {
	let answer = checkAnswers();
	if (answer === quizData[currentQuiz].correct) {
		score++;
	}
	if (answer) {
		currentQuiz++;
		if (currentQuiz < quizData.length) loadQuiz();
		else {
			const markup = `
            <h2 id="question">You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="window.location.reload()" id="submit">Reload</button>
         `;
			quiz.innerHTML = '';
			quiz.insertAdjacentHTML('afterbegin', markup);
		}
	}
});
