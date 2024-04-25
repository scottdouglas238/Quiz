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
        "answers": ["It isn't", "Cohesion and adhesion", "It hasn't figured out how to be dry yet", "Taking a shower"],
        "correct answer": 1
    },
    {
        "id": 2,
        "answers": ["Mozzarella", "Chedder", "American", "Velveta", "Yes"],
        "correct answer": 4
    },
    {
        "id": 3,
        "answers": ["Yes", "No"],
        "correct answer": 1
    },
    {
        "id": 4,
        "answers": ["It's afraid of the dark", "No", "Earth rotates from west to east", "It does't want a sun burn"],
        "correct answer": 2
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
    
    append_buttons.innerHTML = ''
    
    // const answer_buttons = document.createElement("button")
    // answer_buttons.setAttribute("class", "btn btn-dark")
    // answer_buttons.appendChild(document.createTextNode(answersId.answers[0]))
    // append_buttons.parentNode.replaceChild(answer_buttons, append_buttons)
    
    for (let i = 0; i < answersId.answers.length; i++) {
        const all_buttons = answersId.answers[i]
        const answer_buttons = document.createElement("button")
        answer_buttons.setAttribute("class", "btn btn-dark")
        answer_buttons.textContent = all_buttons
        
        append_buttons.appendChild(answer_buttons)
    }
    
    answersIndex++


}

// console.log(test_answers[0].answers[0])
// const append_buttons = () => {
//     const start_text = document.getElementById("intro")
//     const h2Tag = document.createElement("h2")
//     const original_button = document.getElementById("btn")
//     const question_div = document.createElement("div")
//     const first_button_test = document.createElement("div")

//     h2Tag.innerHTML = test_question[0]
//     first_button_test.innerHTML = ta[0]

//     start_text.parentNode.replaceChild(h2Tag, start_text)
//     question_div.setAttribute("class", "row")
//     first_button_test.setAttribute("type", "button")
//     first_button_test.setAttribute("class", "btn btn-secondary")
//     original_button.parentNode.replaceChild(first_button_test, original_button)
//     // for (let i = 0; i < test_answers.length; i++) {
//     //     const ta = test_answers[i]
//     //     ;
//     // }
//     console.log("initial button works")
//}
