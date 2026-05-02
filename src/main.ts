import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {APP_INITIALIZER, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app/app.routes';
import {MarkdownModule} from 'ngx-markdown';
import {provideHttpClient} from '@angular/common/http';
import {SvgSpriteService} from './app/svg-sprite.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(),
    ...MarkdownModule.forRoot().providers ?? [],
    {
      provide: APP_INITIALIZER,
      useFactory: (spriteService: SvgSpriteService) => () => spriteService.load(),
      deps: [SvgSpriteService],
      multi: true,
    },
  ]
})
  .catch((err) => console.error(err));
