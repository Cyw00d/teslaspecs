import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hmd-selector-item',
  templateUrl: './hmd-selector-item.component.html',
  styleUrls: ['./hmd-selector-item.component.scss']
})
export class HmdSelectorItemComponent implements OnInit {

  @Input() public data: any;

  constructor() { }

  ngOnInit() {
  }

}
