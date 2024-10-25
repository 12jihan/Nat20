import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';
import aws_config from '../aws-exports';
import { provideHttpClient } from '@angular/common/http';

Amplify.configure(aws_config);
export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideHttpClient(),
        provideRouter(routes),
        provideClientHydration(),
        importProvidersFrom([
            FontAwesomeModule,
            // AmplifyAuthenticatorModule
        ])
    ],
};
