import { Todo } from './todo';

export class TodoList {
	message = 'TodoList';
	todoList = [];

	constructor() {
		//when using Todo, we have to pass a description
		this.todoList.push(new Todo('Cuddle with cats'));
		this.todoList.push(new Todo('Sleep some more'));
		this.todoList.push(new Todo('Take a walk'));

		this.newItem = '';
	}

	addTodo() {
		this.todoList.push(new Todo(this.newItem));
	}
}
