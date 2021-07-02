import { Component } from '@angular/core';
import { Router } from '@angular/router'; // ADD THIS
import { DonutapiService } from '../donutapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

	// We did this the LONG way.
	//donutService: DonutapiService = null;
	//constructor(theDService: DonutapiService) {
	//	this.donutService = theDService;
	//}
	// Let's do it the SHORT way
	constructor(
		private donutService: DonutapiService,
		private route: Router
	) { }

	// Start with a list of variables
	// that map to the individual controls
	// on the page. In our case we just have
	// a text input, and a button. The button
	// doesn't need a variable, just a function
	// that runs when we click it

	username: string = ''; // Map to the input box

	// This function runs when we click the button
	clickLogin() {
		this.donutService.username = this.username;
		this.route.navigateByUrl('/list');
	}
}
