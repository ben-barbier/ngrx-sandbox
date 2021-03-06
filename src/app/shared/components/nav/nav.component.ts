import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UnicornsService } from '../../services/unicorns.service';
import { CartService } from '../../services/cart.service';
import * as moment from 'moment';

@Component({
    selector: 'fld-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {

    public averageAge$ = this.unicornsService.getAverageAge();
    public cart$ = this.cartService.cart;
    public today = moment().format('DD MM YYYY');

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    constructor(private breakpointObserver: BreakpointObserver,
                private unicornsService: UnicornsService,
                private cartService: CartService,
    ) {
    }

}
