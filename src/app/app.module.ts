import {NgModule}      from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {Ng2BootstrapModule} from 'ng2-bootstrap';

// App is our top level component
import {AppComponent}  from './app.component';
import {AdmFrameworkComponent} from "./framework/adm-framework.component";
import {AdmContentComponent} from "./content/adm-content.component";
import {AdmSidebarComponent} from "./sidebar/adm-sidebar.component";
import {AdmHeaderComponent} from "./header/adm-header.component";
import {AdmFooterComponent} from "./footer/adm-footer.component";
import {AdmCtrlBarComponent} from "./ctrlbar/adm-ctrlbar.component";
import {AdmSideBarUserComponent} from "./sidebar/adm-sidebar-user.component";
import {AdmTreeViewComponent} from "./sidebar/adm-tree-view.component";
import {AdmSidebarSwitchDirective} from "./shared/directives/adm-sidebar-switch.directive";
import {AdmStatusService} from "./shared/services/adm-status.service";
import {AdmHeaderCtrlBarComponent} from "./header/adm-header-ctrlbar.component";
import {RemoveHostDirective} from "./shared/directives/remove-host.directive";
import {AdmHeaderUserComponent} from "./header/adm-header-user.component";

// Application wide providers
const APP_PROVIDERS = [
  AdmStatusService
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent], // bootstrap component.
  declarations: [ // components and directives
    AppComponent,
    AdmContentComponent,
    AdmFrameworkComponent,

    AdmSidebarComponent,
    AdmSideBarUserComponent,

    AdmHeaderComponent,
    AdmHeaderCtrlBarComponent,
    AdmHeaderUserComponent,

    AdmFooterComponent,
    AdmCtrlBarComponent,
    AdmTreeViewComponent,

    AdmSidebarSwitchDirective,
    RemoveHostDirective,

  ],
  imports: [ // import Angular's modules
    BrowserModule,
    RouterModule,
    Ng2BootstrapModule.forRoot()
  ],
  exports: [ // exported components and directives
    AppComponent,
    AdmContentComponent,
    AdmFrameworkComponent,
    AdmSidebarComponent,
    AdmHeaderComponent,
    AdmFooterComponent,
    AdmCtrlBarComponent,
    AdmSideBarUserComponent,
    AdmTreeViewComponent,
    AdmSidebarSwitchDirective,
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS
  ]
})
export class AppModule {
}
