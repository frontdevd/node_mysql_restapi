const $sendBtn = document.querySelector('.send');
const $input = document.querySelector('input');
$sendBtn.addEventListener('click', send);

const todos = [];

function send() {
    let title = $input.value.trim();

    fetch('/api/todo', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title})
    })
        .then(res => res.json())
        .then(({todo}) => {
            console.log(todo);
            todos.push(todo);
        })
        .catch(e => console.log(e))
}

function getAllTodos() {
    fetch('/api/todo', {
        method: 'get',
        headers: {'Content-Type': 'application/json'}
    })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(e => console.log(e))
}
getAllTodos();

function update(id = 1) {
    fetch('/api/todo' + id, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({done: true})
    })
        .then(res => res.json())
        .then(({todo}) => console.log(todo))
        .catch(e => console.log(e))
}
