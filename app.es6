import {Component, Template, bootstrap} from 'angular2/angular2';

// annotation section
@Component({
	selector: 'my-app'
})
@Template({
	inline: '<h1>Hello {{ name }}</h1>'
})
// component controller
class MyAppComponent {
	constructor() {
		this.name = 'LOL'
	}
}

bootstrap(MyAppComponent);