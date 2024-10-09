import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomepageComponent,
        pathMatch: 'full',
        data: { label: 'navbar_main' }
    },
    {
        path: 'Login',
        component: LoginComponent,
        pathMatch: 'full',
        data: { label: 'navbar_main' }
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];
