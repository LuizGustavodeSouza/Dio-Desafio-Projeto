const form = document.getElementById('idFormTarefa');      //Pega Formulario tarefa 
const tarefa = document.getElementById('idRecebeTarefa');  //Pega a tarefa adicionada

form.onsubmit = function (e) {    							//Quando tiver um submit executa a função
	e.preventDefault();          							//cancela o evento se for cancelável,a ação padrão que pertence ao evento não ocorrerá. Ex:Nao deixa a pagina atualizar apagando as informaçoes
	const tarefa = document.getElementById('idAddTarefa');  //Atribui o imput a var tarefa
	addTarefa(tarefa.value);      							//Metodo recebe parametro e argumento/valor
	form.reset();                 							//Limpa a caixa de texto do formulario
};

function addTarefa(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');   		
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	tarefa.appendChild(taskContainer);
}
