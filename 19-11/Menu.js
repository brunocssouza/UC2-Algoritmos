const readline = require('readline-sync');

function imprimirFrase() {
    console.log("Olá, tudo bem com você?");
};

function calculaSoma() {
    console.log(`A soma de 5 + 5 é ${5+5}`);
};

function exibirMenu() {
    while (true) {

        let option = readline.questionInt("Escolha uma opcao:\n1. Imprimir Frase\n2. Exibir Soma\n3. Sair\n");
        switch(option) {
            case 1:
                imprimirFrase();
                break;
            case 2:
                calculaSoma();
                break;
            case 3:
                console.log("Saindo...");
                return;
            default:
                console.log("Opcao Invalida!");
                break;
        };

    };
};

exibirMenu();
