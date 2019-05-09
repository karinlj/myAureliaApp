export class App {
	configureRouter(config, router) {
		this.router = router;
		config.title = 'My Aurelia App';
		config.map([
			{
				route: '',
				name: 'home',
				title: 'Home',
				nav: true,
				moduleId: PLATFORM.moduleName('./modules/home/home'),
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
