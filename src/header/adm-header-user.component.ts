import {Component, ViewEncapsulation, ElementRef, Input} from "@angular/core";
import {AdmHeaderUserModel} from "../shared/models/AdmHeaderModel";

@Component({
  selector: 'adm-header-user',
  templateUrl: './adm-header-user.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AdmHeaderUserComponent {

  @Input('model')
  model:AdmHeaderUserModel;

  constructor(private elementRef:ElementRef) {
  }

  //wait for the component to render completely
  ngOnInit() {
    var nativeElement:HTMLElement = this.elementRef.nativeElement,
      parentElement:HTMLElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element
    parentElement.removeChild(nativeElement);
  }
}
