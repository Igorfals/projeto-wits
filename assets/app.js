const form = document.getElementById('form-contato')
const newsletter = document.getElementById('form-newsletter')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    enviarFormulario()
})

newsletter.addEventListener('submit', (event) => {
    event.preventDefault()
    enviarNewsletter()
})

async function enviarNewsletter() {

    try {
        document.querySelector('.assinando').disabled = true
        document.querySelector('.assinando').style.cursor = 'not-allowed'
        document.querySelector('.assinando').style.cssText = 'background-color: #A9A9A9;'
        document.querySelector('.assinando').innerHTML = 'Enviando...'
        document.querySelector('.assinando').style.color = 'white'
        const dadosEmail = {
            email: document.getElementById('email-newsletter').value
        }
        await fetch('https://mindhouse.com.br:2222/enviar-newsletter', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosEmail)
        })
        document.getElementById('email-newsletter').value = ''
        exibirToastSuccess('Assinatura realizada com sucesso!')
        document.querySelector('.assinando').innerHTML = 'Assinar'
        document.querySelector('.assinando').disabled = false
        document.querySelector('.assinando').style.cursor = 'pointer'
        document.querySelector('.assinando').style.backgroundColor = 'white'
        document.querySelector('.assinando').style.color = 'white'
        document.querySelector('.assinando').style.cssText = ''
    } catch (error) {
        exibirToastError('Ops, aconteceu um erro ao efetuar sua assinatura. Tente novamente mais tarde!')
        console.error(error);
        document.querySelector('.assinando').innerHTML = 'Assinar'
        document.querySelector('.assinando').disabled = false
        document.querySelector('.assinando').style.cursor = 'pointer'
        document.querySelector('.assinando').style.backgroundColor = 'white'
        document.querySelector('.assinando').style.cssText = ''
    }
}

async function enviarFormulario() {
    try {
        document.querySelector('.enviar-mensagem').disabled = true
        document.querySelector('.enviar-mensagem').style.cursor = 'not-allowed'
        document.querySelector('.enviar-mensagem').style.backgroundColor = '#A9A9A9'
        document.querySelector('.enviar-mensagem').innerHTML = 'Enviando...'
        const dados = {
            email_site: 'witsdigital@gmail.com',
            name: document.getElementById('name-contato').value,
            email: document.getElementById('email-contato').value,
            contato: document.getElementById('contato').value,
            telefone: document.getElementById('telefone-contato').value,
            mensagem: document.getElementById('mensagem').value,
        }
        console.log(dados);
        await fetch('https://mindhouse.com.br:2222/enviar-email', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        })
        document.getElementById('name-contato').value = ''
        document.getElementById('email-contato').value = ''
        document.getElementById('contato').value = ''
        document.getElementById('telefone-contato').value = ''
        document.getElementById('mensagem').value = ''
        exibirToastSuccess('Mensagem enviada com sucesso!')
        document.querySelector('.enviar-mensagem').innerHTML = 'Enviar Mensagem'
        document.querySelector('.enviar-mensagem').disabled = false
        document.querySelector('.enviar-mensagem').style.cursor = 'pointer'
        document.querySelector('.enviar-mensagem').style.backgroundColor = '#3D5BFF'
        document.querySelector('.enviar-mensagem').style.cssText = ''
    } catch (error) {
        exibirToastError('Ops, não foi possivel enviar seu formulário de contato. Tente novamente mais tarde!')
        console.error(error);
        document.querySelector('.enviar-mensagem').innerHTML = 'Enviar Mensagem'
        document.querySelector('.enviar-mensagem').disabled = false
        document.querySelector('.enviar-mensagem').style.cursor = 'pointer'
        document.querySelector('.enviar-mensagem').style.backgroundColor = '#3D5BFF'
        document.querySelector('.enviar-mensagem').style.cssText = ''
    }
}

function exibirToastSuccess(message) {
    const toast = document.getElementById("meuToast-success");
    toast.innerText = message
    toast.style.opacity = 1;
    setTimeout(function () {
        toast.style.opacity = 0;
    }, 3000);
}

function exibirToastError(message) {
    const toast = document.getElementById("meuToast-error");
    toast.innerHTML = message
    toast.style.opacity = 1;
    setTimeout(function () {
        toast.style.opacity = 0;
    }, 3000);
}