/**
 * Created by zml on 2017/7/31.
 */

export class AdmHeaderModel {

  // The logo model.
  logoModel:AdmHeaderLogoModel;

}

export class AdmHeaderLogoModel {

  // The click address.
  href:string;

  // The normal logo, could be html.
  logo:string;

  // The short logo, could be html.
  miniLogo:string;
}

export class AdmHeaderUserModel {

  // User name
  name:string;

  // Display image
  imgUrl:string;

  // Description text, could be html
  description:string;

  // Left button model, {text, clickFn}
  leftButton:any;

  // Right button model, {text, clickFn}
  rightButton:any;
}
