import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemListService {
  itemList: any[] = [
    { id: 1, name: 'Apple', price: 2.0, count: 1 },
    { id: 2, name: 'Banana', price: 3.0, count: 1 },
    { id: 3, name: 'Orange', price: 2.0, count: 1 },
    { id: 4, name: 'Strawberry', price: 1.0, count: 1 },
  ];

  itemObject = {
    id: 0,
    name: '',
    count: 0,
    price: 0,
  };

  setItemList(item: any) {
    const index = this.itemList.findIndex((i) => i.id === item.productId);
    if (index === -1) {
      this.itemObject = {
        id: this.itemList[this.itemList.length - 1].id + 1,
        name: item.productName,
        price: item.price,
        count: 1,
      };
      this.itemList.push(this.itemObject /*Object.create(item)*/);
    } else {
      this.itemList[index].name = item.productName;
      this.itemList[index].price = item.price;
    }
  }

  getItemList() {
    return this.itemList;
  }

  removeListItem(itemIndex: number) {
    if (itemIndex !== -1) {
      this.itemList.splice(itemIndex, 1);
    }
  }

  constructor() {}
}
