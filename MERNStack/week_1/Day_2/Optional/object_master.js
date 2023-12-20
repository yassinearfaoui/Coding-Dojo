const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    

    const pokemonDivisibleBy3 = pokemon.filter(p => p.id % 3 === 0);
    // console.log(pokemonDivisibleBy3)
    const fireTypePokemons = pokemon.filter(a => a.types == "fire")
    // console.log(fireTypePokemons)
    const doubletype = pokemon.filter(a => a.types.length>1 )
    // console.log(doubletype)
    const pokemonsNames =  pokemon.map(pokemon => pokemon.name)
    // console.log(pokemonsNames)
    // an array with just the names of pokémon with an id greater than 99
    const idGreaterthen99 = pokemon.filter(pokemon=> pokemon.id>99).map(pokemon=> pokemon.name)
    // console.log(idGreaterthen99)
    // an array with just the names of the pokémon whose only type is poison
    const poisonTypePokemons = pokemon.filter(pokemon=> pokemon.types =="poison").map(pokemon=> pokemon.name)
    // console.log(poisonTypePokemons)
    // an array containing just the first type of all the pokémon whose second type is "flying"
    const pokemons = pokemon.filter(pokemon=>pokemon.types[1]== "flying").map(pokemon=> pokemon.types[0])
    // console.log(pokemons)
    // a count of the number of pokémon that are "normal" type
const normalTypeCount = pokemon.filter(pokemon => pokemon.types==("normal")).length
    console.log(normalTypeCount)