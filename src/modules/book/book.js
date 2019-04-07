import { bindable } from 'aurelia-framework';

export class Book {
	//book = prop of this custom element
	@bindable book;
	@bindable linked;

	constructor() {}

	loanFunc() {
		alert('låna denna');
	}
}

//route: single-post
