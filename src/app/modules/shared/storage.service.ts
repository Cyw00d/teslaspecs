import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public prefix: string = 'teslaspecs|';

  constructor() { }

  isStored(key: string) {
    return !!this.get(key);
  }

  get(key: string):any {
    return JSON.parse(window.localStorage.getItem(this.prefix + key));
  }

  save(key: string, value: any):any {
    return window.localStorage.setItem(this.prefix + key, JSON.stringify(value));
  }

  remove(key: string):any {
    return window.localStorage.removeItem(this.prefix + key);
  }

  clear():void {
    return window.localStorage.clear();
  }
}
