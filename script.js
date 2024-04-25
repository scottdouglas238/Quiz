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
       append_buttons()
    })
}

button_do()

let currentIndex = 0

const append_buttons = () => {
    const append_question = document.getElementById("start_quiz")
    const append_buttons = document.getElementById("append_buttons")
    let questionId = test_questions[currentIndex]
    
    const h1 = document.createElement("h1")
    h1.appendChild(document.createTextNode(questionId.question))
    append_question.parentNode.replaceChild(h1, append_question)
    currentIndex++
    
    console.log(questionId)

}

console.log(test_questions)
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
