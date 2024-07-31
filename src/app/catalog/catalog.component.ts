import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransactionComponent} from '../transaction/transaction.component';
import {Catalogtransaction} from "../catalogtransaction";

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [
    CommonModule,
    TransactionComponent
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-transaction [catalogTransaction]="catalogtransaction"></app-transaction>
    </section>
  `,
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  catalogtransaction: Catalogtransaction = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  }
}
