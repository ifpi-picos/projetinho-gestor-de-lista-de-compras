let lista_de_compras = [];

export function menu() {
    console.log(
      '\nLista de Compras: \n 1. Adicionar item \n 2. Editar item \n 3. Remover item \n 4. Marcar item como comprado/não comprado \n 5. Listar itens \n 6. Resumo da lista \n 7. Sair \n Escolha uma opção:'
    );
}

export function adicionar_item() {
    let nome = prompt('Digite o nome do item: ');
    let quantidade = prompt('Digite a quantidade do item: ');
    let categoria = prompt('Digite a categoria do item (ex.: Alimentos, Limpeza): ');
    let status = prompt('O item foi comprado? (sim/não): ').toLowerCase();
    
    if (nome && quantidade && categoria && (status === 'sim' || status === 'não')) {
        lista_de_compras.push({ nome, quantidade, categoria, status });
        console.log('Item adicionado na lista com sucesso!');
    } else {
        console.log('Todos os campos são obrigatórios e o status deve ser "sim" ou "não".');
    }
}

export function editar_item() {
    let nome_original = prompt('Digite o nome do item que deseja editar: ');
    let item = lista_de_compras.find(i => i.nome === nome_original);
    
    if (item) {
        let novo_nome = prompt('Digite o novo nome do item: ');
        let nova_quantidade = prompt('Digite a nova quantidade do item: ');
        let nova_categoria = prompt('Digite a nova categoria do item: ');
        let novo_status = prompt('O item foi comprado? (sim/não): ').toLowerCase();
        
        if (novo_nome && nova_quantidade && nova_categoria && (novo_status === 'sim' || novo_status === 'não')) {
            item.nome = novo_nome;
            item.quantidade = nova_quantidade;
            item.categoria = nova_categoria;
            item.status = novo_status;
            console.log('Item editado com sucesso!');
        } else {
            console.log('Todos os campos são obrigatórios e o status deve ser "sim" ou "não".');
        }
    } else {
        console.log('Item não encontrado na lista.');
    }
}

export function remover_item() {
    let nome = prompt('Digite o nome do item que deseja remover: ');
    let index = lista_de_compras.findIndex(i => i.nome === nome);
    
    if (index !== -1) {
        let confirmacao = prompt('Tem certeza que deseja remover este item? (sim/não): ').toLowerCase();
        if (confirmacao === 'sim') {
            lista_de_compras.splice(index, 1);
            console.log('Item removido da lista com sucesso!');
        } else {
            console.log('Remoção cancelada.');
        }
    } else {
        console.log('Item não encontrado na lista.');
    }
}

export function marcar_comprado() {
    let nome = prompt('Digite o nome do item que deseja marcar como comprado/não comprado: ');
    let item = lista_de_compras.find(i => i.nome === nome);
    
    if (item) {
        let status = prompt('O item foi comprado? (sim/não): ').toLowerCase();
        if (status === 'sim' || status === 'não') {
            item.status = status;
            console.log('Status atualizado com sucesso!');
        } else {
            console.log('O status deve ser "sim" ou "não".');
        }
    } else {
        console.log('Item não encontrado na lista.');
    }
}

export function listar_itens() {
    let ordem = prompt('Escolha a ordem de exibição: \n1. Alfabética \n2. Por categoria \n3. Por quantidade \nDigite a opção: ');
    let filtro_categoria = prompt('Filtrar por categoria (deixe em branco para não filtrar): ');
    let filtro_status = prompt('Filtrar por status (comprado/não comprado, deixe em branco para não filtrar): ').toLowerCase();
    
    let itens_filtrados = lista_de_compras;
    
    if (filtro_categoria) {
        itens_filtrados = itens_filtrados.filter(i => i.categoria.toLowerCase() === filtro_categoria.toLowerCase());
    }
    
    if (filtro_status) {
        itens_filtrados = itens_filtrados.filter(i => i.status === filtro_status);
    }
    
    switch (ordem) {
        case '1':
            itens_filtrados.sort((a, b) => a.nome.localeCompare(b.nome));
            break;
        case '2':
            itens_filtrados.sort((a, b) => a.categoria.localeCompare(b.categoria));
            break;
        case '3':
            itens_filtrados.sort((a, b) => a.quantidade - b.quantidade);
            break;
        default:
            console.log('Opção de ordenação inválida.');
            return;
    }
    
    if (itens_filtrados.length === 0) {
        console.log('Nenhum item encontrado com os filtros aplicados.');
    } else {
        itens_filtrados.forEach(i => {
            console.log(`Nome: ${i.nome}, Quantidade: ${i.quantidade}, Categoria: ${i.categoria}, Status: ${i.status}`);
        });
    }
}

export function resumo_lista() {
    let total_itens = lista_de_compras.length;
    let categorias = {};
    let comprados = 0;
    let nao_comprados = 0;
    
    lista_de_compras.forEach(i => {
        categorias[i.categoria] = (categorias[i.categoria] || 0) + 1;
        if (i.status === 'sim') {
            comprados++;
        } else {
            nao_comprados++;
        }
    });
    
    console.log(`Número total de itens: ${total_itens}`);
    console.log(`Número de itens comprados: ${comprados}`);
    console.log(`Número de itens não comprados: ${nao_comprados}`);
    
    for (let categoria in categorias) {
        console.log(`Número de itens na categoria "${categoria}": ${categorias[categoria]}`);
    }
}
