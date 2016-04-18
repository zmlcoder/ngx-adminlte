
import {Component} from "angular2/core";
import {AdmSidebarSwitchDirective} from "../shared/directives/adm-sidebar-switch.directive";
import {Unless} from "../shared/directives/unless.directive";

@Component({
  selector: 'adm-header',
  moduleId: module.id,
  providers: [],
  viewProviders: [],
  templateUrl: './adm-header.component.html',
  styleUrls: ['./adm-header.component.css'],
  directives: [AdmSidebarSwitchDirective,Unless],
  pipes: []
})
export class AdmHeaderComponent {

  constructor(){
  }

}
