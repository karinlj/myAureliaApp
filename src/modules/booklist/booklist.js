import { inject } from 'aurelia-framework';
import { bindable } from 'aurelia-framework';
//import { BookService } from "../book-service/book-service";
import { Router } from 'aurelia-router';

@inject(Router)
export class Booklist {
	/* 	genres = [
		{ id: 0, name: 'Thriller' },
		{ id: 1, name: 'Drama' },
		{ id: 2, name: 'Comedy' },
  ]; 
  
  selectedGenreId = null;
  */

	books = [
		{
			id: 0,
			title: 'Oliver Twist',
			slug: 'oliver-twist',
			author: 'Charles Dickens',
		},
		{
			id: 1,
			title: 'Pyramid of Mud',
			slug: 'pyramid-of-mud',
			author: 'Andrea Camilleri',
		},
		{
			id: 2,
			title: 'Frankenstein',
			slug: 'frankenstein',
			author: 'Mary Shelley',
		},
	];

	constructor(router) {
		this.router = router;
		//this.bookService = bookService;
		/* 	this.books = [];
		this.genres = [];
		this.genreId; */
	}

	async attached() {
		this.title = 'Låna en bok!';
		//this.subHeading = 'Välj genre';

		//får tillbaka http-reponse - här:json + statuskod etc
		// let reponse = await this.httpClient.fetch('api/books');
		// //vill bara ha json som blir lista
		// this.books = await reponse.json();

		// console.log(this.books);

		// //får tillbaka http-reponse - här:json + statuskod etc
		// let reponseGenres = await this.httpClient.fetch('api/genres');
		// //vill bara ha json som blir lista
		// this.genres = await reponseGenres.json();

		// console.log(this.genres);
	}

	/* this.books = [
{
id: 1,
title: "Oliver Twist",
slug: "oliver-twist",
author: "Charles Dickens",
isbn: '5698',
genre: 'Drama',
content: "Stackars Oliver Twist! Det finns nog inte någon människa som
vill byta plats med denna godhjärtade och tappre pojke, vars
ensamstående mor dör i barnsäng så att han tvingas …"
},
{
id: 2,
title: "Nya äventyr med Montalbano",
slug: "nya-aventyr-med-montalbano",
author: "Andrea Camilleri",
isbn: '1287',
genre: 'Deckare',
content: "En ung man har mördats utanför sin port på adress Via Cavour
44. Ett äldre par har spårlöst försvunnit i samband med en busstur
till den antika ruinen i Tindari. Det är två fall…"
},
{
id: 3,
title: "Frankenstein",
slug: "frankenstein",
author: "Mary Shelley",
isbn: '1234',
genre: 'Drama',
content: "Den unge Victor Frankenstein åker till universitetet i
Ingolstadt för att studera. Han fastnar för naturvetenskaperna och
framför allt för kemin. En sak intresserar honom särskilt …"
},
{
id: 3,
title: "Pyramid of Mud",
slug: "pyramid-of-mud",
author: "Andrea Camilleri",
isbn: '56987',
genre: 'Deckare',
content: "The Pyramid of Mud is the twenty-second Montalbano mystery
from Italy's finest crime writer, Andrea Camilleri.It's been raining
for days in Vigata, and the persistent downpours …"
},
]; */

	// //activate(): to fetch info from the get-params from the url
	// activate(params) {
	// // this.error = "";
	// //find(slug) from PostService
	// this.postService
	// .find(params.slug)
	// .then(data => {

	// console.log('slug', params.slug);
	// this.post = data.post;
	// })
	// .catch(error => {
	// //this.error = error.message;
	// this.ea.publish('bread', {
	// type: 'error',
	// message: error.message
	// })
	// this.router.navigateToRoute('blog-home');
	// });
	// }
}
