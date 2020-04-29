import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.css']
})
export class InputtextComponent implements OnInit {
  @Input() name: string;
  @Input() hint: string;
  @Input() property: string;
  @Input() type: string;
 
  constructor() { }

  ngOnInit(): void {
  }

}
