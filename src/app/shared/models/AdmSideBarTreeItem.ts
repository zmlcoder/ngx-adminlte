/**
 * Created by zml on 2017/3/20.
 */

/**
 * The model from side bar item.
 */
export class AdmSideBarTreeItem {

  leftIcon:string;
  leftActiveIcon:string;
  rightIcon:string;
  rightActiveIcon:string;

  text:string;

  labelText:string;
  labelClass:string;

  type:string;
  isActive:boolean;

  children:AdmSideBarTreeItem[];

  clickFn:(item:AdmSideBarTreeItem)=>void;

}
