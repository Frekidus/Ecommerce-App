import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, PRODUCTS } from './product.object';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productName="Nike"
  
  
  productList = PRODUCTS;
  product: Product = {
    id: 1,
    name: 'Nike',
    price: 2000,
    imageUrl: '/../../assets/a.jfif',
    description: 'you can read more'    
  }

	onViewDetail(id: number){
    this.router.navigateByUrl('/products/detail/' + id); 
		console.log(id);
	   
}


add(){
  this.router.navigateByUrl('/products/detail/' + -1);
}

delete(id: number){
  let index = 0;
  for (let product of PRODUCTS){
    if (product.id == id){ 
      break
    }
    index += 1; 
  }
  PRODUCTS.splice(index, 1)
}



  constructor(private router: Router) { }

  ngOnInit(){
    console.log("called");

  }

}
function f(f: any) {
  throw new Error('Function not implemented.');
}

