const taskInput = document.getElementById('task');
const taskList = document.getElementById('task-list');

function addTask(){
    const taskText = taskInput.value;
    if(taskText.trim() !==''){
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function(){
            taskList.removeChild(listItem);
        };

       listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
        taskInput.value='';
    }
    
}


taskInput.addEventListener('keyup', function(event){
    if(event.key==='Enter'){
        addTask();
    }
})






// const taskInput = document.getElementById('task');
// const taskList = document.getElementById('task-list');

// function addTask() {
//     const taskText = taskInput.value;
//     if (taskText.trim() !== '') {
//         const listItem = document.createElement('li');
//         listItem.className = 'task-item';

//         const taskTextElement = document.createElement('span');
//         taskTextElement.textContent = taskText;
//         listItem.appendChild(taskTextElement);

//         const editButton = document.createElement('button');
//         editButton.textContent = 'Edit';
//         editButton.onclick = function () {
//             const taskItem = this.parentElement;
//             const taskTextElement = taskItem.querySelector('span');
//             const newText = prompt('Edit task:', taskTextElement.textContent);
//             if (newText !== null) {
//                 taskTextElement.textContent = newText;
//             }
//         };
//         listItem.appendChild(editButton);

//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.onclick = function () {
//             taskList.removeChild(this.parentElement);
//         };
//         listItem.appendChild(deleteButton);

//         taskList.appendChild(listItem);
//         taskInput.value = '';
//     }
// }

// taskInput.addEventListener('keyup', function (event) {
//     if (event.key === 'Enter') {
//         addTask();
//     }
// });