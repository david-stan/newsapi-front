import { NewsListComponent } from './app/components/news-list/news-list.component';
import { ArticleComponent } from './app/components/article/article.component';

export const appRoutes = [
  { path: 'news', component: NewsListComponent },
  { path: 'article', component: ArticleComponent },
  { path: '', redirectTo: '/news', pathMatch: 'full' }
];
