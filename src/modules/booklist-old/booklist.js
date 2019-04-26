import { inject } from './aurelia-framework';
//import { bindable } from 'aurelia-framework';
//import { Router } from 'aurelia-router';
import books from '../../services/book-service';
import genres from '../../services/genre-service';

@inject()
export class Booklist {
	constructor() {
		this.books = books;
		this.genres = genres;
		this.pageTitle = 'Borrow a book!';
		this.subTitle = 'Choose genre';

		this.selectedGenre = null;
	}

	async attached() {
		//
	}
}
