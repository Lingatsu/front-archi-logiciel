import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {TransactionService} from "../transaction.service";
import {Transaction} from "../transaction";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img class="listing-photo" [src]="transaction?.image"
           alt="Exterior photo of {{transaction?.name}}"/>
      <section class="listing-description">
        <h2 class="listing-heading">{{ transaction?.name }}</h2>
        <p class="listing-location">{{ transaction?.location }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this flower</h2>
        <ul>
          <li>Type of Flower: {{ transaction?.name }}</li>
          <li>Origin: {{ transaction?.location }}</li>
          <li>Quantity : {{ transaction?.quantity }}</li>
          <li>Price: {{ transaction?.price }}</li>
        </ul>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  transactionService = inject(TransactionService);
  transaction: Transaction | undefined;

  constructor() {
    const transactionId = this.route.snapshot.params['id'];
    this.transactionService.getTransactionById(transactionId).then(transaction =>
    {
      this.transaction = transaction;
    });

  }

}
