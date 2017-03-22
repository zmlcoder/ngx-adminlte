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
    layoutsItem.type = 'treeview';
    layoutsItem.leftIcon = 'fa fa-files-o';
    layoutsItem.text = 'Layout Options';
    layoutsItem.labelText = '4';
    layoutsItem.labelClass = 'label label-primary pull-right';

    let widgetsItem = new AdmSideBarTreeItem();
    widgetsItem.type = 'treeview';
    widgetsItem.leftIcon = 'fa fa-th';
    widgetsItem.text = 'Widgets';
    widgetsItem.labelText = 'new';
    widgetsItem.labelClass = 'label pull-right bg-green';

    let dashboardGroup = new AdmSideBarTreeItem();
    dashboardGroup.type = 'treeview';
    dashboardGroup.isActive = true;
    dashboardGroup.leftIcon = 'fa fa-dashboard';
    dashboardGroup.text = 'Dashboard';
    dashboardGroup.rightIcon = 'fa fa-angle-left pull-right';

    let dashboard1 = new AdmSideBarTreeItem();
    dashboard1.leftIcon = 'fa fa-circle-o';
    dashboard1.text = 'Dashboard v1';
    let dashboard2 = new AdmSideBarTreeItem();
    dashboard2.leftIcon = 'fa fa-circle-o';
    dashboard2.text = 'Dashboard v2';
    dashboardGroup.children = [dashboard1, dashboard2];

    let multilevel = new AdmSideBarTreeItem();
    multilevel.type = 'treeview';
    multilevel.isActive = true;
    multilevel.leftIcon = 'fa fa-share';
    multilevel.text = 'Multilevel';
    multilevel.rightIcon = 'fa fa-angle-left pull-right';

    let levelOne1 = new AdmSideBarTreeItem();
    levelOne1.leftIcon = 'fa fa-circle-o';
    levelOne1.text = 'levelOne';
    let levelOne2 = new AdmSideBarTreeItem();
    levelOne2.leftIcon = 'fa fa-circle-o';
    levelOne2.text = 'levelOne';
    let levelOne3 = new AdmSideBarTreeItem();
    levelOne3.leftIcon = 'fa fa-circle-o';
    levelOne3.text = 'levelOne';

    let levelTwo1 = new AdmSideBarTreeItem();
    levelTwo1.leftIcon = 'fa fa-circle-o';
    levelTwo1.text = 'levelTwo';
    let levelTwo2 = new AdmSideBarTreeItem();
    levelTwo2.leftIcon = 'fa fa-circle-o';
    levelTwo2.text = 'levelTwo';

    let levelThree1 = new AdmSideBarTreeItem();
    levelThree1.leftIcon = 'fa fa-circle-o';
    levelThree1.text = 'levelThree';
    let levelThree2 = new AdmSideBarTreeItem();
    levelThree2.leftIcon = 'fa fa-circle-o';
    levelThree2.text = 'levelThree';

    multilevel.children = [levelOne1, levelOne2, levelOne3];
    levelOne2.children = [levelTwo1, levelTwo2];
    levelOne2.isActive = true;
    levelOne2.rightIcon = 'fa fa-angle-left pull-right';
    levelTwo2.children = [levelThree1, levelThree2];
    levelTwo2.isActive = true;


    this.treeViewItems = [headerItem, dashboardGroup, layoutsItem, widgetsItem, multilevel];

    return {};
  }

}
