import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { CompareService } from '../shared/compare.service';
import { each, find } from 'lodash-es';
import { model3 } from "./../shared/model3";

@Component({
  selector: 'comparelist',
  templateUrl: './comparelist.component.html',
  styleUrls: ['./comparelist.component.scss']
})
export class ComparelistComponent implements OnInit {

  public compareList = [];

  constructor(private imageService: ImageService, private compareService: CompareService) { }

  ngOnInit() {
    this.compareService.compareList.subscribe(d => {
      this.compareList = d;
      this.updateData();
    });
  }

  updateData() {
    this.compareList = each(this.compareList, c => {
      const carData = find(model3.ranges, r => r.id === c.range);
      c.carData = carData;
      c.image = this.imageService.renderImage(c.range, c.options, 'STUD_3QTR');
    });
  }

  delete(index) {
    this.compareService.delete(index);
  }

  compareUrl() {
    return this.compareService.generateCompareUrl(this.compareList);
  }

}
