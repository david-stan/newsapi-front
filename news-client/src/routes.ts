import { NewsListComponent } from './app/components/news-list/news-list.component';
import { ArticleComponent } from './app/components/article/article.component';
import { CategoriesComponent } from './app/components/categories/categories.component';
import { ExpandCategoryComponent } from './app/components/categories/expand-category.component';

export const appRoutes = [
  { path: 'news', component: NewsListComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'expand/:category', component: ExpandCategoryComponent},
  { path: '', redirectTo: '/news', pathMatch: 'full' }
];
