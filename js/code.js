// variaveis 
const insertSalario = document.querySelector('.btn_salario')


// Funções
ModalSalario = () => {
    // variaveis

    // Modal & Body
    const body = document.querySelector("body")
    const salarioModal = document.createElement("div")
    const contentModal = document.createElement("div")


    // Content
    const content = {
        close: document.createElement("span"),
        salarioModalText: document.createTextNode("Adicione o seu salario: "),
        salarioModalTextBox: document.createElement("input"),
        comissaoModalText: document.createTextNode("Adcione comissão: "),
        comissaoModalTextBox: document.createElement("input"),
        submit: document.createElement("input"),
    }



    // inserção de conteúdo das divs criadas
    content.salarioModalTextBox.type = "text"
    content.close.textContent = "X"
    content.submit.type = "submit"

    // inserção nas respectivas divs
    body.appendChild(salarioModal)
    salarioModal.appendChild(contentModal)
    Object.values(content).forEach((data) => {
        contentModal.appendChild(data)
    })

    // inserção de classes (estilazação)
    salarioModal.classList.add("salaryModal")
    contentModal.classList.add("contentModal")
        // console.log(content)
}

// EventListener
insertSalario.addEventListener('click', () => {
    ModalSalario()
})