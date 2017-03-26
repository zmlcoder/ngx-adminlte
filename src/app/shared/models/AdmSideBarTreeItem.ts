/**
 * Created by zml on 2017/3/20.
 */

/**
 * The model from side bar item.
 */
export class AdmSideBarTreeItem {

  static readonly TYPE_HEADER:string = 'header';
  static readonly TYPE_TREEVIEW:string = 'treeview';

  leftIcon:string;
  leftActiveIcon:string;
  rightIcon:string;
  rightActiveIcon:string;

  text:string;

  labels:AdmSideBarTreeItemLabel[];

  type:string;
  isActive:boolean;

  children:AdmSideBarTreeItem[];

  clickFn:(item:AdmSideBarTreeItem)=>void;

}

/**
 * The model for labels.
 */
export class AdmSideBarTreeItemLabel {

  constructor(public labelText?:string,
              public labelClass?:string) {
  }

}
