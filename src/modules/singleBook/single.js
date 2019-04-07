import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';

@inject(Router)
export class Single {
	//
	constructor(router) {
		this.router = router;
		this.message = 'Hello Single';

		//this.book = null;
	}

	/* 	async attached() {
		this.title = '';

		 	let slug = this.router.currentInstruction.params['slug'];
		let response await this.httpClient.fetch('api/books/' + ${slug});
		this.book = await response.json(); 
	} */
}
