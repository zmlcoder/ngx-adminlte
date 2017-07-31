import {Component, ViewEncapsulation, Input} from "@angular/core";
import {AdmFooterModel} from "../shared/models/AdmFooterModel";

@Component({
  selector: 'adm-footer',
  templateUrl: './adm-footer.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AdmFooterComponent {

  @Input('model')
  model:AdmFooterModel;

}
