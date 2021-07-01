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

    donutService: DonutapiService = null;
    constructor(theDService: DonutapiService) {
        this.donutService = theDService;
    }

    addFavorite() {
        console.log('Adding Favorite');
        console.log(this.detail.id);
        this.donutService.addFavorite(this.detail.id);
    }

    removeFavorite() {

	}
}
