import { form, div, table, list } from "./start.js";
import { base } from "./base.js";
import { getTodoLS, setTodoLS } from "./local.js";

export const getbtndel = (form, list, div) => {
	
	function delTodo(event) {
		event.preventDefault();
		const nbtn = event.target.closest('.btn.btn-danger');
		const trdel = event.target.closest('tr');
		console.log('trdel', trdel);
		if (nbtn) {
	
			// console.log('list', list);
			// console.log('event.target.id', event.target.id);

			let first = event.target.closest('tr');
			// console.log('first', first);
			let num = (first.firstElementChild);
			// console.log('num', Number(num.innerHTML));
			base.check(Number(num.innerHTML))
			let iddel = Number(num.innerHTML);
			console.log('id который удалять:', iddel)



			let num2 = (num.nextSibling);
			// console.log('num2', num2);
			const post = (num2.nextSibling.innerHTML).trim();
			console.log('post', post);
			
			trdel.remove();
		

			// const iddelete = num.dataset.id;
			// console.log('iddel', iddelete)

			// let data = getTodoLS();
			// console.log('data', data);
			// console.log('base.todo', base.todo);

			// let newdata = base.todo.filter(el => el.id !== iddelete);
			// console.log('el', el);

			getTodoLS();
			let newdata = base.todo.filter(el => el.id !== Number(num.innerHTML));
			console.log('newdata', newdata);

			base.todo = newdata;
			
			console.log('todo from delTodo', base.todo);
			setTodoLS();
		};


	};

	list.addEventListener('click', delTodo);
}

export const getdonempost = (form, list, div) => {
	setTodoLS();
	function doneTodo(event) {
		event.preventDefault();
		const nbtn  = event.target.closest('.btn.btn-success');
		if (nbtn) {
			setTodoLS();
			// console.log('list', list);
			console.log('event.target.id', event.target.id);

			let first = event.target.closest('tr');
			// console.log('first', first);

			let num = (first.firstElementChild);
			console.log('num', num, Number(num.innerHTML));

			base.check(Number(num.innerHTML));

			let num2 = (num.nextSibling);
			// console.log('num2', num2);
			const post = (num2.nextSibling.innerHTML).trim();

			num2.nextSibling.classList.add('text-decoration-line-through')
			first.classList.remove('table-light');
			first.classList.add('table-success');

			let stat = (num2.nextSibling);
			let statu = (stat.nextSibling);

			let tatu = (statu.nextSibling);
			console.log('status', tatu.innerHTML);


			tatu.innerHTML = 'Выполнена';
			// const id = num.dataset.id
			// console.log('id = num.dataset.id', id);

			// base.check(id);
			setTodoLS();


		};


	};

	list.addEventListener('click', doneTodo);
}


