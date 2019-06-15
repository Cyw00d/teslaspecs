import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompareService {
  
  compareList: BehaviorSubject<any> = new BehaviorSubject<any[]>([]);

  constructor() {}


  addToList(range, i) {
    const cList: any = this.compareList.value;
    if (cList.length > 2) { cList.shift(); }
    cList.push({range, options: i});
    this.compareList.next(cList);
  }
}
