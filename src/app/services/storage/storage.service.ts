import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { TimeElementClass } from 'src/app/shared/models/time/time-element-class.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public set(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  public get(key: string) {
    localStorage.getItem(key);
  }
  
  // set a key/value object
  async setObject(key: string, object: Object) {
    try {
      await localStorage.setItem(key, JSON.stringify(object));
      return true;
    } catch (reason) {
      console.log(reason);
      return false;
    }
  }

  // get a key/value object
  getObject(key: string): Array<TimeElementClass> {
    try {
      const result = localStorage.getItem(key);
      if (result != null) {
        return JSON.parse(result);
      }
      return null;
    } catch (reason) {
      console.log(reason);
      return null;
    }
  }
}