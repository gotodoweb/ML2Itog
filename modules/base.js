import { form, div, table, list } from "./start.js";

import { getTodoLS, setTodoLS } from "./local.js";



const findlist = document.querySelector('.find');


const username = prompt('Введите ваше имя', 'Vlad');

export const getuserName = () => {
	return username;
}



export const base = {
	user: username,
	todo: getTodoLS(),
	prior: '',
	check(id) {
		for (let i = 0; i < base.todo.length; i++) {
			if (base.todo[i].id == id) {
				base.todo[i].ready = 'Выполнена';
				// console.log('id from check(id)', id);
				setTodoLS();
			}
		};
	},
	checkpri(id, pri) {
		for (let i = 0; i < base.todo.length; i++) {
			if (base.todo[i].id == id) {
				base.todo[i].priority = `${pri}`;
				// console.log('base.todo[i].priority from checkpri', base.todo[i].priority);
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
			priority: 'обычная',
		};
		// console.log('base.todo.priority', base.todo.priority);
		base.todo.push(todo);
		// console.log('todo from addTodo', base.todo);
		// return base.todo[base.todo.length - 1];
		setTodoLS();
		// console.log("priority from addTodo", todo.priority);

		return todo;
	},
	// getValue: getvalue(),
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
		// console.log('objTodo',objTodo.priority);
		// console.log('base.todo', base.todo);

		const todoTr = createTodo(objTodo);
		// console.log('todoTr: ', todoTr);

		const fnew = createMyForm(objTodo);
		todoTr.appendChild(fnew);
		setTodoLS();
		list.append(todoTr);


		// console.log('base.todo.length', base.todo.length);
		form[1].setAttribute('disabled', 'true');
		form.reset();

		form[1].setAttribute('disabled', 'true');
		setTodoLS();
	});


};

export function createMyForm(objTodo) {
	const myform = document.createElement('td');
	// console.log('objTodo.priority', objTodo.priority, objTodo);

	myform.innerHTML = `
		<form class="my-form" name="f1" > 
			<select name="town" id="s1" class="form-input">			
				<option class="table-light" selected="selected">обычная</option>
				<option class="table-warning" selected="selected">важная</option>
				<option class="table-danger" selected="selected">срочная</option>
			</select>
				<input type="button" class="value" value="${objTodo.priority}">
		</form>
	`;
	setTodoLS();
	
	const btnform = document.querySelectorAll('.value');
	
	for (var i = 0; i < btnform.length; i++) {
		
		// btnform[i].classList.add('table-success');
		
		if (btnform[i].value === 'обычная') {
			// console.log('обычная');
			console.log('btnform: ', btnform[i].value);
			btnform[i].style.backgroundColor = "white";
			
		};
		
		if (btnform[i].value === 'важная') {
			// console.log('важная');
			btnform[i].style.backgroundColor = "yellow";
			
		};
		
		if (btnform[i].value === 'срочная') {
			// console.log('срочная');
			btnform[i].style.backgroundColor = "red";
			
		};

		setTodoLS();
	};
	
	
	return myform;

};

function createTodo(objTodo) {

	const todoItem = `
			<tr>			
				<td class="goods__row">${objTodo.id = Math.random().toString().substring(2, 7)}</td>
				<td contenteditable="false" class="task">
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
	tr.innerHTML = todoItem;

	if (objTodo.ready === 'В процессе') {
		// tr.classList = "";
		// tr.classList.add('table-light');

	} else if (objTodo.ready === 'Выполнена') {
		tr.classList = "";
		tr.classList.add('table-success');

		let tdtask = tr.firstElementChild;
		let totasknext = tdtask.nextSibling;

		totasknext.nextSibling.classList.add('text-decoration-line-through');
	};

	return tr;

};




function renderTodo(list) {
	// getTodoLS(username);
	
	if (base.todo) {
		for (let i = 0; i < base.todo.length; i++) {
			// console.log('base.todo[i]', base.todo[i].priority);
			const todoLi = createTodo(base.todo[i]);
			// console.log('todoLi from renderTodo', todoLi);
			// todoLi.appendChild(createMyForm());
			todoLi.appendChild(createMyForm(base.todo[i]));
			// todoLi.appendChild(createMyForm(base.todo[i].priority));
			list.append(todoLi);
		};
	}
};



