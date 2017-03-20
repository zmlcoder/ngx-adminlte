import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AdmStatusService} from './shared/services/adm-status.service';
import {User} from "./shared/models/User";
import {AdmSideBarTreeItem} from "./shared/models/AdmSideBarTreeItem";

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styles: [
    './app.component.css'
  ]
})
export class AppComponent implements OnInit {

  private loginUser:User;
  private treeViewItems:AdmSideBarTreeItem[];

  constructor(private statusService:AdmStatusService) {
  }

  ngOnInit():any {

    this.loginUser = new User();
    this.loginUser.name = 'zmlcoder';
    this.loginUser.imgUrl = '../assets/img/angular-logo.png';
    this.loginUser.status = 'Online';


    let headerItem = new AdmSideBarTreeItem();
    headerItem.type = 'header';
    headerItem.text = 'MAIN NAVIGATION';

    let layoutsItem = new AdmSideBarTreeItem();
    layoutsItem.type = 'item';
    layoutsItem.leftIcon = 'fa fa-files-o';
    layoutsItem.text = 'Layout Options';
    layoutsItem.labelText = '4';
    layoutsItem.labelClass = 'label label-primary pull-right';

    let widgetsItem = new AdmSideBarTreeItem();
    widgetsItem.type = 'item';
    widgetsItem.leftIcon = 'fa fa-th';
    widgetsItem.text = 'Widgets';
    widgetsItem.labelText = 'new';
    widgetsItem.labelClass = 'label pull-right bg-green';

    let dashboardGroup = new AdmSideBarTreeItem();
    dashboardGroup.type = 'group';
    dashboardGroup.leftIcon = 'fa fa-dashboard';
    dashboardGroup.text = 'Dashboard';
    dashboardGroup.rightIcon = 'fa fa-angle-left pull-right';

    this.treeViewItems = [headerItem, layoutsItem, widgetsItem, dashboardGroup,];

    return {};
  }

}
