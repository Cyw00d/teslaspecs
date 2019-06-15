import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { CompareService } from '../shared/compare.service';
import { each, find, map } from 'lodash-es';
import { model3 } from "./../shared/model3";

@Component({
  selector: 'compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  public compareList = [];

  public specsCompare = [
    { name: 'Topspeed', id: 'topspeed_km' },
    { name: 'Speed', id: 'speed' },
  ]

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
      c.specs = {};
      map(c.carData.specs, s => c.specs[s.key] =s);
      c.image = this.imageService.renderImage(c.range, c.options, 'STUD_3QTR');
    });
  }

  delete(index) {
    this.compareService.delete(index);
  }

}
