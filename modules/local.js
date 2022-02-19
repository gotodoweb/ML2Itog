
import { base, getuserName, createMyForm } from "./base.js";

const sortByField = (field) => (a, b) => a[field] > b[field] ? 1 : -1;



export const getTodoLS = () => {
	// если данные какие-то есть - получаем через метод getItem c ключом 'todo'
	for (let key in localStorage) {
		if (localStorage.hasOwnProperty(getuserName())) {
			if (localStorage.getItem(getuserName())) {
				// return JSON.parse(localStorage.getItem(getuserName())).sort(sortByField('priority'));				
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

			// console.log('bake.value', e.target.closest('.value').value);
			// btnv[i].value = e.target.closest('s1').value;
			// console.log('btnv[i].previousElementSibling.value', btnv[i].previousElementSibling.value);

			let io = i;


			if (btnv[i].previousElementSibling.value === 'обычная') {
				// console.log('e', e.target);
				// if ((base.prior === 'обычная') || (base.prior === '')) {
				getTodoLS();
				// console.log('base.todo[i].priority', base.todo[i].priority);
				// console.log('btnv[i].previousElementSibling.value', btnv[i].previousElementSibling.value);
				// console.log('btnv[i].value', btnv[i].value, btnv[i]);
				// console.log('e.target.closest(.value).value', e.target.closest('.value').value);

				// e.target.closest('.value').textContent = 'обычная';
				// e.target.closest('.value').value = 'обычная';
				btnv[i].value = 'обычная';

				// console.log('base.todo[i].priority from getvalue1', base.todo[i].priority);
				base.todo[i].priority = 'обычная';

				setTodoLS();
				// console.log('base.todo[i].priority from getvalue2', base.todo[i].priority);
				// bake.classList = "";
				// bake.classList.add('btn-light');

				// let btn = e.target.closest('.value');
				// btn.style.backgroundColor = "lime";

				// bake.style.backgroundColor = "lime";
				btnv[i].style.backgroundColor = "white";

				// let tr1 = e.target.closest('.table-light');
				let tr1 = document.querySelectorAll("tr");
				// tr1[i + 1].className = "";
				// tr1[i + 1].classList.add('table-light');

				// for (let val of tr1) {
				// 	// console.log('val', val);
				// 	if (!val.classList.contains('table-success')) {	
				// 		// console.log('!val.classList.contains', val.classList.contains('table-success'));				
				// 		// console.log('tr1[i + 1]', tr1[i + 1]);
				// 		tr1[i + 1].className = "";
				// 		tr1[i + 1].classList.add('table-light');
				// 	}
				// };


				/************************* */
				
				let first1 = e.target.closest('tr');
				// console.log('first1', first1);

				let num1 = (first1.firstElementChild);
				// base.checkpri(Number(num1.innerHTML), 'обычная');
			
				setTodoLS();

			};
			getTodoLS()
			setTodoLS();

			if (btnv[i].previousElementSibling.value === 'важная') {
				// if (base.prior === 'важная') {
				getTodoLS();
				// console.log('e', e.target.value);
				// console.log('base.todo[i].priority', base.todo[i].priority);
				// console.log('btnv[i].previousElementSibling.value', btnv[i].previousElementSibling.value);
				// console.log('btnv[i].value', btnv[i].value, btnv[i]);
				// console.log('e.target.closest(.value).value', e.target.closest('.value').value);

				// e.target.closest('.value').value = 'важная';
				// e.target.closest('.value').textContent = 'важная';
				btnv[i].value = 'важная';

				// console.log('base.todo[i].priority from getvalue1', base.todo[i].priority);
				base.todo[i].priority = 'важная';

				setTodoLS();

				// console.log('base.todo[i].priority from getvalue2', base.todo[i].priority);
				// bake.classList = "";
				// bake.classList.add('btn-warning');
				// let bt = e.target.closest('.value');
				// bt.style.backgroundColor = "yellow";
				// bake.style.backgroundColor = "yellow";
				btnv[i].style.backgroundColor = "yellow";

				// let tr = e.target.closest('.table-light');
				let tr2 = document.querySelectorAll("tr");
				// console.log('tr', tr);
				// tr2[i + 1].className = "";
				// tr2[i + 1].classList.add('table-warning');

				// for (let val of tr2) {
				// 	// console.log('val', val);				
				// 	if (!val.classList.contains('table-success')) {
				// 		// console.log('val.classList.contains', val.classList.contains('table-success'));	
				// 		// console.log('tr2[i + 1]', tr2[i+1]);
				// 		tr2[i + 1].className = "";
				// 		tr2[i + 1].classList.add('table-warning');
				// 	}
				// };

				/************************* */
			
				let first2 = e.target.closest('tr');
				// console.log('first2', first2);

				let num2 = (first2.firstElementChild);
				// base.checkpri(Number(num2.innerHTML), 'важная');
		
				setTodoLS();

			};
			getTodoLS()
			setTodoLS();

			if (btnv[i].previousElementSibling.value === 'срочная') {
				// console.log('e', e.target.value);
				// if (base.prior === 'срочная') {
				getTodoLS();

				// console.log('base.todo[i].priority', base.todo[i].priority);
				// console.log('btnv[i].previousElementSibling.value', btnv[i].previousElementSibling.value);
				// console.log('btnv[i].value', btnv[i].value, btnv[i]);
				// console.log('e.target.closest(.value).value', e.target.closest('.value').value);

				// e.target.closest('.value').textContent = 'срочная';
				// e.target.closest('.value').value = 'срочная';
				btnv[i].value = 'срочная';


				// console.log('base.todo[i].priority from getvalue1', base.todo[i].priority);
				base.todo[i].priority = 'срочная';

				// setTodoLS();
				// console.log('base.todo[i].priority from getvalue2', base.todo[i].priority);

				// bake.classList = "";
				// bake.classList.add('btn-danger');

				// let b = e.target.closest('.value');
				// b.style.backgroundColor = "red";
				// bake.style.backgroundColor = "red";
				btnv[i].style.backgroundColor = "red";


				// let tr = e.target.closest('.table-light');
				let tr3 = document.querySelectorAll("tr");

				// for (let val of tr3) {
				// 	// console.log('val', val);
				// 	if (!val.classList.contains('table-success')) {
				// 		// console.log('!val.classList.contains', val.classList.contains('table-success'));	
				// 		// console.log('tr1[i + 1]', tr1[i + 1]);
				// 		tr3[i + 1].className = "";
				// 		tr3[i + 1].classList.add('table-danger');
				// 	}

				// };


				/************************* */
			
				let first3 = e.target.closest('tr');
				// console.log('first3', first3);

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




