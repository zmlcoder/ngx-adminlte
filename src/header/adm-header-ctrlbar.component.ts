import {Component, ViewEncapsulation, ElementRef} from "@angular/core";
import {AdmStatusService} from "../shared/services/adm-status.service";

@Component({
  selector: 'adm-header-ctrlbar',
  templateUrl: './adm-header-ctrlbar.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AdmHeaderCtrlBarComponent {

  constructor(private statusService:AdmStatusService,
              private elementRef:ElementRef) {
  }

  public onClick():void {
    this.statusService.toggleCtrlBar();
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
