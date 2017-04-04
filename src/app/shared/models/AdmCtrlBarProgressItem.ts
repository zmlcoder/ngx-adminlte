import {AdmCtrlBarItem} from "./AdmCtrlBarItem";
/**
 * Created by zml on 2017/4/3.
 */

export class AdmCtrlBarProgressItem extends AdmCtrlBarItem {

  // type value.
  static readonly TYPE:string = 'progress';

  // the progress bar title.
  title:string;

  // the current percentage of 100.
  percentage:number;

  // the progress bar class, eg: 'progress-bar progress-bar-success'
  progressClass:string;

  // the label class, eg: 'label label-success pull-right'
  labelClass:string;

  // clicked callback.
  clickFn:(e:AdmCtrlBarProgressItem)=>void;

  constructor() {
    super(AdmCtrlBarProgressItem.TYPE);
  }

}
