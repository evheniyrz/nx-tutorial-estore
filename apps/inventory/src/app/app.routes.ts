import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'prod',
    loadComponent: () =>
      import('@nx-tutorial-estore/products').then(
        (c) => c.ProductListComponent
      ),
  },
];
