import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NewsService } from './services/news.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
