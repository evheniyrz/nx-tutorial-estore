import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'product',
    loadComponent: () =>
      import('@nx-tutorial-estore/products').then((c) => c.ProductsComponent),
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('@nx-tutorial-estore/orders').then((c) => c.OrderListComponent),
  },
];
