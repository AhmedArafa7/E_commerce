import { Routes } from '@angular/router';
import { AuthlayoutComponent } from './layouts/authlayout/authlayout.component';
import { BlanklayoutComponent } from './layouts/blanklayout/blanklayout.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },

    { 
        path: '', 
        component: AuthlayoutComponent, 
        children: [
            { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
            { path: 'sign-up', loadComponent: () => import('./pages/sign-up/sign-up.component').then(m => m.SignUpComponent) },
            { path: 'forget-password', loadComponent: () => import('./pages/forget-password/forget-password.component').then(m => m.ForgetPasswordComponent) }
        ]
    },

    { 
        path: '', 
        component: BlanklayoutComponent, 
        children: [
            { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) , title: 'Home' , canActivate: [authGuard] },
            { path: 'brands', loadComponent: () => import('./pages/brands/brands.component').then(m => m.BrandsComponent) },
            { path: 'categories', loadComponent: () => import('./pages/categories/categories.component').then(m => m.CategoriesComponent) },
            { path: 'register', loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent) },
            { path: 'details/:id', loadComponent: () => import('./pages/details/details.component').then(m => m.DetailsComponent) },
            { path: 'cart', loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent) },
            { path: 'products', loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent) },
            { path: 'allorders', loadComponent: () => import('./pages/allorders/allorders.component').then(m => m.AllordersComponent) },
            { path: 'checkout/:id', loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent) },
        ]
    },

    { path: '**', component: NotfoundComponent }
];
