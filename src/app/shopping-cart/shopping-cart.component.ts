import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  shoppingList: any[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingList = this.shoppingListService.getShoppingList();
  }

  countInc(item: any) {
    item.count++;
  }

  countDecr(item: any) {
    if (item.count > 1) {
      item.count--;
    }
  }

  removeItem(itemIndex: number) {
    this.shoppingListService.removeShoppingListItem(itemIndex);
  }
}
