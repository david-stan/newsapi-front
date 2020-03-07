import { Component, ApplicationRef } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/services/news.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor(private router: Router,
              private newsService: NewsService) {
    localStorage.setItem('country', 'gb');
  }


  isDisabled() {
    return localStorage.getItem('isArticle') === 'true';
  }

  changeCountry(country: string) {
    localStorage.setItem('country', country);
    const url = this.router.url;

    if (url === '/news') {
      this.newsService.getTopNews();
    }
    if (url === '/categories') {
      this.newsService.updateAllCategories();
    }
    if (url.startsWith('/expand')) {
      this.newsService.getNewsByCategoryNonPaged(url.split('/expand/')[1]);
    }
  }

}
