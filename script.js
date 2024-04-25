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

const button_do = () => {
    const clickbtn = document.getElementById("btn")
    clickbtn.addEventListener("click", function(){
        append_question()
        append_buttons()
    })
}

button_do()

let questionIndex = 0

const append_question = () => {
    const append_question = document.getElementById("start_quiz")
    let questionId = test_questions[questionIndex]
    append_question.innerHTML = ''
    
    const h1 = document.createElement("h1")
    h1.appendChild(document.createTextNode(questionId.question))
    append_question.appendChild(h1)
    questionIndex++
    

}

let answersIndex =  0

const append_buttons = () => {
    let answersId = test_answers[answersIndex]
    const append_buttons = document.getElementById("append_buttons")
    const rowDiv = document.createElement("div")
    rowDiv.setAttribute("class", "row")
    
    append_buttons.innerHTML = ''
    
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

        selectedAnswer(answer_buttons, i, answersId.correctAnswer)
    }
    answersIndex++ 
}

const selectedAnswer = (answer_buttons, i, correctAnswer) =>{
    answer_buttons.addEventListener("click", function(){
        if(i === correctAnswer){
            console.log("correct!")
        }
        else {
            console.log("incorrect")
        }
    })
}