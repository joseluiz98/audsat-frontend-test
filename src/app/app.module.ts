import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';

const dbConfig: DBConfig = {
  name: 'logging',
  version: 1,
  objectStoresMeta: [
    {
      store: 'event',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'timestamp', keypath: 'timestamp', options: { unique: true } },
        { name: 'type', keypath: 'type', options: { unique: false } },
      ],
    },
  ],
};

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxIndexedDBModule.forRoot(dbConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
