const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'Which attribute is used to specify that an input field must be filled out before submitting the form?',
        'a': 'placeholder',
        'b': 'value',
        'c': 'required',
        'd': 'validate',
        'correct': 'c'
    },
    {
        'que': 'What is the purpose of the element in an HTML document??',
        'a': 'To contain the main content of the document',
        'b': 'To contain the metadata and links to scripts and stylesheets',
        'c': 'To define the document"s header section',
        'd': 'To define the document"s footer section',
        'correct': 'b'
    },
    {
        'que': 'To get the current system date which of the following function is used in ASP?',
        'a': 'CurrentDate()',
        'b': 'getDate()',
        'c': 'Now()',
        'd': 'Date()',
        'correct': 'd'
    },
    {
        'que': 'What is Document Object Model(DOM)?',
        'a': 'a coding style',
        'b': 'Specification',
        'c': 'a parser',
        'd': 'none',
        'correct': 'c'
    }
    
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');

const loadQuestions = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();

    const data = questions[index];
    quesBox.innerText =  `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestions();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
        <h3> Thank you for participating in the quiz </h3>
        <h2> ${right} / ${total} are correct </h2>
    `;
}


// Initial call
loadQuestions();