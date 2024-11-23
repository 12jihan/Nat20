import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/signup/signup.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { CampaignsPageComponent } from './components/campaigns-page/campaigns-page.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomepageComponent,
        pathMatch: 'full',
        data: { label: 'navbar_main' }
    },
    {
        path: 'campaigns',
        component: CampaignsPageComponent,
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
        path: 'verify-account',
        component: VerifyEmailComponent,
        pathMatch: 'full',
        // data: { label: 'navbar_main' }
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];
