import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';
import { each } from 'lodash-es';
@Injectable({
  providedIn: 'root'
})
export class CompareService {
  
  compareList: BehaviorSubject<any> = new BehaviorSubject<any[]>([]);
  private platformUrl = window.location.origin;

  constructor(private storageService: StorageService) {
    const storedList = this.storageService.get('comparelist') || [];
    if (storedList.length) this.compareList.next(storedList);
  }


  addToList(range, i) {
    const cList: any = this.compareList.value;
    if (cList.length > 2) { cList.shift(); }
    cList.push({range, options: i});
    this.compareList.next(cList);
    this.storageService.save('comparelist', cList);
  }

  delete(index) {
    let cList: any = this.compareList.value;
    cList.splice(index, 1);
    this.compareList.next(cList);
    this.storageService.save('comparelist', cList);
  }

  generateCompareUrl(compareList) {
    const compareUrl = [];
    each(compareList, c=> {
      compareUrl.push(c.range + '-' + c.options.color.replace('$','') + '-' + c.options.wheels.replace('$','') + '-' + c.options.interior.replace('$',''));
    });
    return this.platformUrl + '/compare/' + compareUrl.join('/');
  }
}
