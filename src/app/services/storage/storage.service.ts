import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { TimeElementClass } from 'src/app/shared/models/time/time-element-class.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage = localStorage;

  public set(key: string, value: any) {
    
    localStorage.setItem(key, value);
    console.log(this)
  }

  public get(key: string) {
    console.log(localStorage)
    localStorage.getItem(key);
  }
  
  // set a key/value object
  async setObject(key: string, object: Object) {
    try {
      console.log(object);
      await localStorage.setItem(key, JSON.stringify(object));
      return true;
    } catch (reason) {
      console.log(reason);
      return false;
    }
  }

  // get a key/value object
  getObject(key: string): Array<any> {
    try {
      const result = localStorage.getItem(key);
      if (result != null) {
        console.log(JSON.parse(result));
        return JSON.parse(result);
      }
      return null;
    } catch (reason) {
      console.log(reason);
      return null;
    }
  }
}