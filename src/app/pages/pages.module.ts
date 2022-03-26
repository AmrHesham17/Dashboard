import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountToModule } from 'angular-count-to';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbDropdownModule,
  NgbAccordionModule, NgbNavModule,
  NgbProgressbarModule, NgbTooltipModule,
  NgbPopoverModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { WidgetModule } from '../shared/widget/widget.module';
import { SharedModule } from '../shared/shared.module';
import { BaseComponent } from './base/base/base.component';
import { LookUpResolver, LookUpsResolver } from '../core/resolvers/lookUp.resolver';
import { LocationResolver, LocationsResolver } from '../core/resolvers/location.resolver';
import { LookupsComponent } from './bs/lookups/lookups.component';
import { LookupComponent } from './bs/lookup/lookup.component';
import { LocationsComponent } from './bs/locations/locations.component';

@NgModule({
  declarations: [
    DashboardsComponent,
    BaseComponent,
    LookupsComponent,
    LookupComponent,
    LocationsComponent,
  ],
  imports: [
    CommonModule,
    WidgetModule,
    PagesRoutingModule,
    ScrollToModule.forRoot(),
    NgApexchartsModule,
    NgbDropdownModule,
    NgbAccordionModule,
    NgbNavModule,
    NgbProgressbarModule,
    NgbCollapseModule,
    NgbTooltipModule,
    NgbPopoverModule,
    CountToModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE'
    }),
  ],
  providers: [
    LookUpResolver, LookUpsResolver, LocationResolver, LocationsResolver
  ]
})
export class PagesModule { }
