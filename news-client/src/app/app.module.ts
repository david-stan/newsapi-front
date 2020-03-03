import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsThumbnailComponent } from './components/news-thumbnails/news-thumbnail.component';
import { NavbarComponent } from './components/nav/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsThumbnailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
