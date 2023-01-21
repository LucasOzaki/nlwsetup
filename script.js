const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {

    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        alert("Dia já incluso🐊")
        return
    }

    alert('Adicionado💥')
    nlwSetup.addDay(today)
}

function save() {
    localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

//const data = {
//    run: ['01-01', '01-02', '01-06'],
//    journal: ['03-01', '01-02', '09-05'],
//    exercise: ['01-01', '06-02', '12-05'],
//}
//
nlwSetup.setData(data)
nlwSetup.load()