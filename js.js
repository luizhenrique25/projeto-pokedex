// variaveis globais 

const pokemonName = document.querySelector(".pokemon_name");

const pokemonNumber = document.querySelector(".pokemon_number");

const pokemonImage = document.querySelector(".pokemon_image");

const form = document.querySelector(".form");

const imput = document.querySelector(".input_search");

const btnPrev = document.querySelector(".btn-prev"); 

const btnNext = document.querySelector(".btn-next");

let searchPokemon = 0;









// conectando com a api

const fetchpokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    console.log(APIResponse)

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }

};
//  renderizar os dados da API

const renderpokemon = async (pokemon) => {

    pokemonName.innerHTML = "carregando...";
    pokemonNumber.innerHTML = "";
    const data = await fetchpokemon(pokemon)

    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonNumber.textContent = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        imput.value = "";
        searchPokemon = data.id;

    }
    else {
        pokemonName.innerHTML = "não encontrado"
        imput.value = "";
        pokemonImage.src = "https://png.pngtree.com/png-vector/20200609/ourlarge/pngtree-cartoon-hand-drawn-business-404-error-illustration-png-image_2220254.jpg";

    }

    console.log(data)

};

// capturar pokemon pelo imput

form.addEventListener("submit", (event) => {
    event.preventDefault();

    renderpokemon(imput.value.toLowerCase());
});


// eventos dos botões prev e next

btnNext.addEventListener("click",()=>{
    searchPokemon += 1
    renderpokemon(searchPokemon);

});

btnPrev.addEventListener("click",()=>{


    if(searchPokemon > 1) {
        searchPokemon -= 1
        renderpokemon(searchPokemon)

    }

});












renderpokemon(1);



