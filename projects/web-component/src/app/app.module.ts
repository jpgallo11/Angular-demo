import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { MaterialModule } from './ui-material.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateExampleComponent } from './components/translate-example/translate-example.component';
import { LeftMenuModule } from 'projects/ui-shared/src/lib/components/left-menu/left-menu.module';


@NgModule({
  declarations: [
    AppComponent,
    UiButtonComponent,
    TranslateExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),

    // lib modules
    LeftMenuModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule { 
  constructor(injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('demo-web-component', el);
  }

  ngDoBootstrap() {}
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
