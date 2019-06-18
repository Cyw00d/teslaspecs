import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { CompareService } from '../shared/compare.service';
import { each, find, map } from 'lodash-es';
import { model3 } from "./../shared/model3";
import { options } from "./../shared/options";
import { ActivatedRoute } from '@angular/router';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  private _options = options;
  private _model3 = model3;
  private m3urlCheck: RegExp = /^(m3_[a-z]{2,5})-([A-Z0-9]{4,5})-([A-Z0-9]{4,5})-([A-Z0-9]{4,5})$/;

  public specsCompare = [
    { id: 'range_wltp_km',  name: 'Range WLTP (km)' },
    { id: 'range_wltp_m',   name: 'Range WLTP (miles)' },
    { id: 'topspeed_km',    name: 'Top speed (km)' },
    { id: 'topspeed_m',     name: 'Top speed (miles)' },
    { id: 'speed',          name: '0-100km/h (0-60 m/h)' },
    { id: 'horsepower',     name: 'Horsepower' },
    { id: 'torgue',         name: 'Torque' },
    { id: 'capacity',       name: 'Battery Capacity' },
    { id: 'prem_options',   name: 'Premium Options' },
    { id: 'length',         name: 'Length' },
    { id: 'width',          name: 'Width' },
    { id: 'height',         name: 'Height' },
    { id: 'weight',         name: 'Weight' }
  ]

  private sub: any;
  private sharelink = '';

  private compareList = [];

  constructor(
    private imageService: ImageService,
    private compareService: CompareService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    // Check if we have url paramters:
    this.sub = this.route.params.subscribe(p => {
      const objKeys = Object.keys(p);
      if (objKeys.length > 1) {
        each(objKeys, o => {
          const carCode = p[o].match(this.m3urlCheck);
          const carData = find(this._model3.ranges, m => m.id === carCode[1]);
          const options = {
            wheels: '$' + carCode[3],
            color: '$' + carCode[2],
            interior: '$' + carCode[4],
          }
          const carObject = {
            carData,
            range: carCode[1],
            options,
            specs: [ ...carData.specs ],
            image: this.imageService.renderImage(carCode[0], options),
          }
          this.compareList.push(carObject);
        });
      }
    });
    this.updateData();
    this.sharelink = this.compareService.generateCompareUrl(this.compareList);
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
