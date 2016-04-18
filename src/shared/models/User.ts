/**
 * Created by zml on 2016/4/17.
 */

export class User {

  private _id:string;
  private _name:string;
  private _status:string;
  private _imgUrl:string;

  get id():string {
    return this._id;
  }

  set id(value:string) {
    this._id = value;
  }

  get name():string {
    return this._name;
  }

  set name(value:string) {
    this._name = value;
  }

  get status():string {
    return this._status;
  }

  set status(value:string) {
    this._status = value;
  }

  get imgUrl():string {
    return this._imgUrl;
  }

  set imgUrl(value:string) {
    this._imgUrl = value;
  }


}
