import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-share-buttons',
  imports: [],
  templateUrl: './share-buttons.html',
  styleUrl: './share-buttons.scss',
  standalone: true
})
export class ShareButtons {

  private pageUrl = 'https://www.fryslanfoarfrede.nl/';
  private shareText = "Fryslan Foar Frede presenteert de film \"Earth's Greatest Enemy\" op 23 September om 19:00 op NHLStenden. Bekijk hier de trailer:";

  constructor(@Inject(DOCUMENT) private document: Document, private snackBar: MatSnackBar) {}

  async shareNative() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Earth's Greatest Enemy",
          text: this.shareText,
          url: this.pageUrl
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      this.copyLink();
    }
  }

  shareWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent(this.shareText + ' ' + this.pageUrl)}`;
    window.open(url, '_blank');
  }


  shareTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.pageUrl)}&text=${encodeURIComponent(this.shareText)}`;
    window.open(url, '_blank');
  }

  copyLink() {
    navigator.clipboard.writeText(this.pageUrl).then(() => {
      this.snackBar.open('Gekopieerd!', 'Sluiten', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: ['custom-snackbar']
      });
    }).catch(() => {
      const textarea = this.document.createElement('textarea');
      textarea.value = this.pageUrl;
      this.document.body.appendChild(textarea);
      textarea.select();
      this.document.execCommand('copy');
      this.document.body.removeChild(textarea);
    });
  }
}
