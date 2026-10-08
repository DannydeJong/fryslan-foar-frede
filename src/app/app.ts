import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import {Header} from './components/header/header';
import {EventInfo} from './components/event-info/event-info';
import {ShareButtons} from './components/share-buttons/share-buttons';
import {Flyer} from './components/flyer/flyer';
import {Trailer} from './components/trailer/trailer';
import {Footer} from './components/footer/footer';
import {Description} from './components/description/description';
import {Speaker} from './components/speaker/speaker';
import {SignUp} from './components/sign-up/sign-up';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    EventInfo,
    ShareButtons,
    Flyer,
    Trailer,
    Footer,
    Description,
    Speaker,
    SignUp
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
