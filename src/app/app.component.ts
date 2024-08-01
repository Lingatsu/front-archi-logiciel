import {Component} from '@angular/core';
import { CatalogComponent } from './catalog/catalog.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <main>
        <header class="brand-name">
          <a [routerLink]="['/']"><img class="brand-logo" src="../assets/logo.webp" width="50px" alt="logo" aria-hidden="true"></a>
        </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  /*  templateUrl: './app.component.html',*/
  styleUrls: ['./app.component.css'],
  imports: [
    CatalogComponent,
    RouterModule,
  ],
  standalone: true
})
export class AppComponent {
  title = 'Catalog';
}

