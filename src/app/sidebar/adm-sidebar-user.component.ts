/**
 * Created by zml on 2016/4/17.
 */

import {Component, Input} from "@angular/core";
import {User} from "../shared/models/User";
@Component({
  selector: 'adm-sidebar-user',
  templateUrl: './adm-sidebar-user.component.html',
})
export class AdmSideBarUserComponent {
  @Input('user')
  user:User;
}
