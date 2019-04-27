import { Book } from '../book/book';
import booksFromService from '../../services/book-service';

export class Booklist {
	genrelist = ['Classic', 'Detective story', 'Childrens books', 'Other'];

	constructor() {
		this.pageTitle = 'Books books books...';
		this.addBookTitle = 'Add a book to the list';
		this.filterBooksTitle = 'Filter books on genre';
		//	this.linked = true;
		this.booklist = [
			{
				title: 'Oliver Twist',
				author: 'Charles Dickens',
				isbn: 223365,
				genre: 'Drama',
			},
			{
				title: 'Frankenstein',
				author: 'Mary Shelley',
				isbn: 555694,
				genre: 'Classic',
			},
		];

		this.booksFromService = booksFromService;

		//from inputs
		this.newTitle = '';
		this.newAuthor = '';
		this.newIsbn = '';
		this.selectedGenre = '';

		this.error = '';
		console.log(this);
	} //constructor ends

	addBook() {
		//e.preventDefault();
		//new Book-object with new arguments
		const book = new Book(
			this.newTitle,
			this.newAuthor,
			this.newIsbn,
			this.selectedGenre
		);

		//	console.log('book', book);

		//if all fields are filled in
		if (this.newTitle && this.newAuthor && this.newIsbn && this.selectedGenre) {
			//push
			//this.booklist.push(book);

			//spread
			this.booklist = [...this.booklist, book];

			//clear fields again
			this.newTitle = '';
			this.newAuthor = '';
			this.newIsbn = '';
			this.selectedGenre = '';
		} else {
			console.log('this from func', this);
			this.showErrMess();
		}
	}

	showErrMess() {
		this.error = 'Please fill in all fields';
		setTimeout(function() {
			console.log('this from setTimeout', this); //gets the global window object
			//	this.error = '';
			document.querySelector('.error-message').remove();
		}, 3000);
	}

	removeBook(book) {
		console.log('my book', book);

		//filter
		this.booklist = this.booklist.filter(b => {
			return b.title !== book.title;
		});
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
