import { bt, user, password, checkUser, checkPassword, login } from './login.js'
import { showPokemon } from './search.js'

const modal = document.querySelector('#modal')
const search = document.querySelector('#search')
const loginBt = document.querySelector('#loginbt')
const logoutBt = document.querySelector('#logoutbt')
const closeBt = document.querySelector('#exit')
const apiBt = document.querySelector('#apibt')
const searchBt = document.querySelector('#searchbt')
const closeApi = document.querySelector('#closeapi')
const mgsErr = document.querySelector('#msgerr')
let validToken = false

loginBt.onclick = () => { openLogin() }
logoutBt.onclick = () => { logOut() }
closeBt.onclick = () => { modal.close() }
apiBt.onclick = () => { loginCheck() }
searchBt.onclick = () => { showPokemon() }
closeApi.onclick = () => { search.close() }

user.addEventListener('keyup', () => { checkUser() })
password.addEventListener('keyup', () => { checkPassword() })
bt.addEventListener('click', () => { login() })

function checkToken() {
    if (localStorage.getItem('token') != null) {
        loginBt.setAttribute('style', 'display: none')
        logoutBt.setAttribute('style', 'display: inline')

        validToken = true
    }
}

function logOut() {
    localStorage.removeItem('token')
    window.location.href = 'index.html'
}

function openLogin() {
    modal.showModal()
    mgsErr.innerHTML = ''
}

function loginCheck() {
    checkToken()
    if (validToken) {
        search.showModal()
    } else {
        mgsErr.innerHTML = 'Faça login para buscar dados da API!'
    }
}

onload = checkToken()

export { modal, loginBt, logoutBt }