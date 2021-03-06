### Current template

```bash

<adm-framework>

  <!-- Top header -->
  <adm-header [model]="headerModel">
    <adm-header-user [model]="headerUserModel"></adm-header-user>
    <adm-header-ctrlbar></adm-header-ctrlbar>
  </adm-header>

  <!-- Left side column. contains the logo and sidebar -->
  <adm-sidebar>
    <adm-sidebar-user [model]="sideBarUserModel"></adm-sidebar-user>
    <adm-sidebar-search></adm-sidebar-search>
    <adm-sidebar-treeview [items]="treeViewItems"></adm-sidebar-treeview>
  </adm-sidebar>

  <!-- The place to inject your components. -->
  <adm-content>
    To be continue...
  </adm-content>

  <!-- Footer. -->
  <adm-footer [model]="footerModel"></adm-footer>

  <!--right side bar-->
  <adm-ctrlbar [activeId]="'homeTab'">
    <adm-ctrlbar-tab *ngFor="let tab of ctrlBarTabs" [id]="tab.id">
      <ng-template adm-ctrlbar-tab-title><i [ngClass]="tab.icon">{{tab.title}}</i></ng-template>
      <ng-template adm-ctrlbar-tab-content>
        <adm-ctrlbar-item *ngFor="let item of tab.items" [model]="item"></adm-ctrlbar-item>
      </ng-template>
    </adm-ctrlbar-tab>
  </adm-ctrlbar>

</adm-framework>

```

## Prerequisites

Both the CLI and generated project have dependencies that require Node 6.9.0 or higher, together
with NPM 3 or higher.

## Usage

Install this library, run:
```bash
$ npm install ngx-adminlte --save
```

Import all necessary css libraries:
```typescript
@import "~font-awesome/css/font-awesome.min.css";
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~admin-lte/dist/css/AdminLTE.min.css";
@import "~admin-lte/dist/css/skins/skin-blue.min.css";
```

Import **'NgxAdminLteModule'** into your 'AppModule'
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import NgxAdminLteModule module
import {NgxAdminLteModule} from 'ngx-adminlte';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Import NgxAdminLteModule module
    NgxAdminLteModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
More information please check out the [**ngx-adminlte-example**](https://github.com/zmlcoder/ngx-adminlte-example).

## Components

### [&lt;adm-sidebar-treeview&gt;](https://github.com/zmlcoder/ngx-adminlte/blob/master/src/sidebar/adm-sidebar-treeview.component.ts)

Support multilevel items and multi labels.
[Usage](https://github.com/zmlcoder/ngx-adminlte-example/blob/master/src/app/app.component.ts#L46)

```typescript
/**
 * The model for side bar item.
 */
export class AdmSideBarTreeItem {

  // possible type value.
  static readonly TYPE_HEADER:string = 'header';
  static readonly TYPE_TREEVIEW:string = 'treeview';

  // icons.
  leftIcon:string;
  leftActiveIcon:string;
  rightIcon:string;
  rightActiveIcon:string;

  // item text.
  text:string;

  // multi labels.
  labels:AdmSideBarTreeItemLabel[];

  // TYPE_HEADER or TYPE_TREEVIEW.
  type:string;

  // Indicate if is active status.
  isActive:boolean;

  // item children to support multilevel.
  children:AdmSideBarTreeItem[];

  // clicked callback.
  clickFn:(item:AdmSideBarTreeItem)=>void;

}

```
![](https://github.com/zmlcoder/ngx-adminlte/blob/master/screenshots/sidebar.gif)

### [&lt;adm-ctrlbar&gt;](https://github.com/zmlcoder/ngx-adminlte/blob/master/src/ctrlbar/adm-ctrlbar.component.ts#L89)

The right side control bar of framework, which is consist of multi tabs. It could easily custom the content from external template with following directives.
[Usage](https://github.com/zmlcoder/ngx-adminlte-example/blob/master/src/app/app.component.ts#L139)

### [&lt;adm-ctrlbar-tab&gt;](https://github.com/zmlcoder/ngx-adminlte/blob/master/src/ctrlbar/adm-ctrlbar.component.ts#L44)
The child component of &lt;adm-ctrlbar&gt; to show one tab.

### [adm-ctrlbar-tab-title](https://github.com/zmlcoder/ngx-adminlte/blob/master/src/ctrlbar/adm-ctrlbar.component.ts#L26)
The child directive of &lt;adm-ctrlbar-tab&gt; to indicate the title template.

### [adm-ctrlbar-tab-content](https://github.com/zmlcoder/ngx-adminlte/blob/master/src/ctrlbar/adm-ctrlbar.component.ts#L35)
The child directive of &lt;adm-ctrlbar-tab&gt; to indicate the content template.

### [&lt;adm-ctrlbar-item&gt;](https://github.com/zmlcoder/ngx-adminlte/blob/master/src/ctrlbar/adm-ctrlbar-item.component.ts)
The built in control bar items. For now, there are four types item: 
- [AdmCtrlBarHeaderItem](https://github.com/zmlcoder/ngx-adminlte/blob/master/src/shared/models/AdmCtrlBarHeaderItem.ts)
- [AdmCtrlBarInfoBoxItem](https://github.com/zmlcoder/ngx-adminlte/blob/master/src/shared/models/AdmCtrlBarInfoBoxItem.ts)
- [AdmCtrlBarCheckBoxItem](https://github.com/zmlcoder/ngx-adminlte/blob/master/src/shared/models/AdmCtrlBarCheckBoxItem.ts)
- [AdmCtrlBarProgressItem](https://github.com/zmlcoder/ngx-adminlte/blob/master/src/shared/models/AdmCtrlBarProgressItem.ts)

```bash

<adm-ctrlbar [activeId]="'homeTab'">
  
  <adm-ctrlbar-tab [id]="'homeTab'">
  
    <ng-template adm-ctrlbar-tab-title><i class="fa fa-home"></i></ng-template>
    
    <ng-template adm-ctrlbar-tab-content>
      <adm-ctrlbar-item *ngFor="let item of ctrlBarItems" [model]="item"></adm-ctrlbar-item>
    </ng-template>
    
  </adm-ctrlbar-tab>
  
</adm-ctrlbar>

```
![](https://github.com/zmlcoder/ngx-adminlte/blob/master/screenshots/ctrlbar.gif)

## License
 [MIT](/LICENSE)
