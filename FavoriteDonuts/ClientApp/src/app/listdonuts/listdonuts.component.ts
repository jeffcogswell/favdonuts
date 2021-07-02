import { Component, ViewChild } from '@angular/core';
import { DonutapiService } from '../donutapi.service';
import { DonutdetailComponent } from '../donutdetail/donutdetail.component';

@Component({
	selector: 'app-listdonuts',
	templateUrl: './listdonuts.component.html',
	styleUrls: ['./listdonuts.component.css']
})
/** listdonuts component*/
export class ListdonutsComponent {

	donuts = null;
	@ViewChild('MyDonutDetail', { static: false }) detailComp: DonutdetailComponent = null;

	/** listdonuts ctor */
	constructor(private donutService: DonutapiService) {
		this.donutService.getAllDonuts(donuts => {

			// The list we get back looks like this:
			/*
			 *  {
					"count": 2,
					"results": [
						{
							"id": 1,
							"ref": "https://grandcircusco.github.io/demo-apis/donuts/1.json",
							"name": "Glazed"
						},
						{
							"id": 2,
							"ref": "https://grandcircusco.github.io/demo-apis/donuts/2.json",
							"name": "Chocolate Glazed"
						}
					]
				}
			 */
			// we don't need the whole object we got back. All we really need
			// is the "results" member, which contains the actual list of donuts
			this.donuts = donuts.results;
			console.log(this.donuts);
		});
	}

	showDetail(id) {
		console.log(id);
		this.donutService.getDonutDetail(id, det_result => {
			console.log(det_result);
			this.detailComp.detail = det_result;
			if (this.donutService.username) {
				// User is logged in, so see if this is a favorite
				this.donutService.isFavorite(id, fav_result => {
					console.log('IS FAVORITE:');
					console.log(fav_result);
					this.detailComp.isFavorite = fav_result;
				})
			}
		});
	}
}
