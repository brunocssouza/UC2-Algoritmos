const readline = require('readline-sync');

let doadores = [];
const sangues = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

// Função cadastrarDoador:
function cadastrarDoador() {                                                        // Dentro da função são criadas as variavéis 'nome', 'idade', 'peso', 'tipoSanguineo' e
    console.log("\n===== CADASTRAR DOADOR =====");                                  // 'ultimaDoacao' que devem ser preenchidos pelo usuario. A variável-objeto 'doador' ao final
                                                                                    // armazena essas variaveis e retorna uma mensagem de validação confirmando a inserção dos dados.
    const nome = readline.question("Nome: ").toUpperCase().trim();                  
    const idade = readline.questionInt("Idade: ").trim();                           // toUpperCase(): transforma todas as letras em maiúsculas, facilitando o tratamento dos dados.
    const peso = readline.questionFloat("Peso: ").trim();                           // trim(): exclui espaços inúteis no início e ao fim de uma string.

    const tipoSanguineo = readline.question("Tipo sanguineo: ").toUpperCase().trim();
    if (sangues.includes(tipoSanguineo) === false) {
        console.log('\nTipo sanguineo inserido invalido! Voltando ao Menu Inicial...')
        return;
    };

    const ultimaDoacao = readline.question("Data da ultima doacao (dd/mm/aaaa): ").trim();   
    if (ultimaDoacao.length != 10 && (ultimaDoacao[2] && ultimaDoacao[5]) != '/') {
        console.log('\nData inserida invalida! Voltando ao Menu Inicial...')
        return;
    };

    const doador = {                                                                 
        'Nome Completo': nome,         
        'Idade': idade,
        'Peso': peso,
        'Tipo Sanguineo': tipoSanguineo, 
        'Ultima Data de Doacao': ultimaDoacao 
    };
    doadores.push(doador);
    readline.question("\nDoador cadastrado com sucesso! \nPressione 'Enter' para voltar ao Menu inicial.");

};


// Função listarDoadores:                                                           // Se verificado que há usuários cadastrados, uma tela com os dados de todos os usuários
function listarDoadores() {                                                         // registrados será mostrada formada por uma tabela modelada a partir da função console.table
    if (doadores.length == 0) {                                                     
        console.log("\nNão há usuarios cadastrados!")                               
                                                                                   
    } else {                                                                        
        console.log("-".repeat(34), "LISTAGEM DE DOADORES", "-".repeat(34)); 
        console.table(doadores);
    };
};


function buscarTipoSanguineo() {
    if (doadores.length == 0) {
        console.log("\nNão há usuarios cadastrados!")

    } else {
        console.log("\n===== BUSCAR POR TIPO SANGUINEO ====="); 
        const tipoRecebido = readline.question("Digite o tipo sanguineo desejado: ").toUpperCase().trim();
        if (sangues.includes(tipoRecebido) === false) {
            console.log('\nTipo sanguineo inserido invalido! Voltando ao Menu Inicial...')
            return;
        };

        let doadoresFiltrados = [];
        for (let i=0; i < doadores.length; i++) {
            if (doadores[i]['Tipo Sanguineo'] == tipoRecebido) {
                doadoresFiltrados.push(doadores[i]);
            }
        }

        if (doadoresFiltrados.length == 0) {
            console.log(`\nNenhum usuario com o tipo sanguineo ${tipoRecebido} encontrado.`);

        } else {
            console.log("\n", "-".repeat(34), `USUARIOS COM TIPO SANGUINEO ${tipoRecebido}`, "-".repeat(34)); 
            console.table(doadoresFiltrados);
        };
    };
};


function buscarUltimaDoacao() {
    if (doadores.length == 0) {
        console.log("\nNão há usuarios cadastrados!")

    } else {
        console.log("\n===== BUSCAR POR DATA DA ULTIMA DOACAO ====="); 
        const dataRecebida = readline.question("Digite a data desejada (dd/mm/aaaa): ").trim();
        let dataRecebidaInvertida = dataRecebida.split("/");
        dataRecebidaInvertida = dataRecebidaInvertida[2]+dataRecebidaInvertida[1]+dataRecebidaInvertida[0];

        doadoresFiltrados = [];
        for (let i=0; i < doadores.length; i++) {
            let ultimaDoacaoInvertida = doadores[i]['Ultima Data de Doacao'].split("/");
            ultimaDoacaoInvertida = ultimaDoacaoInvertida[2]+ultimaDoacaoInvertida[1]+ultimaDoacaoInvertida[0];

            if (ultimaDoacaoInvertida < dataRecebidaInvertida) {
                doadoresFiltrados.push(doadores[i]);
            };
        };

        if (doadoresFiltrados.length == 0) {
            console.log(`\nNenhum usuario com ultima doacao até ${dataRecebida} encontrado.`);
        } else {
            console.log("\n", "-".repeat(34), `USUARIOS COM ULTIMA DOACAO ATE ${dataRecebida}`, "-".repeat(34)); 
            console.table(doadoresFiltrados);
        };
    };
};

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
                console.log("\nOpcao invalida. Tente novamente.\n"); 
        } 
    }
};

menu();

