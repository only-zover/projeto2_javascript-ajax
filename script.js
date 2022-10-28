let container = document.querySelector('#container')

document.querySelector('button').addEventListener('click', () => {

    let query = document.querySelector('input').value

    axios.get('https://pokeapi.co/api/v2/pokemon/' + query)
        .then((res) => {

            console.log(res);

            let data = res.data;

            let img = document.createElement('img')
                img.src = data.sprites.front_default
            container.appendChild(img)

        })
})
