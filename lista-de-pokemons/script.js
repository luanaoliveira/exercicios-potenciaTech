const pokemons = document.querySelector('.pokemons') ;

const listaPokemons = [
    {id: '1', name: 'bulbasaur'},
    {id: '4', name: 'chamander'},
    {id: '7', name: 'squirtle'}
]

listaPokemons.forEach((element) => {
    pokemons.innerHTML +=
    `<li>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${element.id}.png" alt="">
    <p>${element.name}</p>
    </li>`
})

