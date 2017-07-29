/**
 * Created by zml on 2017/6/19.
 */

import {Directive, ElementRef} from "@angular/core";

@Directive({
  selector: '[adm-dropdown]',
  host: {
    '[class.open]': 'isOpen',
    '(document:click)': 'closeFromOutsideClick($event)'
  }
})
export class AdmDropDownDirective {

  // This will be injected from the [adm-dropdown-toggle].
  toggleElement:any;

  // Indicate current open status.
  isOpen:boolean = false;

  /**
   *  Close the menu if happen outside click .
   * @param $event ui event.
   */
  public closeFromOutsideClick($event) {
    if (!!this.toggleElement && !this.toggleElement.contains($event.target)) {
      this.isOpen = false;
    }
  }

  /**
   *  Switch open status.
   */
  public toggle() {
    this.isOpen = !this.isOpen;
  }

}

/**
 *  The directive to indicate the drop down menu.
 */
@Directive({
  selector: '[adm-dropdown-menu]',
  host: {
    'class': 'dropdown-menu'
  }
})
export class AdmDropDownMenuDirective {
}

/**
 *  The directive to indicate the toggle element.
 */
@Directive({
  selector: '[adm-dropdown-toggle]',
  host: {
    'class': 'dropdown-toggle',
    '(click)': 'toggle()'
  }
})
export class AdmDropDownToggleDirective {

  constructor(public dropdown:AdmDropDownDirective, elementRef:ElementRef) {
    // inject current element into [adm-dropdown].
    dropdown.toggleElement = elementRef.nativeElement;
  }

  toggle() {
    this.dropdown.toggle();
  }
}


