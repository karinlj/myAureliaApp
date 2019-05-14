import { Book } from '../book/book';
import booksFromService from '../../services/book-service';

export class Booklist {
	genrelist = ['Classic', 'Detective story', 'Childrens books', 'Other'];

	constructor() {
		this.pageTitle = 'Books books books...';
		this.addBookTitle = 'Add a book to the list';
		this.filterBooksTitle = 'Filter books on genre';
		this.expanded = false;
		this.readonlyVarOne = true;

		//för övre delen av appen
		this.booklist = [
			{
				id: 0,
				title: 'Oliver Twist',
				slug: 'oliver-twist',
				author: 'Charles Dickens',
				image: 'oliver-twist.jpg',
				isbn: '561456298',
				genre: ['Classic'],
				content:
					'Stackars Oliver Twist! Det finns nog inte någon människa som vill byta plats med denna godhjärtade och tappre pojke, vars ensamstående mor dör i barnsäng så att han tvingas …',
			},
			{
				id: 1,
				title: 'Pyramid of Mud',
				slug: 'pyramid-of-mud',
				author: 'Andrea Camilleri',
				image: 'pyramid-of-mud.jpg',
				isbn: '1146687',
				genre: ['Detective story'],
				content:
					'En ung man har mördats utanför sin port på adress Via Cavour 44. Ett äldre par har spårlöst försvunnit i samband med en busstur till den antika ruinen i Tindari. Det är två fall…',
			},
			{
				id: 3,
				title: 'Frankenstein',
				slug: 'frankenstein',
				author: 'Mary Shelley',
				image: 'frankenstein.jpg',
				isbn: '12343685',
				genre: ['Classic'],
				content:
					'Den unge Victor Frankenstein åker till universitetet i Ingolstadt för att studera. Han fastnar för naturvetenskaperna och framför allt för kemin. En sak intresserar honom särskilt …',
			},
			{
				id: 4,
				title: 'Pippi Långstrump',
				slug: 'pippilangstrump',
				author: 'Astrid Lindgren',
				image: 'pippi.jpg',
				isbn: '555877',
				genre: ['Childrens books'],
				content:
					'Klassiska Pippi-äventyr i ny utgåva! Här hittar du bilderböckerna Känner du Pippi Långstrump?, Pippi hittar en spunk och Pippi i Humlegården i en samlingsvolym.Följ med när Pippi …',
			},
		];

		//för nedre delen av appen
		this.booksFromService = booksFromService;

		//from inputs
		this.newTitle = '';
		this.newAuthor = '';
		this.newIsbn = '';
		this.selectedGenre = '';

		this.error = '';
		//console.log(this);
	} //constructor ends

	toogleView(expanded) {
		this.expanded = !this.expanded;
		console.log('view more', this.expanded);
	}

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

	toggleInput($event) {
		this.readonlyVarOne = false;
		//	$event.target.removeAttr('readonly');
		//console.log('toggle', $event.target);
	}
	blurFunc() {
		this.readonlyVarOne = true;
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
