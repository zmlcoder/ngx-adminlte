import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AdmStatusService} from './shared/services/adm-status.service';
import {User} from "./shared/models/User";

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styles:[
    './app.component.css'
  ]
})
export class AppComponent implements OnInit {

  private loginUser:User;

  constructor(private statusService:AdmStatusService) {
  }

  ngOnInit():any {

    this.loginUser = new User();
    this.loginUser.name = 'zmlcoder';
    this.loginUser.imgUrl = '../assets/img/angular-logo.png';
    this.loginUser.status = 'Online';

    return {};
  }

}
