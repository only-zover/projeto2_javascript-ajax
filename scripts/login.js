import { modal, loginBt, logoutBt } from './main.js'

const bt = document.querySelector('#bt')
const msg = document.querySelector('#msg')

const user = document.querySelector('#user')
const labelUser = document.querySelector('#labelUser')
let validUser = false

const password = document.querySelector('#password')
const labelPassword = document.querySelector('#labelPassword')
let validPassword = false

user.addEventListener('keyup', () => { checkUser() })
password.addEventListener('keyup', () => { checkPassword() })
bt.addEventListener('click', () => { login() })

function login() {
    if (validUser && validPassword) {
        let userInfo = {
            "email": user.value,
            "password": password.value
        }

        userInfo = JSON.stringify(userInfo)

        var xhr = new XMLHttpRequest()

        xhr.open("POST", "https://reqres.in/api/login", true)
        xhr.setRequestHeader("Content-type", "application/json")
        xhr.send(userInfo)
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let data = xhr.responseText;
                let token = data.split('"')[3]

                localStorage.setItem('token', token)
                modal.close()
                loginBt.setAttribute('style', 'display: none')
                logoutBt.setAttribute('style', 'display: inline')

            } else if (xhr.readyState == 4 && xhr.status == 400) {
                msg.innerHTML = 'Email ou senha inválida'
            }
        }
    } else {
        msg.innerHTML = 'A senha e/ou email não podem ter menos de 3 caracteres'
    }
}

function checkUser() {
    if (user.value.length < 3) {
        labelUser.setAttribute('style', 'color: red')
        labelUser.innerHTML = 'Email: (No mínimo 3 caracteres)'
        validUser = false
    } else {
        labelUser.setAttribute('style', 'color: green')
        labelUser.innerHTML = 'Email:'
        validUser = true
    }
}

function checkPassword() {
    if (password.value.length < 3) {
        labelPassword.setAttribute('style', 'color: red')
        labelPassword.innerHTML = 'Senha: (No mínimo 3 caracteres)'
        validPassword = false
    } else {
        labelPassword.setAttribute('style', 'color: green')
        labelPassword.innerHTML = 'Senha:'
        validPassword = true
    }
}

export { bt, user, password, checkUser, checkPassword, login }