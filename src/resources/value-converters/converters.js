import moment from 'moment';

//from Tutorialspoint https://www.tutorialspoint.com/aurelia/aurelia_converters.htm
//Aurelia can recognize any class that ends with ValueConverter
export class DateFormatValueConverter {
	toView(value) {
		return moment(value).format('YYYY');
	}
}
//vad är toView??
