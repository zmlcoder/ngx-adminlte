/**
 * Created by zml on 2016/9/4.
 */

import {
  Component,
  Directive,
  TemplateRef,
  ViewEncapsulation,
  Input,
  ContentChild,
  QueryList,
  ContentChildren,
  AfterContentChecked,
  EventEmitter,
  Output
} from "@angular/core";

import {AdmStatusService} from "../shared/services/adm-status.service";

let nextId = 0;

/**
 * This directive should be used to wrap tab titles that need to contain HTML markup or other directives.
 */
@Directive({selector: 'ng-template[adm-ctrlbar-tab-title]'})
export class AdmCtrlBarTabTitleDirective {
  constructor(public templateRef:TemplateRef<any>) {
  }
}

/**
 * This directive must be used to wrap content to be displayed in a tab.
 */
@Directive({selector: 'ng-template[adm-ctrlbar-tab-content]'})
export class AdmCtrlBarTabContentDirective {
  constructor(public templateRef:TemplateRef<any>) {
  }
}

/**
 * A directive representing an individual tab.
 */
@Directive({selector: 'adm-ctrlbar-tab'})
export class AdmCtrlBarTabDirective {
  /**
   * Unique tab identifier. Must be unique for the entire document for proper accessibility support.
   */
  @Input() id:string = `adm-ctrlbar-tab-${nextId++}`;
  /**
   * Simple (string only) title. Use the "AdmCtrlBarTabTitle" directive for more complex use-cases.
   */
  @Input() title:string;
  /**
   * Allows toggling disabled state of a given state. Disabled tabs can't be selected.
   */
  @Input() disabled = false;

  @ContentChild(AdmCtrlBarTabContentDirective) contentTpl:AdmCtrlBarTabContentDirective;
  @ContentChild(AdmCtrlBarTabTitleDirective) titleTpl:AdmCtrlBarTabTitleDirective;
}

/**
 * The payload of the change event fired right before the tab change
 */
export interface AdmCtrlBarTabChangeEvent {
  /**
   * Id of the currently active tab
   */
  activeId:string;

  /**
   * Id of the newly selected tab
   */
  nextId:string;

  /**
   * Function that will prevent tab switch if called
   */
  preventDefault:() => void;
}


@Component({
  selector: 'adm-ctrlbar',
  templateUrl: './adm-ctrlbar.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AdmCtrlBarComponent implements AfterContentChecked {

  @ContentChildren(AdmCtrlBarTabDirective) tabs:QueryList<AdmCtrlBarTabDirective>;

  /**
   * A tab change event fired right before the tab selection happens. See AdmCtrlBarTabChangeEvent for payload details
   */
  @Output() tabChange = new EventEmitter<AdmCtrlBarTabChangeEvent>();

  /**
   * An identifier of an initially selected (active) tab. Use the "select" method to switch a tab programmatically.
   */
  @Input() activeId:string;

  constructor(private statusService:AdmStatusService) {
  }

  /**
   * Selects the tab with the given id and shows its associated pane.
   * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
   */
  select(tabId:string) {
    let selectedTab = this._getTabById(tabId);
    if (selectedTab && !selectedTab.disabled && this.activeId !== selectedTab.id) {
      let defaultPrevented = false;

      this.tabChange.emit({
        activeId: this.activeId,
        nextId: selectedTab.id,
        preventDefault: () => {
          defaultPrevented = true;
        }
      });

      if (!defaultPrevented) {
        this.activeId = selectedTab.id;
      }
    }
  }

  ngAfterContentChecked() {
    // auto-correct activeId that might have been set incorrectly as input
    let activeTab = this._getTabById(this.activeId);
    this.activeId = activeTab ? activeTab.id : (this.tabs.length ? this.tabs.first.id : null);
  }

  private _getTabById(id:string):AdmCtrlBarTabDirective {
    let tabsWithId:AdmCtrlBarTabDirective[] = this.tabs.filter(tab => tab.id === id);
    return tabsWithId.length ? tabsWithId[0] : null;
  }

}
