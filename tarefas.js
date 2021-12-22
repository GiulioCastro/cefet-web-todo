const listaTarefasEl = document.querySelector('#lista-tarefas');
const botaoIncluirNovaTarefaEl = document.querySelector('#incluir-nova-tarefa');
const inputNovaTarefaNomeEl = document.querySelector('#nova-tarefa-nome');
const selectNovaTarefaCategoriaEl = document.querySelector('#nova-tarefa-categoria');
let itensTarefa = document.querySelectorAll('.item-tarefa');

function Tarefa(nome, categoria, realizada) {
    this.nome = nome;
    this.categoria = categoria;
    this.realizada = realizada;
}

const tarefas = [new Tarefa('Comprar leite', 'compras', false), new Tarefa('Escutar chimbinha', 'lazer', true)];

insereTarefasNaPagina(selectNovaTarefaCategoriaEl.value);

function insereTarefaNaPagina(tarefa, categoriaSelecionada = null) {
    listaTarefasEl.innerHTML += `
        <li class="item-tarefa categoria-${tarefa.categoria} ${tarefa.realizada ? 'marcado' : ''} ${tarefa.categoria !== categoriaSelecionada ? 'retido-no-filtro' : ''}">${tarefa.nome}</li>
    `;
}

function insereTarefasNaPagina(categoriaSelecionada = null) {
    listaTarefasEl.innerHTML = '';
    tarefas.forEach((tarefa) => insereTarefaNaPagina(tarefa, categoriaSelecionada));
    itensTarefa = document.querySelectorAll('.item-tarefa');
}

function insereNovaTarefa(e) {
    const nome = inputNovaTarefaNomeEl.value;
    const categoria = selectNovaTarefaCategoriaEl.value;
    const novaTarefa = new Tarefa(nome, categoria, false);
    tarefas.push(novaTarefa);
    insereTarefaNaPagina(novaTarefa, selectNovaTarefaCategoriaEl.value);
    inputNovaTarefaNomeEl.value = '';
    inputNovaTarefaNomeEl.focus();
}

selectNovaTarefaCategoriaEl.addEventListener("change", function(e) {
    insereTarefasNaPagina(e.target.value);
});

botaoIncluirNovaTarefaEl.addEventListener("click", insereNovaTarefa);

inputNovaTarefaNomeEl.addEventListener("keyup", function(e) {
    if(e.key === 'Enter') insereNovaTarefa();
});

itensTarefa.forEach((itemTarefa) => {
    itemTarefa.addEventListener("click", function(e) {
        const indexItemTarefa = tarefas.findIndex((tarefa) => tarefa.nome === itemTarefa.innerHTML);
        tarefas[indexItemTarefa].realizada = !tarefas[indexItemTarefa].realizada;
        itemTarefa.classList.toggle('marcado');
    });
});