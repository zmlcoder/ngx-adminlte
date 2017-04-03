import {AdmCtrlBarItem} from "./AdmCtrlBarItem";
/**
 * Created by zml on 2017/4/3.
 */

export class AdmCtrlBarInfoBoxItem extends AdmCtrlBarItem {

  // type value.
  static readonly TYPE:string = 'infobox';

  icon:string;

  title:string;

  description:string;

  // clicked callback.
  clickFn:(e:AdmCtrlBarInfoBoxItem)=>void;

  constructor() {
    super(AdmCtrlBarInfoBoxItem.TYPE);
  }

}
