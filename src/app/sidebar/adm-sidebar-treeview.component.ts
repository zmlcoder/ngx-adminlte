/**
 * Created by zml on 2016/4/17.
 */

import {Component, Input} from "@angular/core";
import {AdmSideBarTreeItem} from "../shared/models/AdmSideBarTreeItem";
import {User} from "../shared/models/User";

@Component({
  selector: 'adm-sidebar-treeview',
  templateUrl: './adm-sidebar-treeview.component.html',
})
export class AdmSideBarTreeViewComponent {

  @Input('items')
  items:AdmSideBarTreeItem[];

}
