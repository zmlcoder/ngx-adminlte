/**
 * Created by zml on 2016/9/4.
 */

import {Component, ViewEncapsulation} from "@angular/core";
import {AdmStatusService} from "../shared/services/adm-status.service";

@Component({
  selector: 'adm-ctrlbar',
  templateUrl: './adm-ctrlbar.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AdmCtrlBarComponent {
  constructor(private statusService:AdmStatusService) {
  }
}
