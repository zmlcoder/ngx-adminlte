/**
 * Created by zml on 2017/3/20.
 */

/**
 * The model for side bar item.
 */
export class AdmSideBarTreeItem {

  // possible type value.
  static readonly TYPE_HEADER:string = 'header';
  static readonly TYPE_TREEVIEW:string = 'treeview';

  // icons.
  leftIcon:string;
  leftActiveIcon:string;
  rightIcon:string;
  rightActiveIcon:string;

  // item text.
  text:string;

  // multi labels.
  labels:AdmSideBarTreeItemLabel[];

  // TYPE_HEADER or TYPE_TREEVIEW.
  type:string;

  // Indicate if is active status.
  isActive:boolean;

  // item children to support multilevel.
  children:AdmSideBarTreeItem[];

  // clicked callback.
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
