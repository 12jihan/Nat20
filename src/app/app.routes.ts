import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/signup/signup.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { CampaignsPageComponent } from './components/campaigns-page/campaigns-page.component';
import { CampaignCreatorPageComponent } from './components/campaign-creator-page/campaign-creator-page.component';
import { CampaignPageComponent } from './components/campaign-page/campaign-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

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
        path: 'campaign/:id',
        component: CampaignPageComponent,
        pathMatch: 'full',
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
    },
    {
        path: 'verify-account',
        component: VerifyEmailComponent,
        pathMatch: 'full',
    },
    {
        path: 'campaign-creator',
        component: CampaignCreatorPageComponent,
        pathMatch: 'full',
    },
    {
        path: 'user-profile/:id',
        component: UserProfileComponent,
        pathMatch: 'full',
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];
