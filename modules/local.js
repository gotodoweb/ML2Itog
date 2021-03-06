
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



