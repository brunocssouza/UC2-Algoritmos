const readline = require('readline-sync');

const pokemons = [
    [
    {name: 'Jolteon', tipo: 'Eletrico', nivel: 5, geracao: 1},
    {name: 'Pikachu', tipo: 'Eletrico', nivel: 10, geracao: 1},
    {name: 'Mareep', tipo: 'Eletrico', nivel: 15, geracao: 2},
    {name: 'Amphrus', tipo: 'Eletrico', nivel: 20, geracao: 2},
    {name: 'Manectric', tipo: 'Eletrico', nivel: 25, geracao: 3},
    {name: 'Minun', tipo: 'Eletrico', nivel: 30, geracao: 3}
    ], [
    {name: 'Charizard', tipo: 'Fogo', nivel: 5, geracao: 1},
    {name: 'Rapidash', tipo: 'Fogo', nivel: 10, geracao: 1},
    {name: 'Magcargo', tipo: 'Fogo', nivel: 15, geracao: 2},
    {name: 'Typlhosion', tipo: 'Fogo', nivel: 20, geracao: 2},
    {name: 'Camerupt', tipo: 'Fogo', nivel: 25, geracao: 3},
    {name: 'Blaziken', tipo: 'Fogo', nivel: 30, geracao: 3}
    ], [
    {name: 'Blastoise', tipo: 'Agua', nivel: 5, geracao: 1},
    {name: 'Golduck', tipo: 'Agua', nivel: 10, geracao: 1},
    {name: 'Feraligatr', tipo: 'Agua', nivel: 15, geracao: 2},
    {name: 'Laturn', tipo: 'Agua', nivel: 20, geracao: 2},
    {name: 'Swampert', tipo: 'Agua', nivel: 25, geracao: 3},
    {name: 'Milostic', tipo: 'Agua', nivel: 30, geracao: 3}
    ], [
    {name: 'Venusaur', tipo: 'Planta', nivel: 5, geracao: 1},
    {name: 'Vileplume', tipo: 'Planta', nivel: 10, geracao: 1},
    {name: 'Hoppip', tipo: 'Planta', nivel: 15, geracao: 2},
    {name: 'Meganium', tipo: 'Planta', nivel: 20, geracao: 2},
    {name: 'Sceptile', tipo: 'Planta', nivel: 25, geracao: 3},
    {name: 'Seedot', tipo: 'Planta', nivel: 30, geracao: 3}
    ], [
    {name: 'Snorlax', tipo: 'Normal', nivel: 5, geracao: 1},
    {name: 'Eevee', tipo: 'Normal', nivel: 10, geracao: 1},
    {name: 'Furret', tipo: 'Normal', nivel: 15, geracao: 2},
    {name: 'Porigon²', tipo: 'Normal', nivel: 20, geracao: 2},
    {name: 'Slaking', tipo: 'Normal', nivel: 25, geracao: 3},
    {name: 'Exploud', tipo: 'Normal', nivel: 30, geracao: 3}
    ]
]

let pokemonBag = [];

function addPokemon() {
    console.log("============================================")
    let tipoPokemon = readline.questionInt("Escolha o tipo do Pokemon: \n\n1. Eletrico \n2. Fogo \n3. Agua \n4. Planta \n5. Normal \n"); /* Usuario escolhe o tipo do Pokémon */
    switch(tipoPokemon) {
        case 1:
            tipoPokemon = 'Eletrico';
            break;
        case 2:
            tipoPokemon = 'Fogo';
            break;
        case 3:
            tipoPokemon = 'Agua';
            break;
        case 4:
            tipoPokemon = 'Planta';
            break;
        case 5:
            tipoPokemon = 'Normal';
            break;
        default:
            console.log("Comando desconhecido!");
            return;
    }

    console.log("============================================")
    let geracaoPokemon = readline.questionInt("Escolha a geracao do Pokemon: \n\n1. Primeira Geracao \n2. Segunda Geracao \n3. Terceira Geracao \n"); /* Usuario escolhe a geracão do Pokemon */
    if (geracaoPokemon <= 0 || geracaoPokemon >= 4) {
        console.log("Comando desconhecido!")
        return
    };

    let possiveisPokemons = [];     /* Armazenar os pokémons com o tipo e geração requisitado em uma lista temporária */
    for (let i=0; i < pokemons.length; i++) {
        if (pokemons[i][0].tipo === tipoPokemon) {
            for (let j=0; j < pokemons[i].length; j++) {
                if (pokemons[i][j].geracao == geracaoPokemon) {
                    possiveisPokemons.push(pokemons[i][j]);
                };
            };
        };
    };

    console.log("============================================");     /* Mostra os elementos encontrados na lista temporária criada*/
    console.log(`Pokémons da Geração ${geracaoPokemon} - Tipo ${tipoPokemon}: \n`);
    for (let i=0; i < possiveisPokemons.length; i++) {
        console.log(`${i+1}. ${possiveisPokemons[i].name} = Nível: ${possiveisPokemons[i].nivel} `);
    };
    let escolhaPokemon = readline.questionInt("\nDigite o numero do Pokemon que deseja: ");     /* Usuario escolhe, dentre os elementos encontrados na lista temporária criada, um pokémon para adicionar em sua bag*/
    if (possiveisPokemons[escolhaPokemon-1]) {
        pokemonBag.push(possiveisPokemons[escolhaPokemon-1]);
        console.log(`${possiveisPokemons[escolhaPokemon-1].name} adicionado á mochila com sucesso!`);
    } else {
        console.log("Comando desconhecido!");
        return;
    }

};

function showBag() {
    console.log("============================================");
    console.log("Pokémons na mochila: \n");
    for (let i=0; i < pokemonBag.length; i++) {     /* Mostra os atuais pokémons em sua bag */
        console.log(`${i+1}. ${pokemonBag[i].name} - Tipo: ${pokemonBag[i].tipo}, Nível: ${pokemonBag[i].nivel}`);
    };
};

function removePokemon() {
    console.log("============================================");
    console.log("Pokémons atualmente em sua mochila: \n");
    for (let i=0; i < pokemonBag.length; i++) {     /* Mostra os atuais pokémons em sua bag */
        console.log(`${i+1}. ${pokemonBag[i].name} - Tipo: ${pokemonBag[i].tipo}, Nivel: ${pokemonBag[i].nivel}`)
    };

    let removePokemon = readline.questionInt("\nDigite o numero do Pokemon que deseja remover: ");      
    console.log(`${pokemonBag[removePokemon-1].name} removido com sucesso!`);   /* Remove o pokémon escolhido de sua bag */
    pokemonBag.splice(removePokemon-1, 1);
}

function exibirMenu() {
    while (true) {
        console.log("============================================")
        let option = readline.questionInt("Escolha uma opcao: \n\n1. Adicionar Pokemon na mochila \n2. Ver Pokemons na mochila \n3. Remover Pokemon da mochila \n4. Sair \n");
        switch(option) {
            case 1:
                if (pokemonBag.length < 6) {
                    addPokemon();
                } else {
                    console.log("Mochila Pokémon cheia!")
                }
                break;

            case 2:
                if (pokemonBag.length > 0) {
                    showBag();
                } else {
                    console.log("Mochila Pokémon vazia!")
                }
                break;

            case 3:
                if (pokemonBag.length > 0) {
                    removePokemon();
                } else {
                    console.log("Mochila Pokémon vazia!")
                };
                break;

            case 4:
                console.log("Saindo...")
                return;

            default:
                console.log("Opcao Invalida!");
                break;
        };
    };
};

exibirMenu();
