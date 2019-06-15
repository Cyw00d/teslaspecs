import { Component, OnInit } from '@angular/core';
import { ActivehmdService } from '../shared/activehmd.service';
import { model3 } from "./../shared/model3";
import { MilesPipe } from 'src/app/miles.pipe';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  objectKeys = Object.keys;
  public hmdList = [];
  public illustration: string = '';
  public eventIllustration: any;

  public model3 = model3;

  public viewOptions = [
    { name: "Normal", id: "STUD_3QTR" },
    { name: "Front side", id: "STUD_WHEEL" },
    { name: "Rear trunk", id: "STUD_REAR" },
    { name: "Full side", id: "STUD_SIDE" },
    { name: "Interior", id: "STUD_SEAT" },
  ];
  public selectedView = 'STUD_3QTR';
  public selectedRange = 'test';

  constructor(public ahmd: ActivehmdService) {
    this.ahmd.hmd.subscribe(list => this.hmdList = list);
  }

  ngOnInit() {
  }

  selectRange(e) {
    this.selectedRange = e;
  }

  selectView(v) {
    this.selectedView = v;
    this.renderImage();
  }

  updateImage(e) {
    console.log('Update image:', e);
    this.eventIllustration = e;
    this.renderImage();
    // this.illustration = e + '&view=' + this.selectedView;
  }
  renderImage() {
    const opt = this.eventIllustration.options;
    const range = this.eventIllustration.range;
    const view = this.selectedView;
    if (view === 'STUD_SEAT') {
      this.illustration = `/assets/img/m3/m3_interior_${opt.interior == '$IN3PW' ? 'white' : 'black'}.png`;
    } else if (view === 'STUD_REAR') {
      this.illustration = `/assets/img/m3/m3_rear_${opt.color}.png`;
    } else {
      this.illustration = `/assets/img/m3/m3_${range}_${opt.color}_${opt.wheels}_${view}.png`;
    }
  }

}
