import {VERSION as CDK_VERSION} from '@angular/cdk';
import { VERSION as MAT_VERSION, MatNativeDateModule } from '@angular/material/core';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


import {environment} from './environments/environment';
import { MainComponent } from './app/main/main.component';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

if (environment.production) {
  enableProdMode();
}

/* eslint-disable no-console */
console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);

bootstrapApplication(MainComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FormsModule, MatNativeDateModule, ReactiveFormsModule),
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi()),
    ]
})
  .catch(err => console.error(err));
