const test_questions = [
    {
        "id": 1,
        "question": "Why is water wet?"
    },
    {
        "id": 2,
        "question": "What kind of cheese do you put on a quesadilla?"
    },
    {
        "id": 3,
        "question": "Do birds exist?"
    },
    {
        "id": 4,
        "question": "Why does the sun rise in the East, and sets in the West?"
    }
]

const test_answers = [
    {
        "id": 1,
        "answers": ["It isn't", "Cohesion and adhesion", "It hasn't figured out how to be dry yet", "It was taking a shower"],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "answers": ["Mozzarella", "Chedder", "American", "Velveta", "Yes"],
        "correctAnswer": 4
    },
    {
        "id": 3,
        "answers": ["Yes", "No"],
        "correctAnswer": 1
    },
    {
        "id": 4,
        "answers": ["It's afraid of the dark", "No", "Earth rotates from west to east", "It does't want a sun burn"],
        "correctAnswer": 2
    }
]

const append_question = document.getElementById("start_quiz")
const append_buttons = document.getElementById("append_buttons")
const moveOn = document.getElementById("nextQuestion")
const answered = document.getElementById("answered")

let questionIndex = 0
let answersIndex = 0


const commenceQuiz = () => {
    const clickbtn = document.getElementById("btn")
    clickbtn.addEventListener("click", function () {
        appendQuestionButtons()
        appendButtons()
    })
}
commenceQuiz()

const appendQuestionButtons = () => {
    append_question.innerHTML = ''
    let questionId = test_questions[questionIndex]
    const h1 = document.createElement("h1")
    h1.appendChild(document.createTextNode(questionId.question))
    append_question.appendChild(h1)
    console.log("questionIndex " + questionIndex) 
}

const appendButtons = () => {
    console.log("answerIndex " + answersIndex)
    let answersId = test_answers[answersIndex]
    const rowDiv = document.createElement("div")
    rowDiv.setAttribute("class", "row")
    append_buttons.textContent = '' 

    for (let i = 0; i < answersId.answers.length; i++) {
        const all_buttons = answersId.answers[i]
        const colDiv = document.createElement("div")
        colDiv.setAttribute("class", "col")
        const answer_buttons = document.createElement("button")
        answer_buttons.setAttribute("class", "btn btn-dark")
        answer_buttons.textContent = all_buttons

        append_buttons.appendChild(rowDiv)
        rowDiv.appendChild(colDiv)
        colDiv.appendChild(answer_buttons)

        answer_buttons.addEventListener("click", function () {
            if (i === answersId.correctAnswer) {
                correctOrIncorrect("Correct!")
                nextQuestionBtn("Next Question!")
                questionIndex++
                answersIndex++
            }
            else {
                correctOrIncorrect("Incorrect!")
                nextQuestionBtn("Next Question!")
                questionIndex++
                answersIndex++
            }
        })
    }
}

const nextQuestionBtn = (b) =>{
    console.log(answersIndex, questionIndex)
    const moveButton = document.createElement("button")
    moveButton.setAttribute("class","btn btn-dark")
    moveButton.innerHTML = b
    moveOn.appendChild(moveButton)
    moveOn.addEventListener("click", function(){
        moveOn.innerHTML = ''
        answered.innerHTML = ''
        appendQuestionButtons()
        appendButtons()
    })
}

const correctOrIncorrect = (a) => {
    answered.innerHTML = ''
    const answeredQuestion = document.createElement("h2")
    answeredQuestion.innerHTML = a
    answered.appendChild(answeredQuestion)

}









