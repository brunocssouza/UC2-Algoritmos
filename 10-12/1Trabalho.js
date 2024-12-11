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
    const tipoSanguineo = readline.question("Tipo sanguíneo: "); 
    const ultimaDoacao = readline.question("Data da última doação (dd/mm/aaaa): "); 
    const doador = { 
        nome, 
        idade, 
        peso, 
        tipoSanguineo, 
        ultimaDoacao 
    };
    doadores.push(doador); 
    console.log("Doador cadastrado com sucesso!\n"); 
} 

function listarDoadores() { 
    console.log("\n--------------------\nLISTAGEM DE DOADORES:\n--------------------"); 
    console.log("NOME | IDADE | PESO | TIPO SANGUINEO | ULTIMA DOACAO"); 
    console.log("-----------------------------------------------------------------"); 
    doadores.forEach(doador => { console.log(`${doador.nome.padEnd(16)} | ${String(doador.idade).padEnd(5)} | ${String(doador.peso).padEnd(4)} | ${doador.tipoSanguineo.padEnd(12)} | ${doador.ultimaDoacao}`); }); 
    console.log("-----------------------------------------------------------------"); 
} 

function buscarPorTipoSanguineo() { 
    console.log("\n===== BUSCAR POR TIPO SANGUÍNEO ====="); 
    const tipo = readline.question("Digite o tipo sanguíneo desejado: "); 
    console.log("\n------------------------\nRESULTADO DA BUSCA:\n------------------------"); 
    console.log("NOME | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO"); 
    console.log("-----------------------------------------------------------------"); 
    doadores.filter(doador => doador.tipoSanguineo.toUpperCase() === tipo.toUpperCase()) .forEach(doador => { console.log(`${doador.nome.padEnd(16)} | ${String(doador.idade).padEnd(5)} | ${String(doador.peso).padEnd(4)} | ${doador.tipoSanguineo.padEnd(12)} | ${doador.ultimaDoacao}`); }); 
    console.log("-----------------------------------------------------------------"); 
} 

function buscarPorDataUltimaDoacao() { 
    console.log("\n===== BUSCAR POR DATA DA ÚLTIMA DOAÇÃO ====="); 
    const dataDesejada = readline.question("Digite a data desejada (dd/mm/aaaa): "); 
    console.log("\n------------------------\nRESULTADO DA BUSCA:\n------------------------"); 
    console.log("NOME | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO"); 
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
        console.log("3. Buscar doador por tipo sanguíneo"); 
        console.log("4. Buscar doador por data da última doação"); 
        console.log("5. Sair"); 
        opcao = readline.questionInt("Escolha uma opção: "); 
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
                console.log("Encerrando o sistema.\n"); 
                break; 
            default: 
                console.log("Opção inválida. Tente novamente.\n"); } 
        }
};


