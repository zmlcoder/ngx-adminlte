/**
 * Created by zml on 2017/7/29.
 */

import {NgModule, ModuleWithProviders} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule}   from '@angular/forms';

import {AdmFrameworkComponent} from "./framework/adm-framework.component";
import {AdmContentComponent} from "./content/adm-content.component";
import {AdmSideBarComponent} from "./sidebar/adm-sidebar.component";
import {AdmHeaderComponent} from "./header/adm-header.component";
import {AdmFooterComponent} from "./footer/adm-footer.component";
import {
  AdmCtrlBarComponent,
  AdmCtrlBarTabContentDirective,
  AdmCtrlBarTabTitleDirective,
  AdmCtrlBarTabDirective
} from "./ctrlbar/adm-ctrlbar.component";
import {AdmSideBarUserComponent} from "./sidebar/adm-sidebar-user.component";
import {AdmSidebarSwitchDirective} from "./shared/directives/adm-sidebar-switch.directive";
import {AdmStatusService} from "./shared/services/adm-status.service";
import {AdmHeaderCtrlBarComponent} from "./header/adm-header-ctrlbar.component";
import {RemoveHostDirective} from "./shared/directives/remove-host.directive";
import {AdmHeaderUserComponent} from "./header/adm-header-user.component";
import {AdmSideBarSearchComponent} from "./sidebar/adm-sidebar-search.component";
import {AdmSideBarTreeViewComponent} from "./sidebar/adm-sidebar-treeview.component";
import {AdmCtrlBarItemComponent} from "./ctrlbar/adm-ctrlbar-item.component";
import {
  AdmDropDownDirective,
  AdmDropDownMenuDirective,
  AdmDropDownToggleDirective
} from "./shared/directives/adm-dropdown.directive";

/**
 * `NgxAdminLteModule` is the main entry point into ngx-adminlte
 */
@NgModule({
  declarations: [ // components and directives
    AdmContentComponent,
    AdmFrameworkComponent,

    AdmSideBarComponent,
    AdmSideBarUserComponent,
    AdmSideBarSearchComponent,
    AdmSideBarTreeViewComponent,

    AdmHeaderComponent,
    AdmHeaderCtrlBarComponent,
    AdmHeaderUserComponent,

    AdmCtrlBarComponent,
    AdmCtrlBarTabContentDirective,
    AdmCtrlBarTabTitleDirective,
    AdmCtrlBarTabDirective,
    AdmCtrlBarItemComponent,

    AdmFooterComponent,

    AdmSidebarSwitchDirective,
    RemoveHostDirective,
    AdmDropDownDirective,
    AdmDropDownMenuDirective,
    AdmDropDownToggleDirective

  ],
  imports: [ // import Angular's modules
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [ // exported components and directives
    AdmContentComponent,
    AdmFrameworkComponent,

    AdmSideBarComponent,
    AdmSideBarUserComponent,
    AdmSideBarSearchComponent,
    AdmSideBarTreeViewComponent,

    AdmHeaderComponent,
    AdmHeaderCtrlBarComponent,
    AdmHeaderUserComponent,

    AdmCtrlBarComponent,
    AdmCtrlBarTabContentDirective,
    AdmCtrlBarTabTitleDirective,
    AdmCtrlBarTabDirective,
    AdmCtrlBarItemComponent,

    AdmFooterComponent,

    AdmSidebarSwitchDirective,
    RemoveHostDirective,
    AdmDropDownDirective,
    AdmDropDownMenuDirective,
    AdmDropDownToggleDirective
  ]
})
export class NgxAdminLteModule {
  static forRoot():ModuleWithProviders {
    return {
      ngModule: NgxAdminLteModule,
      providers: [AdmStatusService]
    };
  }
}
