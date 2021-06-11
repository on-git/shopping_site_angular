import { Component, OnInit } from '@angular/core';
import { ItemListService } from '../item-list.service';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css'],
})
export class UpdateProductsComponent implements OnInit {
  constructor(private itemListService: ItemListService) {}

  ngOnInit(): void {}

  showForm: boolean = false;
  itemArray = this.itemListService.getItemList();
  productN = '';
  productP = 0;
  productI = 0;
  productNameError = false;
  productPriceError = false;

  onSubmit(form: any) {
    console.log(form);
    if (form.valid) {
      this.itemListService.setItemList(form.value);
      this.productNameError = false;
      this.productPriceError = false;
      this.showForm = false;
    } else {
      if (!form.controls.productName.valid) {
        this.productNameError = true;
      } else {
        this.productNameError = false;
      }
      if (!form.controls.price.valid) {
        this.productPriceError = true;
      } else {
        this.productPriceError = false;
      }
    }
  }

  addNewItem() {
    this.showForm = true;
    this.productI = 0;
    this.productN = '';
    this.productP = 0;
  }

  updateItem(item: any) {
    this.productN = item.name;
    this.productP = item.price;
    this.productI = item.id;
    if (!this.showForm) {
      this.showForm = !this.showForm;
    }
  }

  removeItem(index: number) {
    this.itemListService.removeListItem(index);
  }
}
