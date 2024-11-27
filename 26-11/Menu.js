const readline = require('readline-sync');

let pokemons = [
    [
        {name: 'Jolteon', tipo: 'eletrico', nivel: 5, geracao: 1},
        {name: 'Pikachu', tipo: 'eletrico', nivel: 10, geracao: 1},
        {name: 'Mareep', tipo: 'eletrico', nivel: 10, geracao: 2},
        {name: 'Amphrus', tipo: 'eletrico', nivel: 10, geracao: 2},
        {name: 'Manectric', tipo: 'eletrico', nivel: 10, geracao: 3},
        {name: 'Minun', tipo: 'eletrico', nivel: 10, geracao: 3}
    ], [
        {name: 'Charizard', tipo: 'fogo', nivel: 5, geracao: 1},
        {name: 'Rapidash', tipo: 'fogo', nivel: 10, geracao: 1},
        {name: 'Magcargo', tipo: 'fogo', nivel: 10, geracao: 2},
        {name: 'Typlhosion', tipo: 'fogo', nivel: 10, geracao: 2},
        {name: 'Camerupt', tipo: 'fogo', nivel: 10, geracao: 3},
        {name: 'Blaziken', tipo: 'fogo', nivel: 10, geracao: 3}
    
    ], [
        {name: 'Blastoise', tipo: 'agua', nivel: 5, geracao: 1},
        {name: 'Golduck', tipo: 'agua', nivel: 10, geracao: 1},
        {name: 'Feraligatr', tipo: 'agua', nivel: 10, geracao: 2},
        {name: 'Laturn', tipo: 'agua', nivel: 10, geracao: 2},
        {name: 'Swampert', tipo: 'agua', nivel: 10, geracao: 3},
        {name: 'Milostic', tipo: 'agua', nivel: 10, geracao: 3}
    ], [
        {name: 'Venusaur', tipo: 'planta', nivel: 5, geracao: 1},
        {name: 'Vileplume', tipo: 'planta', nivel: 10, geracao: 1},
        {name: 'Hoppip', tipo: 'planta', nivel: 10, geracao: 2},
        {name: 'Meganium', tipo: 'planta', nivel: 10, geracao: 2},
        {name: 'Sceptile', tipo: 'planta', nivel: 10, geracao: 3},
        {name: 'Seedot', tipo: 'planta', nivel: 10, geracao: 3}
    ], [
        {name: 'Snorlax', tipo: 'normal', nivel: 5, geracao: 1},
        {name: 'Eevee', tipo: 'normal', nivel: 10, geracao: 1},
        {name: 'Furret', tipo: 'normal', nivel: 10, geracao: 2},
        {name: 'Porigon²', tipo: 'normal', nivel: 10, geracao: 2},
        {name: 'Slaking', tipo: 'normal', nivel: 10, geracao: 3},
        {name: 'Exploud', tipo: 'normal', nivel: 10, geracao: 3}
    ]
]


console.log(pokemonsCerto)

let mochilaPokemon = [];

function exibirMenu() {
    while (true) {
        let option = readline.questionInt("Escolha uma opcao:\n1. Adicionar Pokemon na mochila\n2. Ver Pokemons na mochila\n3. Remover Pokemon da mochila\n4. Sair\n");
        switch(option) {
            case 1:
                if (mochilaPokemon.length < 6) { 
                    let tipoPokemon = readline.questionInt("Escolha um tipo de Pokemon:\n1. Eletrico\n2. Fogo\n3. Agua\n4. Planta\n5. Normal\n"-1);
                    switch(tipoPokemon) {
                        case 1:
                            tipoPokemon = 'eletrico';
                        case 2:
                            tipoPokemon = 'fogo';
                            break;
                        case 3:
                            tipoPokemon = 'agua';
                            break;
                        case 4:
                            tipoPokemon = 'planta';
                            break;
                        case 5:
                            tipoPokemon = 'normal';
                            break;
                        default:
                            break
                    }
                              
                console.log(`Pokemons disponíveis resgatar: `)
                for (let i=0; i < 1; i++) {
                    console.log(`${pokemons[i]}`)
                }

                let addPokemon = readline.questionInt("Escolha um Pokemon para adicionar: \n1. Pikachu\n2. Charmander\n3. Bulbasaur\n4. Squirtle\n5. Eevee\n");
                mochilaPokemon.push(pokemons[addPokemon-1]);
                } else {
                    console.log("Mochila Pokemon cheia!")
                }
                break;
            case 2:
                console.log("Pokemons da mochila:")
                for (let i=0; i < mochilaPokemon.length; i++) {
                    console.log(`${i+1}. ${mochilaPokemon[i].name} - Tipo: ${mochilaPokemon[i].tipo}, Nivel: ${mochilaPokemon[i].nivel}`)
                }
                break;
            case 3:
                console.log("Lista de Po")
                for (let i=0; i < mochilaPokemon.length; i++) {
                    console.log(`${i+1}. ${mochilaPokemon[i].name} - Tipo: ${mochilaPokemon[i].tipo}, Nivel: ${mochilaPokemon[i].nivel}`)
                }
                let removePokemon = readline.questionInt(`Escolha um Pokemon para remover: `);
                mochilaPokemon.splice(removePokemon-1, 1);
                break;
            case 4:
                console.log("REMOCAO DE POKEMON DA MOCHILA")
                return;
            default:
                console.log("Opcao Invalida!");
                break;
        };
    };
};

exibirMenu();
