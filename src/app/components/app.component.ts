import {Component, OnInit} from 'angular2/core';
import {NameListService} from '../../shared/services/name-list.service';
import {AdmSidebarComponent} from "../../sidebar/adm-sidebar.component";
import {AdmHeaderComponent} from "../../header/adm-header.component";
import {AdmFooterComponent} from "../../footer/adm-footer.component";
import {AdmStatusService} from "../../shared/services/adm-status.service";
import {User} from "../../shared/models/User";
import {AdmUserPanelComponent} from "../../sidebar/adm-user-panel.component";

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService, AdmStatusService],
  moduleId: module.id,
  templateUrl: './app.component.html',
  directives: [AdmSidebarComponent, AdmHeaderComponent, AdmFooterComponent, AdmUserPanelComponent]
})
export class AppComponent implements OnInit {

  loginUser:User;
  statusService:AdmStatusService;

  ngOnInit():any {

    this.loginUser = new User();
    this.loginUser.name = 'zmlcoder';
    this.loginUser.imgUrl = 'assets/img/user2-160x160.jpg';
    this.loginUser.status = 'Online';

    return {};
  }

  constructor(statusService:AdmStatusService) {
    this.statusService = statusService;
  }

}
