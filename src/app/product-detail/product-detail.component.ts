import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, PRODUCTS } from '../products/product.object';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products=PRODUCTS;
  
  selectedProduct=PRODUCTS[0];

     
  updateProduct(f: NgForm){
    let n = f.value;
    this.selectedProduct.name = n.name;
    this.selectedProduct.price = n.price;
    this.selectedProduct.id = n.id;
    this.router.navigateByUrl('products');
  }
  
  product2: Product = {
    id: -1,
    name: '',
    price: 2000,
    imageUrl: 'assets/pro_img.jfif',
    description: ''   
  }
  add(a: NgForm){
    let n = a.value;

    this.product2.id = n['id']
    this.product2.name = n['name']
    this.product2.description = n['des']
    this.product2.price = n['price']

    this.products.push(this.product2);
    this.router.navigateByUrl('products');

  }

  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(){

    this.route.params.subscribe(
      param => {
        if (param['id'] == -1){
          document.getElementById("update")?.classList.add("hide");
          document.getElementById("add")?.classList.remove("hide");
        } else{
          document.getElementById("update")?.classList.remove("hide");
          document.getElementById("add")?.classList.add("hide");

          
            for (let product of this.products){
              if (product.id == param['id']){ this.selectedProduct = product; }
            }

        }

      })
  }

}
