import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, CUSTOMERS } from '../customers/customer.object';
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
customers=CUSTOMERS;
selectedCustomer: any;
  newCustomer(){

  }

  updateCustomer(f: NgForm){
    let n = f.value;
    this.selectedCustomer.name = n.name;
    this.selectedCustomer.age = n.age;
    this.selectedCustomer.gender = n.gender;
    this.selectedCustomer.id = n.id;
    this.selectedCustomer.description= n.description;
    this.router.navigateByUrl('customers');
    
  }
  
  customer2: Customer = {
    id: -1,
    name: '',
    age: 2000,
    gender:'',
    imageUrl: 'assets/pro_img.jfif',
    description: ''   
  }
  add(a: NgForm){
    let n = a.value;
    let e ="id:"
    this.customer2.id =n['id']
    this.customer2.name = n['name']
    this.customer2.gender = n['gender']
    this.customer2.description =n['description']
    this.customer2.age = n['age']

    this.customers.push(this.customer2);
    this.router.navigateByUrl('customers');

  }

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      param => {
        if (param['id'] == -1){
          document.getElementById("update")?.classList.add("hide");
          document.getElementById("add")?.classList.remove("hide");
        } else{
          document.getElementById("update")?.classList.remove("hide");
          document.getElementById("add")?.classList.add("hide");

          
            for (let customer of this.customers){
              if (customer.id == param['id']){ this.selectedCustomer = customer; }
            }

        }

      })
  }

}
