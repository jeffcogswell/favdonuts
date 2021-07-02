import { Component } from '@angular/core';
import { DonutapiService } from '../donutapi.service';

@Component({
	selector: 'app-donutdetail',
	templateUrl: './donutdetail.component.html',
	styleUrls: ['./donutdetail.component.css']
})
/** donutdetail component*/
export class DonutdetailComponent {

	isFavorite = false;
	detail = null;

	constructor(private donutService: DonutapiService) {

	}

	addFavorite() {
		console.log('Adding Favorite');
		console.log(this.detail);
		console.log(this.detail.id);
		this.donutService.addFavorite(this.detail.id, this.detail.name);
	}

	removeFavorite() {
		this.donutService.removeFavorite(this.detail.id);
	}

	changeCheckbox() {
		console.log(this.isFavorite);
		if (this.isFavorite) {
			this.addFavorite();
		}
		else {
			this.removeFavorite();
		}
	}
}
