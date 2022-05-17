import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(private translateService: TranslateService, private storage: Storage) {
  }

  async ngOnInit() {
		// Configure the TranslateService
		this.translateService.setDefaultLang('fr');
		this.translateService.use('fr');
    // Init storage
    await this.storage.create();
	}
}
