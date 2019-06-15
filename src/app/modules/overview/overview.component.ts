import { Component, OnInit } from '@angular/core';
import { ActivehmdService } from '../shared/activehmd.service';
import { model3 } from "./../shared/model3";
import { MilesPipe } from 'src/app/miles.pipe';
import { CompareService } from '../shared/compare.service';
import { ImageService } from '../shared/image.service';

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
    { name: "Angled", id: "STUD_3QTR" },
    { name: "Wheel Closeup", id: "STUD_WHEEL" },
    { name: "Full side", id: "STUD_SIDE" },
    { name: "Rear trunk", id: "STUD_REAR" },
    { name: "Interior", id: "STUD_SEAT" },
  ];
  public selectedView = 'STUD_3QTR';
  public selectedRange;

  public compareList: any;

  constructor(
    public ahmd: ActivehmdService,
    private compareService: CompareService,
    private imageService: ImageService
    ) {
  }

  ngOnInit() {
    this.ahmd.hmd.subscribe(list => this.hmdList = list);
    this.compareService.compareList.subscribe(d => {
      this.compareList = d;
    });
  }

  selectRange(e) {
    this.selectedRange = e;
  }

  selectView(v) {
    this.selectedView = v;
    this.illustration = this.imageService.renderImage(this.eventIllustration.range, this.eventIllustration.options, this.selectedView);
  }

  updateImage(e) {
    this.eventIllustration = e;
    this.illustration = this.imageService.renderImage(this.eventIllustration.range, this.eventIllustration.options, this.selectedView);
  }

}
