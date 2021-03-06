import { form, div, table, list } from "./start.js";

import { getTodoLS, setTodoLS } from "./local.js";



const findlist = document.querySelector('.find');


// let username = prompt('Name?', 'Vlad');

let username = 'User';




let newform = document.querySelector('.app-container');
let formnew = `

		<div class="popup__bg active">
			<form class="popup active">
				<svg class="close-popup" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path fill="#2982ff" d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>
				<label>
					<input type="text" name="name" id="tratata">
					<div class="label__text">
						Ваше имя
					</div>
				</label>
				<label>
					<input type="tel" name="tel">
					<div class="label__text">
						Ваш телефон
					</div>
				</label>
				<label>
					<textarea name="message"></textarea>
					<div class="label__text">
						Ваше сообщение
					</div>
				</label>
				<button type="submit" class='fd'>Отправить</button>
			</form>
		</div>  

`
const newforma = document.createElement('div');
newforma.innerHTML = formnew;

newform.append(newforma);



let uname = newforma.querySelector('[name="name"]');

let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');


let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');





closePopupButton.addEventListener('click', () => {
	popupBg.classList.remove('active');
	popup.classList.remove('active');

	setTodoLS();

});

document.addEventListener('click', (e) => {
	if (e.target === popupBg) {
		popupBg.classList.remove('active');
		popup.classList.remove('active');

		setTodoLS();
	}
});




popup.addEventListener('submit', e => {
	e.preventDefault();

	const formData = new FormData(e.target);

	// console.log([...formData.entries()]);

	const datanew = Object.fromEntries(formData);


	username = datanew.name;
	console.log(datanew.name);
	base.newuser = datanew.name;



	if (localStorage.hasOwnProperty(datanew.name)) {
		list.innerHTML = `<tbody class="find"></tbody>`;


		base.todo = JSON.parse(localStorage.getItem(datanew.name));
		// console.log('base.todo', base.todo);


		// console.log('list', list);


		if (base.todo) {
			for (let i = 0; i < base.todo.length; i++) {
				// console.log('base.todo[i]', base.todo[i].priority);
				const todoLi = createTodo(base.todo[i]);

				todoLi.appendChild(createMyForm(base.todo[i]));

				list.append(todoLi);
				getid();
			};
		} 


	} else {
		base.todo = [];
		list.innerHTML = `
		<tbody>

			
		</tbody>
	`;
	}
	setTodoLS();


	newforma.innerHTML = '';
});



export const getuserName = () => {
	return username;
}



export const base = {
	user: '',
	set newuser(nam) {
		this.user = nam;
		console.log('nam from newuser', this.user);			
	},
	todo: getTodoLS(),
	check(id) {
		for (let i = 0; i < base.todo.length; i++) {
			if (base.todo[i].id == id) {
				base.todo[i].ready = 'Выполнена';	
				setTodoLS();
			}
		};
	},
	checkpri(id, pri) {
		for (let i = 0; i < base.todo.length; i++) {
			if (base.todo[i].id == id) {
				base.todo[i].priority = `${pri}`;
				setTodoLS();
			}
		};
	},
	addTodo(post) {
		const todo = {
			id: Math.random().toString().substring(2, 7),
			author: this.user,
			post: post,
			ready: 'В процессе',
			priority: 'обычная',
		};		
		base.todo.push(todo);

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

		form[1].removeAttribute('disabled');
	};

	let formcontrol = document.querySelector('.form-control')

	formcontrol.addEventListener('input', checkTodo);


	renderTodo(list);
	form.addEventListener('submit', e => {
		e.preventDefault();

		const authorText = base.user;

		const postText = form[0].value;

		const readyText = 'В процессе';


		const objTodo = base.addTodo(postText);


		const todoTr = createTodo(objTodo);


		const fnew = createMyForm(objTodo, list);
		todoTr.appendChild(fnew);
		setTodoLS();
		list.append(todoTr);
		getid();


		form[1].setAttribute('disabled', 'true');
		form.reset();

		form[1].setAttribute('disabled', 'true');
		setTodoLS();
	});


};

export function getid() {
	let allid = document.querySelectorAll('.count');
	allid.forEach((item, i) => item.textContent = i + 1);
	setTodoLS();
};



