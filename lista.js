const lista = ["Um", "Dois", "Três"];

function getLista(){
    return lista;
}

function adicionarNaLista(item){
    lista.push(item);
}
function removeDaLista(posicao){
    lista.splice(posicao, 1);
}
function limparLista(){
    lista.splice(0);
}

export {getLista, adicionarNaLista, removeDaLista, limparLista};