import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from "../transaction.service";
import { TransactionComponent } from "../transaction/transaction.component";
import {Transaction} from "../transaction";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
    template: `
  <article>
    <img class="listing-photo" [src]="transaction?.photo"
      alt="Exterior photo of {{transaction?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{transaction?.name}}</h2>
      <p class="listing-location">{{transaction?.city}}, {{transaction?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this flower</h2>
      <ul>
        <li>Type of Flower: {{transaction?.name}}</li>
        <li>Origin: {{transaction?.city}}, {{transaction?.state}}</li>
        <li>Available Units: {{transaction?.availableUnits}}</li>
        <li>Color: {{transaction?.color}}</li>
        <li>Fragrance: {{transaction?.fragrance}}</li>
        <li>Season: {{transaction?.season}}</li>
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
    const transactionId = Number(this.route.snapshot.params['id']);
    this.transaction = this.transactionService.getTransactionById(transactionId);
  }

}
