const listaTarefasEl = document.querySelector('#lista-tarefas');

function Tarefa(nome, categoria, realizada) {
    this.nome = nome;
    this.categoria = categoria;
    this.realizada = realizada;
}

const tarefas = [new Tarefa('Comprar leite', 'compras', false), new Tarefa('Escutar chimbinha', 'lazer', true)];

function insereTarefaNaPagina(tarefa) {
    listaTarefasEl.innerHTML += `<li class="item-tarefa categoria-${tarefa.categoria}${tarefa.realizada ? ' marcado' : ''}">${tarefa.nome}</li>`;
}

listaTarefasEl.innerHTML = '';
tarefas.forEach(insereTarefaNaPagina);