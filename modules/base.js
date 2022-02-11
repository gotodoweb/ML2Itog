import { form, div, table, list } from "./start.js";

import { getTodoLS, setTodoLS } from "./local.js";

const findlist = document.querySelector('.find');


export const base = {
	user: '',
	users: [],
	getusers() {
		console.log('users from getusers', this.users);
	},
	todo: [
		// {
		// 	id: 1,
		// 	author: 'Денис Петрович',
		// 	post: 'Выполнить отгрузку пылесосов',
		// 	ready: 'В процессе',
		// }
	],
	check(id) {
		// for (let i = 0; i < base.todo.length; i++) {
		// 	if (base.todo[i].id === id) {
		// 		base.todo[i].ready = true;
		// 	}
		// };
		// console.log(id);
	},
	addTodo(post) {
		const todo = {
			id: base.todo.length + 1,
			author: this.user,
			post: post,
			ready: 'В процессе',
		};

		base.todo.push(todo);
		// console.log('todo from addTodo', base.todo);
		// return base.todo[base.todo.length - 1];
		return todo;
	},

};


export const getbtnsave = (form) => {
	form.addEventListener('submit', e => {
		e.preventDefault();

		const authorText = base.user;
		const postText = form[0].value;
		const readyText = 'В процессе';

		const objTodo = base.addTodo(postText);
		console.log('objTodo',objTodo);
		console.log('base.todo', base.todo);

		const todoTr = createTodo(objTodo);
		list.append(todoTr);
		// console.log('base.todo.length', base.todo.length);
		
		function checkTodo(event) {
			console.log(event);
			console.log('list', list);
		}

		list.addEventListener('click', checkTodo);
		
		form.reset();
		// renderTodo();
	});
	
};

function createTodo(objTodo) {

	const todoItem = `
			<tr>			
				<td>${objTodo.id}</td>
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
				</td>
			</tr>			
		`;
	const tr = document.createElement('tr');
	tr.classList.add('table-light');
	tr.innerHTML = todoItem;

	return tr;
};
// отмечать выполненные дела - делегируем списку задачу - на list навешаем событие 




// function renderTodo() {
// 	for (let i = 0; i < base.todo.length; i++) {
// 		const todoLi = createTodo(base.todo[i]);
// 		console.log('todoLi from renderTodo', todoLi);
// 		list.append(todoLi);		
// 	};
// };




// export const getformpost = (form) => {
// 	const post = form.querySelector('.form-control');

// };


// export const getbtndel = (form) => {
// 	const btndel = form.querySelector('.btn.btn-warning');	

// }





