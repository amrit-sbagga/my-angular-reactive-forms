import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() customersKey;

}
