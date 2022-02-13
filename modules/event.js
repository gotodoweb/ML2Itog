import { form, div, table, list } from "./start.js";
import { base, getuserName } from "./base.js";
import { getTodoLS, setTodoLS } from "./local.js";

export const getbtndel = (form, list, div) => {

	function delTodo(event) {
		event.preventDefault();
		const nbtn = event.target.closest('.btn.btn-danger');
		const trdel = event.target.closest('tr');
		// console.log('trdel', trdel);

		if (nbtn) {

			let first = event.target.closest('tr');
			// console.log('first', first);
			let num = (first.firstElementChild);
			// console.log('num', Number(num.innerHTML));

			let idd = Number(num.innerHTML);
			console.log('id который удалять:', idd);

			// let num2 = (num.nextSibling);
			// console.log('num2', num2);
			// const post = (num2.nextSibling.innerHTML).getTodoLS();
			// console.log('post', post);

			trdel.remove();

			let newdata = base.todo.filter(el => el.id != idd);

			console.log('newdata', newdata);
			base.todo = newdata;

			setTodoLS();
			console.log('base.todo', base.todo);


		};
	};

	list.addEventListener('click', delTodo);
}

export const getdonempost = (form, list, div) => {

	function doneTodo(event) {
		event.preventDefault();
		const nbtn = event.target.closest('.btn.btn-success');
		if (nbtn) {
			getTodoLS();
			// console.log('list', list);
			// console.log('event.target.id', event.target.id);

			let first = event.target.closest('tr');
			// console.log('first', first);

			let num = (first.firstElementChild);
			console.log('num', num, Number(num.innerHTML));

			base.check(Number(num.innerHTML));
			setTodoLS();

			let num2 = (num.nextSibling);
			// console.log('num2', num2);
			const post = (num2.nextSibling.innerHTML).trim();
			// console.log('post', post);
			// console.log(num2.nextSibling.classList.add('text-decoration-line-through'));
			num2.nextSibling.classList.add('text-decoration-line-through')
			first.classList.remove('table-light');
			first.classList.add('table-success');
			setTodoLS();
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


export const getcontediatable = (list) => {

	function btnmake(event) {
		event.preventDefault();
		let tasks = document.getElementsByClassName('task');
		const btnmake = event.target.closest('.btn.btn-secondary');
		const bake = document.querySelector('.task');

		if (btnmake) {
			for (var i = 0; i < tasks.length; i++) {
				// console.log('click');
				console.log('click', tasks[i].innerHTML);
				tasks[i].setAttribute('contenteditable', 'true');

				if(false) {
					function sww(e) {
						e.preventDefault();
						const brtn = e.target.closest('.task');
						let tasks = document.getElementsByClassName('task');
						if (brtn) {
							if (brtn.hasAttribute('contenteditable')) {
								if (e.keyCode === 13) {
									// можете делать все что угодно со значением текстового поля

									console.log('нужно сохранить новый post  по нажатию Enter');
									setTodoLS();
									brtn.setAttribute('contenteditable', 'false');
								}
							}
						};
					};

					list.addEventListener('keydown', sww);
				};




				// const bake = event.target.closest('.task');
				// function sww(e) {
				// 	if (e.keyCode === 13) {
				// 		// можете делать все что угодно со значением текстового поля

				// 		console.log('нужно сохранить новый post  по нажатию Enter');
				// 		setTodoLS();
				// 		tasks[i].setAttribute('contenteditable', 'false');
				// 	}

				// };
				// tasks[i].addEventListener('keydown', sww);
				// savenewpost(list);

			}
		}
	}



	list.addEventListener('click', btnmake);

	
}

// export const savenewpost = (list) => {

// 	function sww(e) {
// 		e.preventDefault();
// 		const brtn = e.target.closest('.task');
// 		let tasks = document.getElementsByClassName('task');
// 		if (brtn) {
// 			if (brtn.hasAttribute('contenteditable')) {
// 				if (e.keyCode === 13) {
// 					// можете делать все что угодно со значением текстового поля

// 					console.log('нужно сохранить новый post  по нажатию Enter');
// 					setTodoLS();
// 					brtn.setAttribute('contenteditable', 'false');
// 				}
// 			}
// 		};
// 	};

// 	list.addEventListener('keydown', sww);
// }
