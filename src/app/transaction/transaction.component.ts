import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Catalogtransaction } from "../catalogtransaction";

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="catalogTransaction.photo" alt="Exterior photo of {{catalogTransaction.name}}">
      <h2 class="listing-heading">{{ catalogTransaction.name }}</h2>
      <p class="listing-location">{{ catalogTransaction.city}}, {{catalogTransaction.state }}</p>
    </section>
  `,
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
 @Input() catalogTransaction!: Catalogtransaction;
}
