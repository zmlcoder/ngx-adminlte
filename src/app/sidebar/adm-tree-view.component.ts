/**
 * Created by zml on 2016/4/17.
 */

import {Component, Input} from "@angular/core";

@Component({
  selector: 'adm-tree-view',
  templateUrl: './adm-tree-view.component.html',
})
export class AdmTreeViewComponent {
  @Input("text")
  text:string;

  @Input("iconClass")
  iconClass:string;
}
