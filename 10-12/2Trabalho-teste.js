const readline = require('readline-sync');

let doadores = []; 

/*Função de Cadastramento de Doador. Dentro da função criamos as variavéis nome, idade, peso, tipo sanguineo
e última doação com exemplo de como tem que ser preenchida a data.
A variável DOADOR no final é para retornar os dados inseridos pelo doador e retornar uma mensagem de validação
confirmando que os dados foram inseridos com sucesso.*/
function cadastrarDoador() { 
    console.log("\n===== CADASTRAR DOADOR ====="); 
    const nome = readline.question("Nome: "); 
    const idade = readline.questionInt("Idade: "); 
    const peso = readline.questionFloat("Peso: "); 
    const tipoSanguineo = readline.question("Tipo sanguineo: "); 
    const ultimaDoacao = readline.question("Data da ultima doacao (dd/mm/aaaa): "); 
    const doador = { 
        nome, 
        idade, 
        peso, 
        tipoSanguineo, 
        ultimaDoacao 
    };
    doadores.push(doador); 
    readline.question("\nDoador cadastrado com sucesso!\nClique 'Enter' para voltar ao Menu inicial.\n"); 
} 
/*Quando terminávamos de cadastrar o doador, aparecia o menu novamente automatico junto com a mensagem e tudo misturava.
Por isso, pensamos em colocar a mensagem de clicar Enter para então aparecer o menu após a confirmação de cadastro*/


function listarDoadores() { 

    let maxLengthTipoSanguineo = 0;
    let maxLengthUltimaDoacao = 0;
    let maxLengthNome = 0;
    let maxLengthIdade = 0;
    let maxLengthPeso = 0;

    for (let i=0; i < doadores.length; i++) {
        if (doadores[i].nome.length > maxLengthNome) {
            console.log("Funcionou")
            maxLengthNome = doadores[i].nome.length;
        }
        if (doadores[i].idade.length > maxLengthIdade) {
            maxLengthIdade = doadores[i].idade.length;
        }
        if (doadores[i].peso.length > maxLengthPeso) {
            maxLengthPeso = doadores[i].peso.length;
        }
        if (doadores[i].tipoSanguineo.length > maxLengthTipoSanguineo) {
            maxLengthTipoSanguineo = doadores[i].tipoSanguineo.length;
        }
        if (doadores[i].ultimaDoacao.length > maxLengthUltimaDoacao) {
            maxLengthUltimaDoacao = doadores[i].ultimaDoacao.length;
        }
    }

    console.log(maxLengthNome)
    console.log("----------------------------- LISTAGEM DE DOADORES -----------------------------"); 
    console.log(`${"Nome".padEnd(maxLengthNome*1.8)} | ${"Idade".padEnd(maxLengthIdade*2)} | ${"Peso".padEnd(maxLengthPeso*2)} | ${"Tipo Sanguineo".padEnd(maxLengthTipoSanguineo*2)} | Ultima Doacao`); 
    console.log("-".repeat(80));
    for (let i=0; i < doadores.length; i++) {
        console.log(`${doadores[i].nome.padEnd(maxLengthNome*1.8)} | ${String(doadores[i].idade).padEnd(maxLengthIdade*4)}    | ${String(doadores[i].peso).padEnd(maxLengthPeso*4)}   | ${doadores[i].tipoSanguineo.padEnd(maxLengthTipoSanguineo*2.7)}          | ${doadores[i].ultimaDoacao}`);
    }
    
} 


function buscarPorTipoSanguineo() { 
    console.log("\n===== BUSCAR POR TIPO SANGUINEO ====="); 
    const tipo = readline.question("Digite o tipo sanguineo desejado: "); 
    console.log("\n------------------------\nRESULTADO DA BUSCA:\n------------------------"); 
    console.log("NOME | IDADE | PESO | TIPO SANGUINEO | ULTIMA DOACAO"); 
    console.log("-----------------------------------------------------------------"); 
    doadores.filter(doadores.tipoSanguineo.toUpperCase() === tipo.toUpperCase()) .forEach(doador => { console.log(`${doador.nome.padEnd(16)} | ${String(doador.idade).padEnd(5)} | ${String(doador.peso).padEnd(4)} | ${doador.tipoSanguineo.padEnd(12)} | ${doador.ultimaDoacao}`); }); 
    console.log("-----------------------------------------------------------------"); 
} 


function buscarPorDataUltimaDoacao() { 
    console.log("\n===== BUSCAR POR DATA DA ULTIMA DOACAO ====="); 
    const dataDesejada = readline.question("Digite a data desejada (dd/mm/aaaa): "); 
    console.log("\n------------------------\nRESULTADO DA BUSCA:\n------------------------"); 
    console.log("NOME | IDADE | PESO | TIPO SANGUINEO | ULTIMA DOACAO"); 
    console.log("-----------------------------------------------------------------"); 
    doadores.filter(doador => { const [dia, mes, ano] = doador.ultimaDoacao.split("/").map(Number); const [diaDesejado, mesDesejado, anoDesejado] = dataDesejada.split("/").map(Number); 
    const dataDoacao = new Date(ano, mes - 1, dia); 
    const dataComparacao = new Date(anoDesejado, mesDesejado - 1, diaDesejado); return dataDoacao < dataComparacao; }).forEach(doador => { console.log(`${doador.nome.padEnd(16)} | ${String(doador.idade).padEnd(5)} | ${String(doador.peso).padEnd(4)} | ${doador.tipoSanguineo.padEnd(12)} | ${doador.ultimaDoacao}`); }); 
    console.log("-----------------------------------------------------------------"); 
} 

function menu() {
    while (true) {
        let opcao;
        console.log("\n===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE ====="); 
        console.log("1. Cadastrar doador"); 
        console.log("2. Listar doadores"); 
        console.log("3. Buscar doador por tipo sanguineo"); 
        console.log("4. Buscar doador por data da ultima doacao"); 
        console.log("5. Sair"); 
        opcao = readline.questionInt("\nEscolha uma opcao: "); 
        switch (opcao) { 
            case 1: 
                cadastrarDoador(); 
                break; 
            case 2: 
                listarDoadores(); 
                break; 
            case 3: 
                buscarTipoSanguineo(); 
                break; 
            case 4: 
                buscarUltimaDoacao(); 
                break; 
            case 5: 
                console.log("\nEncerrando o sistema...\n"); 
                break; 
            default: 
                console.log("\nOpcao invalida. Tente novamente.\n"); } 
        }
};

menu();


