const listaTarefasEl = document.querySelector('#lista-tarefas');
const botaoIncluirNovaTarefaEl = document.querySelector('#incluir-nova-tarefa');
const inputNovaTarefaNomeEl = document.querySelector('#nova-tarefa-nome');
const selectNovaTarefaCategoriaEl = document.querySelector('#nova-tarefa-categoria');

function Tarefa(nome, categoria, realizada) {
    this.nome = nome;
    this.categoria = categoria;
    this.realizada = realizada;
}

const tarefas = [new Tarefa('Comprar leite', 'compras', false), new Tarefa('Escutar chimbinha', 'lazer', true)];

function insereTarefaNaPagina(tarefa) {
    console.log({tarefa})
    listaTarefasEl.innerHTML += `<li class="item-tarefa categoria-${tarefa.categoria}${tarefa.realizada ? ' marcado' : ''}">${tarefa.nome}</li>`;
}

listaTarefasEl.innerHTML = '';
tarefas.forEach(insereTarefaNaPagina);


botaoIncluirNovaTarefaEl.addEventListener("click", function(e) {
    const nome = inputNovaTarefaNomeEl.value;
    const categoria = selectNovaTarefaCategoriaEl.value;
    const novaTarefa = new Tarefa(nome, categoria, false);
    insereTarefaNaPagina(novaTarefa);
    inputNovaTarefaNomeEl.value = '';
    inputNovaTarefaNomeEl.focus();
});