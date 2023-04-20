import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { LoginComponent } from 'app/login/login.component';
import { ProductDetailComponent } from 'app/product-detail/product-detail.component';
import { ProductListAdminComponent } from 'app/product-list-admin/product-list-admin.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent},
    { path: 'product-detail', component: ProductDetailComponent},
    { path: 'product-list', component: ProductListAdminComponent},
];
