import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-reactive-form',
  templateUrl: './customer-reactive-form.component.html',
  styleUrls: ['./customer-reactive-form.component.scss']
})
export class CustomerReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formValue = {
    firstName: "",
    lastName: "",
    contactno: "",
    emailId: ""
  }

  customerForm = new FormGroup({
    firstName: new FormControl(this.formValue.firstName),
    lastName: new FormControl(this.formValue.lastName),
    contactno: new FormControl(this.formValue.contactno),
    emailId: new FormControl(this.formValue.emailId)
  })

  @Output() submitCustomer = new EventEmitter()

  // onFormSubmit(){
  //   console.log('Values = ', this.customerForm.value);
  // }

  // passDataToChild(){
  //   console.log('pass - ', this.customerForm.value);
  //   return this.customerForm.value.firstName === ""? "" : this.customerForm.value;
  // }

}
