import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';
//import { Book } from '../book/book';
import booksFromService from '../../services/book-service';

@inject(Router)
export class Single {
	//
	constructor(router) {
		this.singleBookTitle = 'singleBook';
		this.router = router;
		this.booksFromService = booksFromService;
		this.b = null;
	}

	async attached() {
		this.title = '';
		//same as React:   let id = this.props.match.params.post_id;
		//let slug = this.router.currentInstruction.params['slug'];

		//hämta id:t från url:en
		let id = this.router.currentInstruction.params['book_id'];
		console.log('my url-id', id);

		/* let singleBook = this.booksFromService.find(b => {
			return b.slug.toLowerCase() === slug.toLowerCase();
		}); */
		let singleBook = this.booksFromService.find(b => {
			return b.id == id;
		});
		this.b = singleBook;
	}
}
