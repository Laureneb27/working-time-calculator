import { HttpClient } from "@angular/common/http";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { TranslateLoader, TranslateModule, TranslateStore } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";



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