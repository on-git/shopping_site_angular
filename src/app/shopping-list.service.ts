import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  shoppingList: any[] = [];
  itemObject = {
    id: 0,
    name: '',
    count: 0,
    price: 0,
  };
  listCount = new BehaviorSubject(this.shoppingList.length);

  setShoppingList(item: any) {
    const index = this.shoppingList.findIndex((i) => i.id === item.id);
    if (index === -1) {
      this.itemObject = {
        id: item.id,
        name: item.name,
        count: item.count,
        price: item.price,
      };
      this.shoppingList.push(this.itemObject /*Object.create(item)*/);
      this.listCount.next(this.shoppingList.length);
    } else {
      this.shoppingList[index].count += item.count;
    }
  }

  getShoppingList() {
    return this.shoppingList;
  }

  removeShoppingListItem(itemIndex: number) {
    if (itemIndex !== -1) {
      this.shoppingList.splice(itemIndex, 1);
      this.listCount.next(this.shoppingList.length);
    }
  }

  constructor() {}
}
