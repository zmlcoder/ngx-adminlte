### Current template

```bash

<!-- Root Component -->
<adm-framework>

    <!-- Top header -->
    <adm-header>
        <adm-header-user [user]="loginUser"></adm-header-user>
        <adm-header-ctrlbar></adm-header-ctrlbar>
    </adm-header>

    <!-- Left side column. contains the logo and sidebar -->
    <adm-sidebar>
        <adm-sidebar-user [user]="loginUser"></adm-sidebar-user>
        <adm-sidebar-search></adm-sidebar-search>
        <adm-sidebar-treeview [items]="treeViewItems"></adm-sidebar-treeview>
    </adm-sidebar>

    <!-- Main Content -->
    <adm-content></adm-content>

    <!-- Footer -->
    <adm-footer></adm-footer>

    <!-- Right side bar -->
    <adm-ctrlbar></adm-ctrlbar>

</adm-framework>

```

![](https://github.com/zmlcoder/angular2-adminlte/blob/master/screenshots/demo.gif)

## Prerequisites

Both the CLI and generated project have dependencies that require Node 6.9.0 or higher, together
with NPM 3 or higher.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)
```bash
npm install -g @angular/cli
npm install
```

## Running
```bash
ng serve
```
Navigate to `http://localhost:4200/`

## Components

### [&lt;adm-sidebar-treeview&gt;](https://github.com/zmlcoder/angular2-adminlte/blob/master/src/app/sidebar/adm-sidebar-treeview.component.ts)

Support multilevel items and multi labels.
[Usage](https://github.com/zmlcoder/angular2-adminlte/blob/master/src/app/app.component.ts)

```javascript
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
![](https://github.com/zmlcoder/angular2-adminlte/blob/master/screenshots/sidebar.gif)

## License
 [MIT](/LICENSE)
