/**
 * Created by zml on 2016/4/17.
 */

import {Component, Input} from "@angular/core";
import {AdmSideBarTreeItem} from "../shared/models/AdmSideBarTreeItem";

import * as _ from 'lodash';

@Component({
  selector: 'adm-sidebar-treeview',
  templateUrl: './adm-sidebar-treeview.component.html',
})
export class AdmSideBarTreeViewComponent {

  @Input('items')
  items:AdmSideBarTreeItem[];

  private onClick(event, clickedItem:AdmSideBarTreeItem):void {

    // here is the event terminal, stop propagating.
    event.stopPropagation();

    // 1. temp record current status.
    let currentStatus = clickedItem.isActive;

    // 2. deactive all items.
    this.deactiveAll(this.items);

    // 3. switch clicked item status.
    clickedItem.isActive = !currentStatus;

    // 4. active all parent of clicked item if it is not top item.
    let allParents:AdmSideBarTreeItem[] = [];
    if (clickedItem.type !== 'treeview') {
      allParents = this.getAllParents(clickedItem);
    }
    for (let item of allParents) {
      item.isActive = true;
    }
  }

  private deactiveAll(allItems:AdmSideBarTreeItem[]):void {
    if (!allItems) {
      return;
    }
    for (let item of allItems) {
      item.isActive = false;
      this.deactiveAll(item.children);
    }
  }

  private getAllParents(targetItem:AdmSideBarTreeItem):AdmSideBarTreeItem[] {
    let parents = [];
    for (let possibleItem of this.items) {
      if (this.isParentItem(targetItem, possibleItem, parents)) {
        break;
      }
      parents = [];
    }
    return parents;
  }

  private isParentItem(targetItem:AdmSideBarTreeItem, possibleItem:AdmSideBarTreeItem, parents:AdmSideBarTreeItem[]):boolean {

    if (!possibleItem.children) {
      return false;
    }

    // Recursively collect parents!
    for (let child of possibleItem.children) {
      // Child or child's children of possible item is the parent of target item
      if (child === targetItem || this.isParentItem(targetItem, child, parents)) {
        parents.push(possibleItem);
        return true;
      }
    }

    return false;
  }

}
