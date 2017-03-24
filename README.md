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

## License
 [MIT](/LICENSE)
