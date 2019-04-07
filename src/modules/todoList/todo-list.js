import { Todo } from './todo';

export class TodoList {
	constructor() {
		this.message = 'TodoList';

		this.TodoList = [];
		//when using Todo, we have to pass a description

		this.TodoList.push(new Todo('Cuddle with cats'));
		this.TodoList.push(new Todo('Sleep some more'));
		this.TodoList.push(new Todo('Take a walk'));

		this.newItem = '';
	}

	addTodo() {
		this.TodoList.push(new Todo(this.newItem));
	}
}
