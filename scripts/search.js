const container = document.querySelector('#container')
const exit = document.querySelector('#exit')
const search = document.querySelector('#search')
let query = document.querySelector('input')

window.onload = () => {wrongPage()}
exit.addEventListener('click', () => {logOut()})
search.addEventListener('click', () => {showPokemon()})

function wrongPage() {
    if (localStorage.getItem('token') == null) {
        alert('É preciso estar logado para acessar.')
        window.location.href = 'login.html'
    }
} 

function logOut() {
    localStorage.removeItem('token')
    window.location.href = 'login.html'
}

function showPokemon() {
    axios.get('https://pokeapi.co/api/v2/pokemon/' + query.value.toLocaleLowerCase())
        .then((res) => {
            let data = res.data
            let img = document.createElement('img')
                img.src = data.sprites.front_default

            container.appendChild(img)
        })
}