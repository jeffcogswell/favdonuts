import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ListdonutsComponent } from './listdonuts/listdonuts.component';
import { DonutapiService } from './donutapi.service';
import { DonutdetailComponent } from './donutdetail/donutdetail.component';

@NgModule({
	declarations: [
		AppComponent,
		NavMenuComponent,
		HomeComponent,
		ListdonutsComponent,
		DonutdetailComponent
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot([
			{ path: '', component: HomeComponent, pathMatch: 'full' },
			{ path: 'list', component: ListdonutsComponent }
		])
	],
	providers: [DonutapiService],
	bootstrap: [AppComponent]
})
export class AppModule { }
