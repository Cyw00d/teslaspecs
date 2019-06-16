import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { CompareService } from '../shared/compare.service';
import { each, find, map } from 'lodash-es';
import { model3 } from "./../shared/model3";
import { ActivatedRoute } from '@angular/router';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  public compareList = [];

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
  private platformUrl = window.location.origin;

  constructor(private imageService: ImageService, private compareService: CompareService, private route: ActivatedRoute, platformLocation: PlatformLocation) { }

  ngOnInit() {
    this.compareService.compareList.subscribe(d => {
      this.compareList = d;
      this.updateData();
    });

    // Check if we have url paramters:
    this.sub = this.route.params.subscribe(p => {
      console.log('Found params:', p);
    })
    this.generateCompareUrl();
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

  generateCompareUrl() {
    const compareUrl = [];
    each(this.compareList, c=> {
      compareUrl.push(c.range + '|' + c.options.color + '|' + c.options.wheels + '|' + c.options.interior);
    });
    console.log(this.platformUrl + '/compare/' + compareUrl.join('/'));
  }

}
