import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartProduct } from '../../../../../shared/mocks/1-components/cart-product';


@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})
export class ShopCardComponent {
  @Input() product: ICartProduct = {} as ICartProduct;

  @Output() increment = new EventEmitter();

  @Output() decrement = new EventEmitter();

  get totalAmount() {
    if (!this.product){
      return '0';
    }
    return this.product.price * this.product.count;
  }


  public decrementProductInCart() {
    this.decrement.emit();
  }

  public incrementProductInCart() {
    this.increment.emit();
  }
}
