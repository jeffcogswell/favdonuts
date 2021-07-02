import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
	constructor(
		private donutService: DonutapiService,
		private thisroute: ActivatedRoute
	) { }

	ngOnInit() {

		this.thisroute.paramMap.subscribe(params => {
			console.log(params.get('listtype'));
			if (params.get('listtype') == 'favs') {
				this.donutService.getFavsByUser(donuts => {
					this.donuts = donuts.map(item => {
						return { id: item.donut, ref: '', name: item.donutname };
					})
					console.log(this.donuts);
				})
			}
			else {
				this.donutService.getAllDonuts(donuts => {
					this.donuts = donuts.results;
					console.log(this.donuts);
				});
			}
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
