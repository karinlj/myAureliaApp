export class Todo {
	//här: this =instance of todo

	//bygg ett objekt av klassen todo
	//this=fysiska objektet

	constructor(description) {
		this.description = description;
		this.done = false;
		//this.message = 'todo';
	}
}
