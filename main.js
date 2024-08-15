import { menu, adicionar_item, remover_item, editar_item, marcar_comprado, listar_itens, resumo_lista } from './functions.js';

while (true) {
    menu();
    let opcao = parseInt(prompt('Digite a opção: '));
    
    switch (opcao) {
        case 1:
            adicionar_item();
            break;
        case 2:
            remover_item();
            break;
        case 3:
            editar_item();
            break;
        case 4:
            marcar_comprado();
            break;
        case 5:
            listar_itens();
            break;
        case 6:
            resumo_lista();
            break;
        case 7:
            console.log('Saindo...');
            break;
        default:
            console.log('Opção inválida!!!');
    }

    if (opcao === 7) {
        console.log('Você saiu do programa! \nObrigado por nos escolher!!!');
        break;
    }
}
