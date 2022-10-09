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
import { BoxiconsComponent } from './icons/boxicons/boxicons.component';
import { DripiconsComponent } from './icons/dripicons/dripicons.component';
import { FontawsomeComponent } from './icons/fontawsome/fontawsome.component';
import { MaterialdesignComponent } from './icons/materialdesign/materialdesign.component';
import { BasicComponent } from './tables/basic/basic.component';
import { ChartsComponent } from './charts/charts.component';
import { UiComponent } from './ui/ui.component';

@NgModule({
  declarations: [
    DashboardsComponent,
    BaseComponent,
    LookupsComponent,
    LookupComponent,
    LocationsComponent,
    BoxiconsComponent,
    DripiconsComponent,
    FontawsomeComponent,
    MaterialdesignComponent,
    BasicComponent,
    ChartsComponent,
    UiComponent,
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
