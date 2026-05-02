import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SvgSpriteService {
  private http = inject(HttpClient);
  private doc = inject(DOCUMENT);

  /** Fetches the generated sprite.svg and injects it invisibly at the top of <body>. */
  async load(): Promise<void> {
    try {
      const svgText = await firstValueFrom(
        this.http.get('svg/sprite.svg', { responseType: 'text' })
      );
      const container = this.doc.createElement('div');
      container.setAttribute('aria-hidden', 'true');
      container.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden;';
      container.innerHTML = svgText;
      this.doc.body.insertBefore(container, this.doc.body.firstChild);
    } catch (e) {
      console.error('Failed to load SVG sprite:', e);
    }
  }
}

