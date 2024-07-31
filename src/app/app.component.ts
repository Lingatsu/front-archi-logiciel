import {Component} from '@angular/core';
import { CatalogComponent } from './catalog/catalog.component';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="../assets/logo.webp" width="50" alt="logo" aria-hidden="true">
      </header>
      <section class="content">
        <app-catalog></app-catalog>
      </section>
    </main>
  `,
  /*  templateUrl: './app.component.html',*/
  styleUrls: ['./app.component.css'],
  imports: [
    CatalogComponent,
  ],
  standalone: true
})
export class AppComponent {
  title = 'Catalog';
}

