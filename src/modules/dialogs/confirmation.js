import { DialogController } from 'aurelia-dialog';

export class ConfirmationModel {
	constructor(title, message) {
		this.title = title;
		this.message = message;
	}
}
@inject(DialogController)
export class Confirmation {
	//
	constructor(dialogController) {
		this.dialogController = dialogController;
		this.anwer = null;
	}
	activate(confirmationModel) {
		this.title = confirmationModel.title;
		this.message = confirmationModel.message;

		console.log('my ConfirmationModel', confirmationModel);
	}
}
