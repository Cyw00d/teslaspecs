import { Component, OnInit } from '@angular/core';
import { ActivehmdService } from '../shared/activehmd.service';
import { hmdList } from '../shared/hmd';

@Component({
  selector: 'hmd-selector',
  templateUrl: './hmd-selector.component.html',
  styleUrls: ['./hmd-selector.component.scss']
})
export class HmdSelectorComponent implements OnInit {

  public hmdList: any;

  constructor(public hmdService: ActivehmdService) {
    this.hmdService.hmd.subscribe(newList => {
      this.hmdList = newList;
    });
  }

  ngOnInit() {
  }

}
