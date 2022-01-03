import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, CUSTOMERS } from './customer.object';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customerName="Nike"
  
  
  customerList = CUSTOMERS;
  customer: Customer = {
    id: 1,
    gender:'Male',
    name: 'Nati',
    age: 2,
    imageUrl: '/../../assets/aa.png',
    description: 'you can read more'    
  }

	onViewDetail(id: number){
    this.router.navigateByUrl('/customer/detail/' + id); 
		console.log(id);
		// when we learn routing we will route(move) to a different component 
                   // (product detail component) with this id      
}


add(){
  this.router.navigateByUrl('/customer/detail/' + -1);
}

delete(id: number){
  let index = 0;
  for (let customer of CUSTOMERS){
    if (customer.id == id){ 
      break
    }
    index += 1; 
  }
  CUSTOMERS.splice(index, 1)
}



  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("called");

  }

}
