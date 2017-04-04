import {AdmCtrlBarItem} from "./AdmCtrlBarItem";
/**
 * Created by zml on 2017/4/3.
 */

export class AdmCtrlBarInfoBoxItem extends AdmCtrlBarItem {

  // type value.
  static readonly TYPE:string = 'infobox';

  // the icon class.
  icon:string;

  // the title text.
  title:string;

  // the subtitle text.
  description:string;

  // clicked callback.
  clickFn:(e:AdmCtrlBarInfoBoxItem)=>void;

  constructor() {
    super(AdmCtrlBarInfoBoxItem.TYPE);
  }

}
