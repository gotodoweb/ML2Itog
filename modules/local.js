
import { base, getuserName } from "./base.js";



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

