// variaveis 
const insertSalario = document.querySelector('.btn_salario')


// Funções
CallSalario = () => {
    const salarioModal = document.createElement("div")
    const salarioModalText = document.createTextNode("Adicione o seu salario")
    console.log(salarioModal)
    salarioModal.appendChild(salarioModalText)
    salarioModal.classList.add("salaryModal")
    const body = document.querySelector("body")
    body.appendChild(salarioModal)
}

// EventListener
insertSalario.addEventListener('click', () => {
    CallSalario()
})