import {AdmCtrlBarItem} from "./AdmCtrlBarItem";
/**
 * Created by zml on 2017/4/3.
 */

export class AdmCtrlBarProgressItem extends AdmCtrlBarItem {

  // type value.
  static readonly TYPE:string = 'progress';

  title:string;

  value:number;

  progressClass:string;

  labelClass:string;

  // clicked callback.
  clickFn:(e:AdmCtrlBarProgressItem)=>void;

  constructor() {
    super(AdmCtrlBarProgressItem.TYPE);
  }

}
