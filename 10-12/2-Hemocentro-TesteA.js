const readline = require('readline-sync');

let maxLengthTipoSanguineo = 0;
let maxLengthUltimaDoacao = 0;
let maxLengthNome = 0;
let maxLengthIdade = 0;
let maxLengthPeso = 0;

let doadores = [];
const sangues = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

// Função cadastrarDoador:                                                          // Dentro da função são criadas as variavéis 'nome', 'idade', 'peso', 'tipoSanguineo' e 'ultimaDoacao'
function cadastrarDoador() {                                                        // dentro do objeto 'doador' que devem ser preenchidos pelo usuario que, ao fim,. Para que tenha seus valores
    console.log("\n===== CADASTRAR DOADOR =====");                                  // transferidos para o array global 'doadores' retornando uma mensagem de validação confirmando a inserção dos dados.                      
    
    const nome = readline.question("Nome: ").toUpperCase().trim();                  // toUpperCase(): transforma todas as letras em maiúsculas, facilitando o tratamento dos dados. 
    const idade = readline.questionInt("Idade: ").trim();                           // trim(): exclui espaços inúteis no início e ao fim de uma string.
    const peso = readline.questionFloat("Peso: ").trim();

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
        nome: nome, 
        idade: idade, 
        peso: peso,
        tipoSanguineo: tipoSanguineo,
        ultimaDoacao: ultimaDoacao
    };

    doadores.push(doador);
    readline.question("\nDoador cadastrado com sucesso! \nPressione 'Enter' para voltar ao Menu inicial.");

    for (let i=0; i < doadores.length; i++) {                                    // Utilizando um loop For, identificamos e armazenamos os valores dos maiores comprimentos que
        if (doadores[i].nome.length > maxLengthNome) {                           // cada atributo tem como valor entre todos os doadores para fins de estética nas demais funções.
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
}
 


// Função listarDoadores:                                                           // Se verificado que há usuários cadastrados, uma tela com os dados de todos os usuários
function listarDoadores() {                                                         // registrados será mostrada formada por uma tabela modelada a partir dos métodos padEnd, das
    if (doadores.length == 0) {                                                     // variáveis estéticas criadas na função anterior e da iteração a partir do loop For.
        console.log("\nNão há usuarios cadastrados!")                               
                                                                                    // padEnd: permite determinar um número inteiro como espaçamento ao lado direito do objeto.
    } else {                                                                        // maxlength...: tem armazenado o maior numero de caracteres encontrado em cada atributo entre todos os elementos.
        console.log("-".repeat(34), "LISTAGEM DE DOADORES", "-".repeat(34));        
        console.log(`${"Nome Completo".padEnd(maxLengthNome*1.8)} | ${"Idade".padEnd(maxLengthIdade*2)} | ${"Peso".padEnd(maxLengthPeso*2)} | ${"Tipo Sanguineo".padEnd(maxLengthTipoSanguineo*2)} | Ultima Doacao`); 
        console.log("-".repeat(90));
        for (let i=0; i < doadores.length; i++) {
            console.log(`${doadores[i].nome.padEnd(maxLengthNome*1.8)} | ${String(doadores[i].idade).padEnd(maxLengthIdade*4)}    | ${String(doadores[i].peso).padEnd(maxLengthPeso*4)}   | ${doadores[i].tipoSanguineo.padEnd(maxLengthTipoSanguineo*2.7)}       | ${doadores[i].ultimaDoacao}`);
        }

    }
} 


function buscarTipoSanguineo() {
    if (doadores.length == 0) {
        console.log("\nNão há usuarios cadastrados!")

    } else {
        console.log("\n===== BUSCAR POR TIPO SANGUINEO ====="); 
        const tipoRecebido = readline.question("Digite o tipo sanguineo desejado: ").toUpperCase();
        if (sangues.includes(tipoRecebido) === false) {
            console.log('\nTipo sanguineo inserido invalido! Voltando ao Menu Inicial...')
            return;
        };

        let doadoresFiltrados = [];
        for (let i=0; i < doadores.length; i++) {
            if (doadores[i].tipoSanguineo == tipoRecebido) {
                doadoresFiltrados.push(doadores[i]);
            }
        }

        if (doadoresFiltrados.length == 0) {
            console.log(`\nNenhum usuario com o tipo sanguineo ${tipoRecebido} encontrado.`);
        } else {
            console.log("\n", "-".repeat(34), `USUARIOS COM TIPO SANGUINEO ${tipoRecebido}`, "-".repeat(34)); 
            console.log(`${"Nome Completo".padEnd(maxLengthNome*1.8)} | ${"Idade".padEnd(maxLengthIdade*2)} | ${"Peso".padEnd(maxLengthPeso*2)} | ${"Tipo Sanguineo".padEnd(maxLengthTipoSanguineo*2)} | Ultima Doacao`); 
            console.log("-".repeat(90));
            for (let i=0; i < doadoresFiltrados.length; i++) {
                console.log(`${doadoresFiltrados[i].nome.padEnd(maxLengthNome*1.8)} | ${String(doadoresFiltrados[i].idade).padEnd(maxLengthIdade*4)}    | ${String(doadoresFiltrados[i].peso).padEnd(maxLengthPeso*4)}   | ${doadoresFiltrados[i].tipoSanguineo.padEnd(maxLengthTipoSanguineo*2.7)}       | ${doadoresFiltrados[i].ultimaDoacao}`);
            };
        };
    };
};


function buscarUltimaDoacao() {
    if (doadores.length == 0) {
        console.log("\nNão há usuarios cadastrados!")

    } else {
        console.log("\n===== BUSCAR POR DATA DA ULTIMA DOACAO ====="); 
        const dataRecebida = readline.question("Digite a data desejada (dd/mm/aaaa): ");
        if (doador.ultimaDoacao.length == 10 && (doador.ultimaDoacao[2] && doador.ultimaDoacao[5]) == '/') {
            let dataRecebidaInvertida = dataRecebida.split("/");
            dataRecebidaInvertida = dataRecebidaInvertida[2]+dataRecebidaInvertida[1]+dataRecebidaInvertida[0];

            doadoresFiltrados = [];
            for (let i=0; i < doadores.length; i++) {
                let ultimaDoacaoInvertida = doadores[i].ultimaDoacao.split("/");
                ultimaDoacaoInvertida = ultimaDoacaoInvertida[2]+ultimaDoacaoInvertida[1]+ultimaDoacaoInvertida[0];

                if (ultimaDoacaoInvertida < dataRecebidaInvertida) {
                    doadoresFiltrados.push(doadores[i]);
                };
            };

            if (doadoresFiltrados.length == 0) {
                console.log(`\nNenhum usuario com ultima doacao até ${dataRecebida} encontrado.`);
            } else {
                console.log("\n", "-".repeat(34), `USUARIOS COM ULTIMA DOACAO ATE ${dataRecebida}`, "-".repeat(34)); 
                console.log(`${"Nome Completo".padEnd(maxLengthNome*1.8)} | ${"Idade".padEnd(maxLengthIdade*2)} | ${"Peso".padEnd(maxLengthPeso*2)} | ${"Tipo Sanguineo".padEnd(maxLengthTipoSanguineo*2)} | Ultima Doacao`); 
                console.log("-".repeat(90));
                for (let i=0; i < doadoresFiltrados.length; i++) {
                    console.log(`${doadoresFiltrados[i].nome.padEnd(maxLengthNome*1.8)} | ${String(doadoresFiltrados[i].idade).padEnd(maxLengthIdade*4)}    | ${String(doadoresFiltrados[i].peso).padEnd(maxLengthPeso*4)}   | ${doadoresFiltrados[i].tipoSanguineo.padEnd(maxLengthTipoSanguineo*2.7)}       | ${doadoresFiltrados[i].ultimaDoacao}`);
                };
            };

        } else {
            console.log('Formato de data inserida incorreta! Voltando ao Menu Inicial...');
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

