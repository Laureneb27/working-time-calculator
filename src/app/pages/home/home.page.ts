import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public storage: Storage) {}

  async ngOnInit(){
    await this.storage.set('name', 'Mr. Ionitron');
    await this.storage.get('name').then((elem)=> console.log(elem))

  }
}
