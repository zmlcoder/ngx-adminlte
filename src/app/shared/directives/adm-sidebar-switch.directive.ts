import {Directive} from "@angular/core";
import {AdmStatusService} from "../services/adm-status.service";

@Directive({
  selector: '[adm-sidebar-switch]',
  host: {
    '(click)': 'onClick()'
  }
})
export class AdmSidebarSwitchDirective {

  constructor(private statusService:AdmStatusService) {
  }

  onClick() {
    this.statusService.toggleSidebar();
  }
}
