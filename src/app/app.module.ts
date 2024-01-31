import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.config';
import { ErrorPageComponent } from './page/error-page/error-page.component';
import { MainPageComponent } from './page/main-page/main-page.component';
import { HeaderComponent } from './component/header/header.component';
import { StoragePageComponent } from './page/storage-page/storage-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    MainPageComponent,
    HeaderComponent,
    StoragePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [importProvidersFrom(HttpClientModule),],
  bootstrap: [AppComponent]
})
export class AppModule { }
