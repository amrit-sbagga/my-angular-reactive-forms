import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-reactive-forms';

  customers = [];

  submitCustomerDetail(value){
    console.log(value);
    this.customers.unshift(value);
  }

}
