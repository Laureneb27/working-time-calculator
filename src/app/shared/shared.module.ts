import { NgModule } from "@angular/core";
import { TranslateModule, TranslateStore } from "@ngx-translate/core";



@NgModule({
  imports:[
    TranslateModule
  ],
  exports: [
    TranslateModule
  ],
  providers: [TranslateStore]
})

export class SharedModule {}