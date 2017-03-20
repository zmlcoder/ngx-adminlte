/**
 * Created by zml on 2017/3/20.
 */

export class AdmSideBarTreeItem {

  get labelText():string {
    return this._labelText;
  }

  set labelText(value:string) {
    this._labelText = value;
  }

  get labelClass():string {
    return this._labelClass;
  }

  set labelClass(value:string) {
    this._labelClass = value;
  }

  get leftIcon():string {
    return this._leftIcon;
  }

  set leftIcon(value:string) {
    this._leftIcon = value;
  }

  get rightIcon():string {
    return this._rightIcon;
  }

  set rightIcon(value:string) {
    this._rightIcon = value;
  }

  get text():string {
    return this._text;
  }

  set text(value:string) {
    this._text = value;
  }

  get status():string {
    return this._status;
  }

  set status(value:string) {
    this._status = value;
  }

  get type():string {
    return this._type;
  }

  set type(value:string) {
    this._type = value;
  }

  private _leftIcon:string;
  private _rightIcon:string;

  private _text:string;

  private _labelText:string;
  private _labelClass:string;

  private _status:string;
  private _type:string;

}
