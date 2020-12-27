import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formValue = {
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zip: ""
  }

  customerForm = new FormGroup({
    firstName: new FormControl(this.formValue.firstName),
    lastName: new FormControl(this.formValue.lastName),
    address: new FormGroup({
      street : new FormControl(this.formValue.street),
      city : new FormControl(this.formValue.city),
      state : new FormControl(this.formValue.state),
      zip : new FormControl(this.formValue.zip)
    })
  })

  name = new FormControl('');

  onFormSubmit(){
    console.log('Values = ', this.customerForm.value);
  }

}
