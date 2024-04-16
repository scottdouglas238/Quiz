const append_buttons = () => {
    const start_text = document.getElementById("intro")
    const test_question = ["Why is water wet?"]
    const h2Tag = document.createElement("h2")
    h2Tag.innerHTML = test_question
    start_text.parentNode.replaceChild(h2Tag, start_text)
    const ta = ["It isn't"]
    const original_button = document.getElementById("btn")
    let first_button_test = document.createElement("div")
    const question_div = document.createElement("div")
    question_div.setAttribute("class", "row")
    first_button_test.setAttribute("type", "button")
    first_button_test.setAttribute("class", "btn btn-secondary")
    first_button_test.innerHTML = ta[0]
    original_button.parentNode.replaceChild(first_button_test, original_button)
    // for (let i = 0; i < test_answers.length; i++) {
    //     const ta = test_answers[i]
    //     ;
    // }
    console.log("success?")
}

const button_do = () => {
    const clickbtn = document.getElementById("btn")
    clickbtn.addEventListener("click", function(){
        append_buttons()
    })
}

button_do()