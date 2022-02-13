import { form, div, table, list} from "./start.js";

import { getTodoLS, setTodoLS } from "./local.js";



const findlist = document.querySelector('.find');


const username = prompt('Введите ваше имя', 'Vlad');

export const getuserName = () => {
	return username;
}



export const base = {
	user: username,
	todo: getTodoLS(),
	check(id) {
		for (let i = 0; i < base.todo.length; i++) {
			if (base.todo[i].id == id) {
				base.todo[i].ready = 'Выполнена';				
				console.log('id from check(id)', id);
				setTodoLS();
			}
		};		
	},
	addTodo(post) {
		// getTodoLS(username);
		const todo = {
			id: base.todo.length + 1,
			author: this.user,
			post: post,
			ready: 'В процессе',
		};
		
		base.todo.push(todo);
		// console.log('todo from addTodo', base.todo);
		// return base.todo[base.todo.length - 1];
		setTodoLS();
		return todo;
	},
};



export const getbtnsave = (form) => {

	function clearTodo(event) {
		form[1].setAttribute('disabled', 'true');
	};
	
	let btnclear = document.querySelector('.btn.btn-warning');
	btnclear.addEventListener('click', clearTodo);

	function checkTodo(event) {
		// console.log('click');
		form[1].removeAttribute('disabled');
	};

	let formcontrol = document.querySelector('.form-control')

	formcontrol.addEventListener('input', checkTodo);

	
	renderTodo(list);
	form.addEventListener('submit', e => {
		e.preventDefault();

		const authorText = base.user;
		const postText = form[0].value;
		// console.log(postText.length);
		const readyText = 'В процессе';

		const objTodo = base.addTodo(postText);
		// console.log('objTodo',objTodo);
		// console.log('base.todo', base.todo);
				
		const todoTr = createTodo(objTodo);
		list.append(todoTr);
		
		setTodoLS();
		// console.log('base.todo.length', base.todo.length);
		form[1].setAttribute('disabled', 'true');
		form.reset();
		
		form[1].setAttribute('disabled', 'true');
		setTodoLS();
	});
	
};

function createTodo(objTodo) {
	
	const todoItem = `
			<tr>			
				<td class="goods__row">${objTodo.id = Math.random().toString().substring(2, 7)}</td>
				<td class="task">
					${objTodo.post}
				</td>
				<td>${objTodo.ready}</td>
				<td>
					<button class="btn btn-danger">
						Удалить
					</button>
					<button class="btn btn-success">
						Завершить
					</button>
					<button class="btn btn-secondary">
						Редактировать
					</button>
				</td>
			</tr>			
		`;
	const tr = document.createElement('tr');
	tr.classList.add('table-light');
	tr.innerHTML = todoItem;

	return tr;
};



function renderTodo(list) {
	// getTodoLS(username);
	if (base.todo) {
		for (let i = 0; i < base.todo.length; i++) {
			const todoLi = createTodo(base.todo[i]);
			// console.log('todoLi from renderTodo', todoLi);
			list.append(todoLi);
		};
	}

	
};



