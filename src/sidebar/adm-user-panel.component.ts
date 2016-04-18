/**
 * Created by zml on 2016/4/17.
 */

import {Component, Input} from "angular2/core";
import {User} from "../shared/models/User";
@Component({
  selector: 'adm-user-panel',
  moduleId: module.id,
  providers: [],
  viewProviders: [],
  templateUrl: './adm-user-panel.component.html',
  styleUrls: ['./adm-user-panel.component.css'],
  directives: [],
  pipes: []
})
export class AdmUserPanelComponent {
  @Input('user')
  user:User;
}
