import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CompareService {
  
  compareList: BehaviorSubject<any> = new BehaviorSubject<any[]>([]);

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
}
