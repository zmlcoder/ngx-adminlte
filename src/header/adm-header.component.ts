import {Component, ViewEncapsulation, Input} from "@angular/core";
import {AdmHeaderModel} from "../shared/models/AdmHeaderModel";

@Component({
  selector: 'adm-header',
  templateUrl: './adm-header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AdmHeaderComponent {

  @Input('model')
  private model:AdmHeaderModel;
  
}
