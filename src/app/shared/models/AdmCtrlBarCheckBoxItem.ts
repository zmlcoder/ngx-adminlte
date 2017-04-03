import {AdmCtrlBarItem} from "./AdmCtrlBarItem";
/**
 * Created by zml on 2017/4/3.
 */

export class AdmCtrlBarCheckBoxItem extends AdmCtrlBarItem {

  // type value.
  static readonly TYPE:string = 'checkbox';

  title:string;

  description:string;

  isChecked:boolean;

  // clicked callback.
  clickFn:(e:AdmCtrlBarCheckBoxItem)=>void;

  constructor() {
    super(AdmCtrlBarCheckBoxItem.TYPE);
  }

}
