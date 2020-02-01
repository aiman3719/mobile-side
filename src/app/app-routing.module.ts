import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./pages/user/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/user/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/user/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/user/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./pages/user/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/admin/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/admin/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/admin/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'transactions',
    loadChildren: () => import('./pages/admin/transactions/transactions.module').then( m => m.TransactionsPageModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/error/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: 'unauthorized',
    loadChildren: () => import('./pages/error/unauthorized/unauthorized.module').then( m => m.UnauthorizedPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
