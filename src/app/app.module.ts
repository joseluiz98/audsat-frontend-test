import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LogsComponent } from './logs/logs.component';

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
  declarations: [AppComponent, HeaderComponent, LogsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    MatTableModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LogsComponent],
})
export class AppModule {}
