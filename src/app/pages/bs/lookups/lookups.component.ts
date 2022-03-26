import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';
import { BaseService } from 'src/app/core/services/base.service';
import { LookUpService } from 'src/app/core/services/lookUp.service';
import { BaseComponent } from '../../base/base/base.component';

@Component({
  selector: 'lookups',
  templateUrl: './lookups.component.html',
  styleUrls: ['./lookups.component.scss']
})
export class LookupsComponent extends BaseComponent implements OnInit {

  constructor(
    public baseService: BaseService,
    private route: ActivatedRouteSnapshot,
    private lookUpService: LookUpService,
    private alertService: AlertService
  ) {
    super();
  }

  ngOnInit(): void {
  }

}
