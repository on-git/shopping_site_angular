import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  count = 0;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  cartItemCount = this.shoppingListService.listCount.subscribe((value) => {
    this.count = value;
  });
}
