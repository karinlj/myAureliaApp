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
			/*  {
				route: '',
				name: 'home',
				title: 'Home',
				nav: true,
				moduleId: PLATFORM.moduleName('./modules/home/home'),
			}, */
		]);
	}
}
