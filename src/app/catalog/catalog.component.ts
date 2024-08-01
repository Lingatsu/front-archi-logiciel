import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransactionComponent} from '../transaction/transaction.component';
import {Transaction} from "../transaction";
import { TransactionService } from "../transaction.service";

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
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-transaction *ngFor="let transaction of filteredFlowerList"
                       [transaction]="transaction">
      </app-transaction>
    </section>
  `,
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  transactionList: Transaction[] = [];
  filteredFlowerList: Transaction[] = [];
  transactionService: TransactionService = inject(TransactionService)

  constructor() {
    this.transactionList = this.transactionService.getAllTransactions();
    this.filteredFlowerList = this.transactionList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredFlowerList = this.transactionList;
    }

    this.filteredFlowerList = this.transactionList.filter(
      transaction => transaction?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
