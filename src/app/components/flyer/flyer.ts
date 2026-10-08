import {Component, Inject} from '@angular/core';
import {DOCUMENT, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-flyer',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './flyer.html',
  styleUrl: './flyer.scss',
  standalone: true
})
export class Flyer {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    const parent = img.parentElement;
    if (parent) {
      const placeholder = this.document.createElement('div');
      placeholder.className = 'flyer-placeholder';
      placeholder.textContent = '🎬 Flyer Coming Soon';
      parent.appendChild(placeholder);
    }
  }
}
