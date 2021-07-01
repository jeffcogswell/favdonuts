import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { DonutdetailComponent } from './donutdetail.component';

let component: DonutdetailComponent;
let fixture: ComponentFixture<DonutdetailComponent>;

describe('donutdetail component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DonutdetailComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(DonutdetailComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
