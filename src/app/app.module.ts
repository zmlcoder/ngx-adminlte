import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {RouterModule} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import {ENV_PROVIDERS} from './environment';
import {APP_RESOLVER_PROVIDERS} from './app.resolver';
// App is our top level component
import {AppComponent}  from './app.component.ts';
import {AdmFrameworkComponent} from "./framework/adm-framework.component.ts";
import {AdmContentComponent} from "./content/adm-content.component.ts";
import {AdmSidebarComponent} from "./sidebar/adm-sidebar.component.ts";
import {AdmHeaderComponent} from "./header/adm-header.component.ts";
import {AdmFooterComponent} from "./footer/adm-footer.component.ts";
import {AdmCtrlBarComponent} from "./ctrlbar/adm-ctrlbar.component.ts";
import {AdmSideBarUserComponent} from "./sidebar/adm-sidebar-user.component.ts";
import {AdmTreeViewComponent} from "./sidebar/adm-tree-view.component.ts";
import {AdmSidebarSwitchDirective} from "./shared/directives/adm-sidebar-switch.directive.ts";
import {AdmStatusService} from "./shared/services/adm-status.service.ts";
import {AdmHeaderCtrlBarComponent} from "./header/adm-header-ctrlbar.component";
import {RemoveHostDirective} from "./shared/directives/remove-host.directive.ts";
import {AdmHeaderUserComponent} from "./header/adm-header-user.component";

// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    AdmStatusService,
    {
        provide: APP_BASE_HREF,
        useValue: '<%= APP_BASE %>'
    }
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
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
        RemoveHostDirective
    ],
    imports: [ // import Angular's modules
        BrowserModule,
        RouterModule
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
        ENV_PROVIDERS,
        APP_PROVIDERS
    ]
})
export class AppModule {
}
