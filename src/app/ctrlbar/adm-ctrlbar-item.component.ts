/**
 * Created by zml on 2017/4/3.
 */

import {
  Component, Input
} from "@angular/core";
import {AdmCtrlBarItem} from "../shared/models/AdmCtrlBarItem";

@Component({
  selector: 'adm-ctrlbar-item',
  templateUrl: './adm-ctrlbar-item.component.html'
})
export class AdmCtrlBarItemComponent {

  @Input('model')
  model:AdmCtrlBarItem;

}
