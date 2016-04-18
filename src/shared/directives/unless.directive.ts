import {Directive, ViewContainerRef, TemplateRef} from "angular2/core";
import {isBlank} from "angular2/src/facade/lang";
@Directive({
  selector: '[unless]',
  inputs: ['unless']
})
export class Unless {
  viewContainer: ViewContainerRef;
  templateRef: TemplateRef;
  prevCondition: boolean;
  constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef) {
    this.viewContainer = viewContainer;
    this.templateRef = templateRef;
    this.prevCondition = null;
  }
  set unless(newCondition:any) {
    if (newCondition && (isBlank(this.prevCondition) || !this.prevCondition)) {
      this.prevCondition = true;
      this.viewContainer.clear();
    } else if (!newCondition && (isBlank(this.prevCondition) || this.prevCondition)) {
      this.prevCondition = false;
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
