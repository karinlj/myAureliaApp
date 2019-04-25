import { bindable } from './aurelia-framework';
//import { DialogService } from 'aurelia-dialog';
//import { ConfirmationModel } from '../dialogs/confirmation';

//@inject(DialogService)
export class Book {
	//book and linked = props of this custom element
	@bindable book;
	@bindable linked;

	/* constructor(dialogService) {
		this.dialogService = dialogService;
	} */

	//viewModel = new ConfirmationModel
	//model= book
	onSubmit() {
		alert('You have borrowed this book');

		/* 	
		this.dialogService
			.open({
				viewModel: Confirmation,
				model: new ConfirmationModel(
					'Confirmation',
					`You have borrowed ${book.title}.`
				),
			})
			.then(response => {
				console.log('response', response);
				if (!response.wasCancelled) {
					console.log('good');
				} else {
					console.log('bad');
				}
				console.log('response.output', response.output);
			}); */
	}
}

//route: single-post
