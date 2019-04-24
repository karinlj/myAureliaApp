import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';
import books from '../../services/book-service';

@inject(Router)
export class Single {
	//
	constructor(router) {
		this.router = router;
		this.books = books;
		this.book = null;
	}

	async attached() {
		this.title = '';
		//same as React:   let id = this.props.match.params.post_id;
		let slug = this.router.currentInstruction.params['slug'];
		console.log(slug);

		let book = this.books.find(book => {
			return book.slug.toLowerCase() === slug.toLowerCase();
		});
		this.book = book;

		//samma sak:
		// let book = this.books.find(
		// 	book => book.slug.toLowerCase() === slug.toLowerCase()
		// );

		// let book = this.books.find(book => book.slug);

		// let book = this.books.find(book => {
		// 	return book.slug;
		// });
		//Bitmask
	}
}
