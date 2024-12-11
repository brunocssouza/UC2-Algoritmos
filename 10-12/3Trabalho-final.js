const readline = require('readline-sync');

let doadores = []; 

function cadastrarDoador() { 

} 

function listarDoadores() { 

} 

function buscarPorTipoSanguineo() { 

} 

function buscarPorDataUltimaDoacao() { 

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

menu();
