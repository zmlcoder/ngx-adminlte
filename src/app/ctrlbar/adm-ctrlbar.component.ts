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
  AfterContentChecked
} from "@angular/core";

import {AdmStatusService} from "../shared/services/adm-status.service";

let nextId = 0;

/**
 * This directive should be used to wrap tab titles that need to contain HTML markup or other directives.
 */
@Directive({selector: 'template[adm-ctrlbar-tab-title]'})
export class AdmCtrlBarTabTitle {
  constructor(public templateRef:TemplateRef<any>) {
  }
}

/**
 * This directive must be used to wrap content to be displayed in a tab.
 */
@Directive({selector: 'template[adm-ctrlbar-tab-content]'})
export class AdmCtrlBarTabContent {
  constructor(public templateRef:TemplateRef<any>) {
  }
}

/**
 * A directive representing an individual tab.
 */
@Directive({selector: 'adm-ctrlbar-tab'})
export class AdmCtrlBarTab {
  /**
   * Unique tab identifier. Must be unique for the entire document for proper accessibility support.
   */
  @Input() id:string = `adm-ctrlbar-tab-${nextId++}`;
  /**
   * Simple (string only) title. Use the "NgbTabTitle" directive for more complex use-cases.
   */
  @Input() title:string;
  /**
   * Allows toggling disabled state of a given state. Disabled tabs can't be selected.
   */
  @Input() disabled = false;

  @ContentChild(AdmCtrlBarTabContent) contentTpl:AdmCtrlBarTabContent;
  @ContentChild(AdmCtrlBarTabTitle) titleTpl:AdmCtrlBarTabTitle;
}

@Component({
  selector: 'adm-ctrlbar',
  templateUrl: './adm-ctrlbar.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AdmCtrlBarComponent implements AfterContentChecked {

  @ContentChildren(AdmCtrlBarTab) tabs:QueryList<AdmCtrlBarTab>;

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

      // this.tabChange.emit(
      //   {activeId: this.activeId, nextId: selectedTab.id, preventDefault: () => { defaultPrevented = true; }});

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

  private _getTabById(id:string):AdmCtrlBarTab {
    let tabsWithId:AdmCtrlBarTab[] = this.tabs.filter(tab => tab.id === id);
    return tabsWithId.length ? tabsWithId[0] : null;
  }

}
