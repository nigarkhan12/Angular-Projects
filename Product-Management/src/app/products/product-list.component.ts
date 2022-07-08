import {
    Component,
    OnInit,
    Output
} from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['product-list.component.css']
})
export class ProductListComponet implements OnInit{ 
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
  pageTitle: string = 'Product List';
  
  constructor(private productService:ProductService){}
  
    private _listFilter: string = '';
  
    filteredProducts: IProduct[] = [];
  
    get listFilter(): string{
      return this._listFilter;
    }
  
    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.performFilter(value);
    }

    products: IProduct[] = [];
  
  performFilter(filterBy: string): IProduct[]{ 
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLowerCase().includes(filterBy));
  }
  
  onRatingClicked(message: string): void { 
    this.pageTitle = 'Product List: ' + message;
  }
  
  toggleImage() {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }
}