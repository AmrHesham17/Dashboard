import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LookUpsResolver } from '../core/resolvers/lookUp.resolver';
import { LookupsComponent } from './bs/lookups/lookups.component';

import { DashboardsComponent } from './dashboards/dashboards.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardsComponent
      },
      {
        path: 'lookUps',
        component: LookupsComponent,
        resolve: {
          // lookups: LookUpsResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
