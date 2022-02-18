
import { base, getuserName, createMyForm } from "./base.js";


export const getTodoLS = () => {
	// если данные какие-то есть - получаем через метод getItem c ключом 'todo'
	for (let key in localStorage) {
		if (localStorage.hasOwnProperty(getuserName())) {
			if (localStorage.getItem(getuserName())) {
				return JSON.parse(localStorage.getItem(getuserName()));
			}
		} else {
			return [];
		}
	}
};

export const setTodoLS = () => {
	localStorage.setItem(getuserName(), JSON.stringify(base.todo));

};




export const getvalue = (list) => {

	function fvalue(e) {

		let btnv = document.querySelectorAll('.value');

		for (var i = 0; i < btnv.length; i++) {

			e.preventDefault();


			const bake = e.target.closest('.value');
			// console.log('bake', bake);


			let io = i;


			if (btnv[i].previousElementSibling.value === 'обычная') {
				// if ((base.prior === 'обычная') || (base.prior === '')) {
				getTodoLS();
			
				btnv[i].value = 'обычная';
				base.todo[i].priority = 'обычная';

				setTodoLS();

				btnv[i].style.backgroundColor = "white";

				// let tr = e.target.closest('.table-light');
				let tr1 = document.querySelectorAll("tr");
				tr1[i + 1].className = "";
				tr1[i + 1].classList.add('table-light');

				/************************* */
				
				let first1 = e.target.closest('tr');
				console.log('first1', first1);

				let num1 = (first1.firstElementChild);
				// base.checkpri(Number(num1.innerHTML), 'обычная');

				setTodoLS();

			};
			getTodoLS()
			setTodoLS();

			if (btnv[i].previousElementSibling.value === 'важная') {
				// if (base.prior === 'важная') {
				getTodoLS();

				btnv[i].value = 'важная';

				// console.log('base.todo[i].priority from getvalue1', base.todo[i].priority);
				base.todo[i].priority = 'важная';

				setTodoLS();

				btnv[i].style.backgroundColor = "yellow";

				// let tr = e.target.closest('.table-light');
				let tr = document.querySelectorAll("tr");
				console.log('tr', tr);
				tr[i + 1].className = "";
				tr[i + 1].classList.add('table-warning');

				/************************* */
			
				let first2 = e.target.closest('tr');
				console.log('first2', first2);

				let num2 = (first2.firstElementChild);
				// base.checkpri(Number(num2.innerHTML), 'важная');

				setTodoLS();

			};
			getTodoLS()
			setTodoLS();

			if (btnv[i].previousElementSibling.value === 'срочная') {

				// if (base.prior === 'срочная') {
				getTodoLS();
				console.log('i', i);
				// console.log('btnv[i].previousElementSibling.value', btnv[i].previousElementSibling.value);
				// console.log('btnv[i].value', btnv[i].value, btnv[i]);
				// console.log('e.target.closest(.value).value', e.target.closest('.value').value);

				// e.target.closest('.value').textContent = 'срочная';
				// e.target.closest('.value').value = 'срочная';
				btnv[i].value = 'срочная';

				base.todo[i].priority = 'срочная';

				// bake.classList = "";
				// bake.classList.add('btn-danger');

				// let b = e.target.closest('.value');
				// b.style.backgroundColor = "red";
				// bake.style.backgroundColor = "red";
				btnv[i].style.backgroundColor = "red";

				// let tr = e.target.closest('.table-light');
				let tr3 = document.querySelectorAll("tr");
				tr3[i + 1].className = "";
				tr3[i + 1].classList.add('table-danger');

				/************************* */
			
				let first3 = e.target.closest('tr');
				console.log('first3', first3);

				let num3 = (first3.firstElementChild);
				// base.checkpri(Number(num3.innerHTML), 'срочная');

				setTodoLS();


			};
			getTodoLS()
			setTodoLS();
		}

	}
	setTodoLS();
	list.addEventListener('click', fvalue);
}




