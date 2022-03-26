import { ActivatedRouteSnapshot } from '@angular/router';
import { BaseComponent } from './../../base/base/base.component';
import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { LookUpService } from 'src/app/core/services/lookUp.service';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})
export class LookupComponent extends BaseComponent implements OnInit {

  constructor(
    public baseService: BaseService,
    private route: ActivatedRouteSnapshot,
    private lookUpService: LookUpService,
    private alertService: AlertService
  ) { super(); }

  ngOnInit(): void {
  }

}