function createTodo(objTodo) {

	const todoItem = `
			<tr>			
				<td class="count"></td>
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

	if (objTodo.ready === 'Выполнена') {
		tr.classList = "";
		tr.classList.add('table-success');

		let tdtask = tr.firstElementChild;
		let totasknext = tdtask.nextSibling;


		totasknext.nextSibling.classList.add('text-decoration-line-through');
	};

	if (objTodo.ready === 'В процессе') {

		if (`${objTodo.priority}` === 'обычная') {

			tr.classList = '';
			tr.classList.add('table-light');
		};


		if (`${objTodo.priority}` === 'важная') {

			tr.classList = '';
			tr.classList.add('table-warning');
		};

		if (`${objTodo.priority}` === 'срочная') {

			tr.classList = '';
			tr.classList.add('table-danger');
		};

	};



	return tr;

};

export function createMyForm(objTodo) {
	const myform = document.createElement('td');


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



	if (`${objTodo.priority}` === 'обычная') {
		myform.innerHTML = `
			<form class="my-form" name="f1" >
				<select name="town" id="s1" class="form-input">
					<option class="table-warning" selected="selected">важная</option>
					<option class="table-danger" selected="selected">срочная</option>
					<option class="table-light" selected="selected">обычная</option>
				</select>
				<input type="button" class="value" style='background: white' value="${objTodo.priority}">
			</form>
		`;


	};

	if (`${objTodo.priority}` === 'важная') {
		myform.innerHTML = `
			<form class="my-form" name="f1" >
				<select name="town" id="s1" class="form-input">
					<option class="table-danger" selected="selected">срочная</option>
					<option class="table-light" selected="selected">обычная</option>
					<option class="table-warning" selected="selected">важная</option>
				</select>
				<input type="button" class="value" style='background: yellow' value="${objTodo.priority}">
			</form>
		`;

	};

	if (`${objTodo.priority}` === 'срочная') {
		myform.innerHTML = `
			<form class="my-form" name="f1" >
				<select name="town" id="s1" class="form-input">
					<option class="table-light" selected="selected">обычная</option>
					<option class="table-warning" selected="selected">важная</option>
					<option class="table-danger" selected="selected">срочная</option>
				</select>
				<input type="button" class="value" style='background: red' value="${objTodo.priority}">
			</form>
		`;


	};


	function fvalue(e) {
		e.preventDefault();

		const btnform = document.querySelectorAll('.value');


		for (var i = 0; i < btnform.length; i++) {
			if (btnform[i].previousElementSibling.value === 'обычная') {

				let remont = e.target.tagName;

				if (remont === 'SELECT') {

					getTodoLS();
					btnform[i].value = 'обычная';

					
					base.todo[i].priority = 'обычная';
					setTodoLS();
					btnform[i].style.backgroundColor = "white";

					let gettr = btnform[i].closest('tr');;

					let gettrue = gettr.classList.contains('table-success');
					if (!gettrue) {
						gettr.classList = "";
						gettr.classList.add('table-light');
					}

					setTodoLS();
				}

			} else if (btnform[i].previousElementSibling.value === 'важная') {

				let remontka = e.target.tagName;
				if (remontka === 'SELECT') {

					getTodoLS();
					btnform[i].value = 'важная';

					base.todo[i].priority = 'важная';
					setTodoLS();
					btnform[i].style.backgroundColor = "yellow";

					let gettr = btnform[i].closest('tr');
					let gettrue = gettr.classList.contains('table-success');
					if (!gettrue) {
						gettr.classList = "";
						gettr.classList.add('table-warning');
					}
					setTodoLS();
				}


			} else if (btnform[i].previousElementSibling.value === 'срочная') {

				let peremotka = e.target.tagName;
				if (peremotka === 'SELECT') {

					getTodoLS();
					btnform[i].value = 'срочная';

					base.todo[i].priority = 'срочная';
					setTodoLS();
					btnform[i].style.backgroundColor = "red";

					let gettr = btnform[i].closest('tr');
					let gettrue = gettr.classList.contains('table-success');
					if (!gettrue) {
						gettr.classList = "";
						gettr.classList.add('table-danger');
					}


					setTodoLS();
				}

			};
			getTodoLS();
			setTodoLS();

		}

	}

	setTodoLS();
	list.addEventListener('click', fvalue);

	return myform;

};


function renderTodo(list) {

	getTodoLS();

	if (base.todo) {
		for (let i = 0; i < base.todo.length; i++) {
			// console.log('base.todo[i]', base.todo[i].priority);
			const todoLi = createTodo(base.todo[i]);

			todoLi.appendChild(createMyForm(base.todo[i]));

			list.append(todoLi);
			getid();
		};
	}

	setTodoLS();
};




