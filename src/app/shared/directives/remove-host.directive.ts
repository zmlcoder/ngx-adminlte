/**
 * Created by zml on 2016/9/4.
 */

import {Directive, ElementRef} from "@angular/core";

//remove the host.
@Directive({
  selector: '[remove-host]'
})
export class RemoveHostDirective {

  constructor(private el:ElementRef) {
  }

  //wait for the component to render completely
  ngOnInit() {
    var nativeElement:HTMLElement = this.el.nativeElement,
      parentElement:HTMLElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element
    parentElement.removeChild(nativeElement);
  }
}
