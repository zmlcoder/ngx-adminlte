/**
 * Created by zml on 2016/4/17.
 */


import {Injectable} from "@angular/core";

@Injectable()
export class AdmStatusService {

  private sideBarStatus:any = {};
  private ctrlBarStatus:any = {};

  constructor() {

  }

  public isSidebarCollapsed():boolean {
    return this.sideBarStatus.isCollapsed;
  }

  public toggleSidebar():void {
    this.sideBarStatus.isCollapsed = !this.sideBarStatus.isCollapsed;
  }

  public isCtrlBarOpen():boolean {
    return this.ctrlBarStatus.isOpen;
  }

  public toggleCtrlBar():void {
    this.ctrlBarStatus.isOpen = !this.ctrlBarStatus.isOpen;
  }
}
