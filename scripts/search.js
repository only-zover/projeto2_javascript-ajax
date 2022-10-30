const container = document.querySelector('#container')
const exit = document.querySelector('#exit')
const search = document.querySelector('#search')
const query = document.querySelector('input')

if (localStorage.getItem('token') == null) {
    alert('É preciso estar logado para acessar.')
    window.location.href = 'login.html'
}

exit.addEventListener('click', () => {
    localStorage.removeItem('token')
    window.location.href = 'login.html'
})

search.addEventListener('click', () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/' + query.value)
        .then((res) => {
            let data = res.data
            let img = document.createElement('img')
                img.src = data.sprites.front_default

            container.appendChild(img)
        })
})