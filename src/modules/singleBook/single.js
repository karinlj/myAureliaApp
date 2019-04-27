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
		let slug = this.router.currentInstruction.params['slug'];
		console.log(slug);

		let b = this.booksFromService.find(b => {
			return b.slug.toLowerCase() === slug.toLowerCase();
		});
		this.b = b;
	}
}
