import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsThumbnailComponent } from './components/news-thumbnails/news-thumbnail.component';
import { NavbarComponent } from './components/nav/navbar.component';
import { NewsService } from 'src/services/news.service';
import { NewsListResolver } from 'src/services/news-list-resolver.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { ArticleComponent } from './components/article/article.component';
import { StorageService } from 'src/services/storage.service';
import { AddTokenInterceptor } from 'src/services/interceptors/http-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsThumbnailComponent,
    NavbarComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers: [
    NewsService,
    NewsListResolver,
    StorageService,
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
