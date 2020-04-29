import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   inputs: Array<dataModal>=[]
  constructor() { 
  }

  ngOnInit(): void {
    this.inputs.push({ name: 'label1', placeHolder:'enter your text', property: 'F3', inputType:'text'});
    this.inputs.push({ name: 'label2', placeHolder:'enter your number', property: 'F2', inputType:'number'});
    this.inputs.push({ name: 'label3', placeHolder:'enter your text', property: 'F1', inputType:'text'});
    this.inputs.push({ name: 'label3', placeHolder:'enter your text', property: 'F4', inputType:'text'});
   //this.inputs.push({ name: 'label3', placeHolder:'enter your text', property: 'F5', inputType:'text'});
  }

}

interface dataModal{
  name: any;
  placeHolder: any;
  property: any;
  inputType: any;
}
