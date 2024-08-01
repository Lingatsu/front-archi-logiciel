import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction } from "../transaction";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="transaction.photo" alt="Exterior photo of {{transaction.name}}">
      <h2 class="listing-heading">{{ transaction.name }}</h2>
      <p class="listing-location">{{ transaction.city}}, {{transaction.state }}</p>
      <a [routerLink]="['/details', transaction.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
 @Input() transaction!: Transaction;
}
