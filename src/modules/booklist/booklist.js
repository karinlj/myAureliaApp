import { Book } from '../book/book';

export class Booklist {
	constructor() {
		this.pageTitle = 'Booklist';
		this.booklist = [];

		//from inputs
		this.newTitle = '';
		this.newAuthor = '';
		this.newIsbn = '';

		console.log(this);
	}

	addBook() {
		//e.preventDefault();

		//new object with arguments
		const book = new Book(this.newTitle, this.newAuthor, this.newIsbn);

		console.log('book', book);

		//if all fields are filled in
		if (this.newTitle && this.newAuthor && this.newIsbn) {
			//push
			//this.booklist.push(book);

			//spread
			this.booklist = [...this.booklist, book];

			//clear fields again
			this.newTitle = '';
			this.newAuthor = '';
			this.newIsbn = '';

			//console.log('a');
		}
	}

	/* 
    //splice
    removeBook(book) in booklist.html
    removeBook(book) {
		let index = this.booklist.indexOf(book);
		//om book-indexet finns
		if (index !== -1) {
			this.booklist.splice(index, 1); //delete just 1 index
		}
	} */

	//filter
	//removeBook(book.title) in booklist.html
	removeBook(title) {
		console.log('title', title);

		this.booklist = this.booklist.filter(b => {
			return b.title !== title;
		});
	}
}

/* this.booklist = this.booklist.filter((b, i) => {
			return i !== index;
		}); */

/* 	const todos = this.state.todos.filter(t => {
			return t.id !== id;
		}); */
