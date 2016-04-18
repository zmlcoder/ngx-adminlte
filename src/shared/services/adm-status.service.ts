/**
 * Created by zml on 2016/4/17.
 */


import {Injectable} from "angular2/core";

@Injectable()
export class AdmStatusService {

  private sideBarStatus:any = {};

  constructor() {

  }

  public isSidebarCollapsed():boolean {
    return this.sideBarStatus.isCollapsed;
  }

  public toggleSidebar():void {
    this.sideBarStatus.isCollapsed = !this.sideBarStatus.isCollapsed;
  }
}
