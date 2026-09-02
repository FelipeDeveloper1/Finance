class SalaryModal {
    constructor(ButtonSalario, body) {
        // Variables
        this.ButtonSalario = document.querySelector(ButtonSalario)
        this.body = document.querySelector(body)
        this.salarioModal = document.createElement("div")

    }

    // functions
    criar = () => {
        // Creating Modal 
        const contentModal = document.createElement("div")

        // Content Modal Object
        const content = {
            close: document.createElement("span"),
            salarioModalText: document.createTextNode("Adicione o seu salario: "),
            salarioModalTextBox: document.createElement("input"),
            comissaoModalText: document.createTextNode("Adcione comissão: "),
            comissaoModalTextBox: document.createElement("input"),
            submit: document.createElement("input"),
        }

        // insert data on values
        content.salarioModalTextBox.type = "text"
        content.close.textContent = "X"
        content.submit.type = "submit"


        // inserting the content on Modal 

        Object.values(content).forEach((data) => {
            contentModal.appendChild(data)
        })

        this.body.appendChild(this.salarioModal)
        this.salarioModal.appendChild(contentModal)


        // inserting style on content

        this.salarioModal.classList.add("salaryModal")
        contentModal.classList.add("contentModal")

        // eventListener
        content.close.addEventListener('click', () => {
            this.fechar()
        })
    }

    open = () => {
        this.criar()
    }

    fechar = () => {
        this.salarioModal.remove()
    }
}

// addEventListener






const Modal = new SalaryModal('.btn_salario', 'body')
Modal.ButtonSalario.addEventListener('click', () => {
    Modal.open()
    console.log(Modal)
})