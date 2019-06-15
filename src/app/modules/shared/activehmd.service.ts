import { Injectable } from '@angular/core';
import { hmdList } from './hmd';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivehmdService {
  
  public hmdList = hmdList;

  public hmd = new BehaviorSubject<any[]>(this.hmdList);
  
  constructor() {
    this.hmd.next(this.hmdList);
  }
}
