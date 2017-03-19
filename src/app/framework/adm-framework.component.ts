/**
 * Created by zml on 2016/9/4.
 */

import {Component, ViewEncapsulation} from "@angular/core";
import {AdmStatusService} from "../shared/services/adm-status.service";

@Component({
  selector: 'adm-framework',
  templateUrl: './adm-framework.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AdmFrameworkComponent {

  constructor(private statusService:AdmStatusService) {
  }

}
