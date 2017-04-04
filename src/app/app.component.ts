import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AdmStatusService} from './shared/services/adm-status.service';
import {User} from "./shared/models/User";
import {AdmSideBarTreeItem, AdmSideBarTreeItemLabel} from "./shared/models/AdmSideBarTreeItem";
import {AdmCtrlBarProgressItem} from "./shared/models/AdmCtrlBarProgressItem";
import {AdmCtrlBarHeaderItem} from "./shared/models/AdmCtrlBarHeaderItem";
import {AdmCtrlBarInfoBoxItem} from "./shared/models/AdmCtrlBarInfoBoxItem";
import {AdmCtrlBarCheckBoxItem} from "./shared/models/AdmCtrlBarCheckBoxItem";
import {AdmCtrlBarTab} from "./shared/models/AdmCtrlBarTab";

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

  private ctrlBarTabs:AdmCtrlBarTab[];

  constructor(private statusService:AdmStatusService) {
  }

  ngOnInit():void {

    this.loginUser = new User();
    this.loginUser.name = 'zmlcoder';
    this.loginUser.imgUrl = '../assets/img/angular-logo.png';
    this.loginUser.status = 'Online';
    this.loginUser.statusIcon = 'fa fa-circle text-success';

    this.treeViewItems = this.createSideBarItems();

    this.ctrlBarTabs = this.createCtrlBarTabs();
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

  /**
   *  Create right bar tabs model.
   * @returns {AdmCtrlBarTab[]}
   */
  private createCtrlBarTabs():AdmCtrlBarTab[] {
    return [this.createOptionsTab(), this.createHomeTab(), this.createSettingsTab()];
  }

  /**
   *  Create options tab model.
   * @returns {AdmCtrlBarTab}
   */
  private createOptionsTab():AdmCtrlBarTab {
    let optionsTab = new AdmCtrlBarTab();
    optionsTab.id = 'optionsTab';
    optionsTab.icon = 'fa fa-wrench';

    //  Layout Options Items
    let layoutOptionsHeaderItem = new AdmCtrlBarHeaderItem();
    layoutOptionsHeaderItem.title = 'Layout Options';
    optionsTab.items.push(layoutOptionsHeaderItem);

    let fixedLayoutItem = new AdmCtrlBarCheckBoxItem();
    fixedLayoutItem.title = 'Fixed layout';
    fixedLayoutItem.description = `Activate the fixed layout. You can't use fixed and boxed layouts together`;
    optionsTab.items.push(fixedLayoutItem);

    let boxedLayoutItem = new AdmCtrlBarCheckBoxItem();
    boxedLayoutItem.title = 'Boxed Layout';
    boxedLayoutItem.description = `Activate the boxed layout`;
    optionsTab.items.push(boxedLayoutItem);

    let toggleSidebarItem = new AdmCtrlBarCheckBoxItem();
    toggleSidebarItem.title = 'Toggle Sidebar';
    toggleSidebarItem.isChecked = true;
    toggleSidebarItem.description = `Toggle the left sidebar's state (open or collapse)`;
    toggleSidebarItem.clickFn = item => {
      this.statusService.toggleSidebar();
    };
    optionsTab.items.push(toggleSidebarItem);

    let expandOnHoverItem = new AdmCtrlBarCheckBoxItem();
    expandOnHoverItem.title = 'Sidebar Expand on Hover';
    expandOnHoverItem.description = `Let the sidebar mini expand on hover`;
    optionsTab.items.push(expandOnHoverItem);

    let toggleRightBarSlideItem = new AdmCtrlBarCheckBoxItem();
    toggleRightBarSlideItem.title = 'Toggle Right Sidebar Slide';
    toggleRightBarSlideItem.isChecked = true;
    toggleRightBarSlideItem.description = `Toggle between slide over content and push content effects`;
    toggleRightBarSlideItem.clickFn = item => {
      this.statusService.toggleCtrlBar();
    };
    optionsTab.items.push(toggleRightBarSlideItem);

    let toggleRightBarSkinItem = new AdmCtrlBarCheckBoxItem();
    toggleRightBarSkinItem.title = 'Toggle Right Sidebar Skin';
    toggleRightBarSkinItem.description = `Toggle between dark and light skins for the right sidebar`;
    optionsTab.items.push(toggleRightBarSkinItem);

    return optionsTab;
  }

  /**
   *  Create home tab model.
   * @returns {AdmCtrlBarTab}
   */
  private createHomeTab():AdmCtrlBarTab {

    let homeTab = new AdmCtrlBarTab();
    homeTab.id = 'homeTab';
    homeTab.icon = 'fa fa-home';

    //  Recent Activity Items
    let recentActivityHeaderItem = new AdmCtrlBarHeaderItem();
    recentActivityHeaderItem.title = 'Recent Activity';
    homeTab.items.push(recentActivityHeaderItem);

    let redInfoItem = new AdmCtrlBarInfoBoxItem();
    redInfoItem.icon = 'fa fa-birthday-cake bg-red';
    redInfoItem.title = `Langdon's Birthday`;
    redInfoItem.description = 'Will be 23 on April 24th';
    redInfoItem.clickFn = item=>console.info(item.title);
    homeTab.items.push(redInfoItem);

    let yellowInfoItem = new AdmCtrlBarInfoBoxItem();
    yellowInfoItem.icon = 'fa fa-user bg-yellow';
    yellowInfoItem.title = `Frodo Updated His Profile`;
    yellowInfoItem.description = 'New phone +1(800)555-1234';
    yellowInfoItem.clickFn = item=>console.info(item.title);
    homeTab.items.push(yellowInfoItem);

    let blueInfoItem = new AdmCtrlBarInfoBoxItem();
    blueInfoItem.icon = 'fa fa-envelope-o bg-light-blue';
    blueInfoItem.title = `Nora Joined Mailing List`;
    blueInfoItem.description = 'nora@example.com';
    blueInfoItem.clickFn = item=>console.info(item.title);
    homeTab.items.push(blueInfoItem);

    let greenInfoItem = new AdmCtrlBarInfoBoxItem();
    greenInfoItem.icon = 'fa fa-file-code-o bg-green';
    greenInfoItem.title = `Cron Job 254 Executed`;
    greenInfoItem.description = 'Execution time 5 seconds';
    greenInfoItem.clickFn = item=>console.info(item.title);
    homeTab.items.push(greenInfoItem);

    //  Tasks Progress Items
    let tasksProgressHeaderItem = new AdmCtrlBarHeaderItem();
    tasksProgressHeaderItem.title = 'Tasks Progress';
    homeTab.items.push(tasksProgressHeaderItem);

    let designProgressItem = new AdmCtrlBarProgressItem();
    designProgressItem.title = 'Custom Template Design';
    designProgressItem.progressClass = 'progress-bar progress-bar-danger';
    designProgressItem.labelClass = 'label label-danger pull-right';
    designProgressItem.percentage = 70;
    designProgressItem.clickFn = item=>console.info(item.title);
    homeTab.items.push(designProgressItem);

    let updateResumeProgressItem = new AdmCtrlBarProgressItem();
    updateResumeProgressItem.title = 'Update Resume';
    updateResumeProgressItem.progressClass = 'progress-bar progress-bar-success';
    updateResumeProgressItem.labelClass = 'label label-success pull-right';
    updateResumeProgressItem.percentage = 95;
    updateResumeProgressItem.clickFn = item=>console.info(item.title);
    homeTab.items.push(updateResumeProgressItem);

    let laravelIntegrationProgressItem = new AdmCtrlBarProgressItem();
    laravelIntegrationProgressItem.title = 'Laravel Integration';
    laravelIntegrationProgressItem.progressClass = 'progress-bar progress-bar-warning';
    laravelIntegrationProgressItem.labelClass = 'label label-warning pull-right';
    laravelIntegrationProgressItem.percentage = 50;
    laravelIntegrationProgressItem.clickFn = item=>console.info(item.title);
    homeTab.items.push(laravelIntegrationProgressItem);

    let backEndFrameworkProgressItem = new AdmCtrlBarProgressItem();
    backEndFrameworkProgressItem.title = 'Back End Framework';
    backEndFrameworkProgressItem.progressClass = 'progress-bar progress-bar-primary';
    backEndFrameworkProgressItem.labelClass = 'label label-primary pull-right';
    backEndFrameworkProgressItem.percentage = 50;
    backEndFrameworkProgressItem.clickFn = item=>console.info(item.title);
    homeTab.items.push(backEndFrameworkProgressItem);

    return homeTab;
  }

  /**
   *  Create settings tab model.
   * @returns {AdmCtrlBarTab}
   */
  private createSettingsTab():AdmCtrlBarTab {

    let settingsTab = new AdmCtrlBarTab();
    settingsTab.id = 'settingsTab';
    settingsTab.icon = 'fa fa-gears';

    // General Settings Items
    let generalSettingsHeaderItem = new AdmCtrlBarHeaderItem();
    generalSettingsHeaderItem.title = 'General Settings';
    settingsTab.items.push(generalSettingsHeaderItem);

    let reportPanelUsageItem = new AdmCtrlBarCheckBoxItem();
    reportPanelUsageItem.title = 'Report panel usage';
    reportPanelUsageItem.isChecked = true;
    reportPanelUsageItem.description = `Some information about this general settings option`;
    reportPanelUsageItem.clickFn = item => console.info(item.title);
    settingsTab.items.push(reportPanelUsageItem);

    let allowMailRedirectItem = new AdmCtrlBarCheckBoxItem();
    allowMailRedirectItem.title = 'Allow mail redirect';
    allowMailRedirectItem.isChecked = false;
    allowMailRedirectItem.description = `Other sets of options are available`;
    allowMailRedirectItem.clickFn = item => console.info(item.title);
    settingsTab.items.push(allowMailRedirectItem);

    let exposeUserNameItem = new AdmCtrlBarCheckBoxItem();
    exposeUserNameItem.title = 'Expose author name in posts';
    exposeUserNameItem.isChecked = true;
    exposeUserNameItem.description = `Allow the user to show his name in blog posts`;
    exposeUserNameItem.clickFn = item => console.info(item.title);
    settingsTab.items.push(exposeUserNameItem);

    // Chat Settings Items
    let chatSettingsHeaderItem = new AdmCtrlBarHeaderItem();
    chatSettingsHeaderItem.title = 'Chat Settings';
    settingsTab.items.push(chatSettingsHeaderItem);

    let showMeOnlineItem = new AdmCtrlBarCheckBoxItem();
    showMeOnlineItem.title = 'Show me as online';
    showMeOnlineItem.isChecked = true;
    showMeOnlineItem.clickFn = item => console.info(item.title);
    settingsTab.items.push(showMeOnlineItem);

    let notificationItem = new AdmCtrlBarCheckBoxItem();
    notificationItem.title = 'Turn off notifications';
    notificationItem.isChecked = false;
    notificationItem.clickFn = item => console.info(item.title);
    settingsTab.items.push(notificationItem);

    return settingsTab;
  }
}
