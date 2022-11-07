const container = document.querySelector('#container')
let query = document.querySelector('#campo')

function showPokemon() {
    var xhr = new XMLHttpRequest()

    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + query.value.toLocaleLowerCase(), true)
    xhr.send()
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.responseText)
            let img = document.createElement('img')
            img.src = data.sprites.front_default

            container.appendChild(img)
        }
    }
}

export { showPokemon }