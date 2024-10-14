import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/signup/signup.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomepageComponent,
        pathMatch: 'full',
        data: { label: 'navbar_main' }
    },
    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full',
        data: { label: 'navbar_main' }
    },
    {
        path: 'signup',
        component: SignUpComponent,
        pathMatch: 'full',
        // data: { label: 'navbar_main' }
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];
