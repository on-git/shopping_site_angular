import { Component, OnInit } from '@angular/core';
import { ItemListService } from '../item-list.service';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(
    private shoppingListService: ShoppingListService,
    private itemListService: ItemListService
  ) {}

  ngOnInit(): void {}

  itemArray = this.itemListService.getItemList();

  countInc(item: any) {
    item.count++;
  }

  countDecr(item: any) {
    if (item.count > 1) {
      item.count--;
    }
  }

  addToCart(item: any) {
    this.shoppingListService.setShoppingList(item);
    item.count = 1;
  }
}
