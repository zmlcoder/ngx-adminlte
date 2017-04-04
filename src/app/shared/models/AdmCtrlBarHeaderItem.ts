import {AdmCtrlBarItem} from "./AdmCtrlBarItem";
/**
 * Created by zml on 2017/4/3.
 */

export class AdmCtrlBarHeaderItem extends AdmCtrlBarItem {

  // type value.
  static readonly TYPE:string = 'header';

  title:string;

  constructor() {
    super(AdmCtrlBarHeaderItem.TYPE);
  }

}
