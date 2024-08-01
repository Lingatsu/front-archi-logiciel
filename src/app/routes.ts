import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: CatalogComponent,
    title: 'Catalog page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Flower details'
  }
];

export default routeConfig;
