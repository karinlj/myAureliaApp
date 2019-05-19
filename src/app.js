//import rolesFromService from './services/roles-service';
import { AccessPolicy } from './services/access-policy';
import { inject } from 'aurelia-framework';

@inject(AccessPolicy)
export class App {
	constructor(accessPolicy) {
		this.accessPolicy = accessPolicy;
		/* 	this.user = localStorage.getItem('userMode');
		this.roles = rolesFromService; */
	}

	configureRouter(config, router) {
		this.router = router;
		config.title = 'My Aurelia App';
		config.map([
			{
				route: '',
				name: 'home',
				title: 'Home',
				nav: true,
				//this.user == 1
				// 	moduleId: this.roles[this.user].includes('seeInputs')
				moduleId: this.accessPolicy.showOrhide('seeHrFront')
					? PLATFORM.moduleName('./modules/home/home')
					: PLATFORM.moduleName('./modules/todoList/todo-list'),
			},
			{
				route: 'todos',
				name: 'todos',
				title: 'TodoList',
				nav: true,
				moduleId: PLATFORM.moduleName('./modules/todoList/todo-list'),
			},
			{
				route: 'booklist',
				name: 'booklist',
				title: 'Booklist',
				nav: true,
				moduleId: PLATFORM.moduleName('./modules/booklist/booklist'),
			},
			{
				route: 'single/:book_id',
				//route: 'single/:slug',
				name: 'single',
				title: '',
				//nav: true,
				moduleId: PLATFORM.moduleName('./modules/singleBook/single'),
			},
		]);
	}
}
