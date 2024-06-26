import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptorProvider } from './services/auth.interseptor';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(),importProvidersFrom(HttpClientModule,CKEditorModule),AuthInterceptorProvider]
};
