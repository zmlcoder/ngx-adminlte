import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AdmStatusService} from './shared/services/adm-status.service';
import {User} from "./shared/models/User";
import {AdmSideBarTreeItem, AdmSideBarTreeItemLabel} from "./shared/models/AdmSideBarTreeItem";

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

  ngOnInit():void {

    this.loginUser = new User();
    this.loginUser.name = 'zmlcoder';
    this.loginUser.imgUrl = '../assets/img/angular-logo.png';
    this.loginUser.status = 'Online';
    this.loginUser.statusIcon = 'fa fa-circle text-success';

    this.treeViewItems = this.createSideBarItems();

  }

  /**
   *  Create side bar model.
   * @returns {AdmSideBarTreeItem[]} items.
   */
  private createSideBarItems():AdmSideBarTreeItem[] {

    let headerItem = new AdmSideBarTreeItem();
    headerItem.type = AdmSideBarTreeItem.TYPE_HEADER;
    headerItem.text = 'MAIN NAVIGATION';

    // Dashboard
    let dashboardGroup = new AdmSideBarTreeItem();
    dashboardGroup.type = AdmSideBarTreeItem.TYPE_TREEVIEW;
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

    // Layout Options
    let layoutsItem = new AdmSideBarTreeItem();
    layoutsItem.type = AdmSideBarTreeItem.TYPE_TREEVIEW;
    layoutsItem.leftIcon = 'fa fa-files-o';
    layoutsItem.text = 'Layout Options';
    layoutsItem.labels = [new AdmSideBarTreeItemLabel('4', 'label label-primary pull-right')];

    // Widgets
    let widgetsItem = new AdmSideBarTreeItem();
    widgetsItem.type = AdmSideBarTreeItem.TYPE_TREEVIEW;
    widgetsItem.leftIcon = 'fa fa-th';
    widgetsItem.text = 'Widgets';
    widgetsItem.labels = [new AdmSideBarTreeItemLabel('new', 'label bg-green pull-right')];
    widgetsItem.clickFn = (item) => console.info(item.text);

    // Mailbox
    let mailBoxItem = new AdmSideBarTreeItem();
    mailBoxItem.type = AdmSideBarTreeItem.TYPE_TREEVIEW;
    mailBoxItem.leftIcon = 'fa fa-envelope';
    mailBoxItem.text = 'Mailbox';
    mailBoxItem.labels = [
      new AdmSideBarTreeItemLabel('12', 'label bg-yellow pull-right'),
      new AdmSideBarTreeItemLabel('16', 'label bg-green pull-right'),
      new AdmSideBarTreeItemLabel('5', 'label bg-red pull-right'),
    ];

    // Multilevel
    let multilevel = new AdmSideBarTreeItem();
    multilevel.type = AdmSideBarTreeItem.TYPE_TREEVIEW;
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
    multilevel.rightIcon = 'fa fa-angle-left pull-right';
    levelOne2.children = [levelTwo1, levelTwo2];
    levelOne2.rightIcon = 'fa fa-angle-left pull-right';
    levelTwo2.children = [levelThree1, levelThree2];
    levelTwo2.rightIcon = 'fa fa-angle-left pull-right';

    return [headerItem, dashboardGroup, layoutsItem, widgetsItem, mailBoxItem, multilevel];
  }

}
