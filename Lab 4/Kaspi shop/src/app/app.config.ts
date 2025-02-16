import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(CommonModule)]
};
