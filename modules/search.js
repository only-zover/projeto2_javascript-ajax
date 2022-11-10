const pokemon = document.querySelector("#pokemon");
const query = document.querySelector("#campo");

function showPokemon() {
  var xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://pokeapi.co/api/v2/pokemon/" + query.value.toLowerCase(),
    true
  );
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const data = JSON.parse(xhr.responseText);

      pokemon.src = data.sprites.front_default;
      pokemon.alt = query.value.toLowerCase();
    }
  };
}

export { showPokemon };
