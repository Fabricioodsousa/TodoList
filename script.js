const button = document.querySelector('.button')
const input = document.querySelector('.input')
const listaCompleta = document.querySelector('.list')

let todoList = []

function addTask() {
    if (input.value != '') {
        todoList.push({
            task: input.value,
            checked: false
        })
        input.value = ''
    }

    mostrarTarefas()

}

document.addEventListener('keydown', (event)=>{
    if(event.key == 'Enter'){
        addTask()
    }
})

function mostrarTarefas() {

    let newTask = ''

    todoList.forEach((item, index) => {
        newTask = newTask + `

        <li class="task ${item.checked && "done"}" >
            <img src="./img/checked.png" onclick= "checkedTask(${index})" >
            <p> ${item.task} </p>
            <img src="./img/trash.png" onclick= "deleteTask(${index})">
        </li>
        
        `
    })

    listaCompleta.innerHTML = newTask

    localStorage.setItem('list', JSON.stringify(todoList))
}

function deleteTask(index) {
    todoList.splice(index, 1)
    mostrarTarefas()
}

function checkedTask(index) {
    todoList[index].checked = !todoList[index].checked

    mostrarTarefas()

}

function recarregarTask() {
    const tarefasLocalStorage = localStorage.getItem('list')
    if (tarefasLocalStorage) {
        todoList = JSON.parse(tarefasLocalStorage)
    }

    mostrarTarefas()
}
recarregarTask()