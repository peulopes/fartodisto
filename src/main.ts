import './polyfills';

import {
  ChangeDetectionStrategy,
  Component,
  importProvidersFrom,

} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home.component').then(({ HomeComponent }) => HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about.component').then(({ AboutComponent }) => AboutComponent),
  },
  { path: '**', redirectTo: '' },
] as Routes;

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
  ],
  template: `
    <mat-toolbar class="toolbar" color="">
      <button mat-icon-button aria-label="Toggle menu" (click)="toggleMatSidenav()">
        <mat-icon>menu</mat-icon>
      </button>
      <span>CIBS BACKOFFICE</span>
      <span class="example-spacer"></span>
      <button mat-icon-button  aria-label="Toggle menu" (click)="toggleMatSidenav()">
        <h3>myawesomemail@mail.com</h3>
        <h5>Owner</h5>
        <mat-icon>account_circle</mat-icon>
        <mat-icon>arrow_drop_down</mat-icon>
      </button>
      <button mat-icon-button  aria-label="Toggle menu" (click)="toggleMatSidenav()">
      <mat-icon>help_outline</mat-icon>
      </button>
      <mat-toolbar class="toolbar_end">

        <button mat-icon-button aria-label="Toggle menu" (click)="toggleMatSidenav()">
        <mat-icon>notifications</mat-icon>
        </button>
        <button mat-icon-button aria-label="Toggle menu" (click)="toggleMatSidenav()">
        <mat-icon>language</mat-icon>
        </button>
      </mat-toolbar>
    </mat-toolbar>
    
    <mat-sidenav-container class="container">
      <mat-sidenav [(opened)]="matSidenavOpened" fixedTopGap="64" fixedInViewport>
        <mat-nav-list>
          <a mat-list-item routerLink="/">Home</a>
          <a mat-list-item routerLink="/about">About</a>
          <a mat-list-item href="https://liveloveapp.com" target="_blank">Learn More about LiveLoveApp</a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content class="content">
        <main>
          <router-outlet></router-outlet>
        </main>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .toolbar {
        position: fixed;
        z-index: 2;
        display: flex;
        background-color:  #0c142c;
        margin-right: 0px;
      }
      .toolbar_end {
        float: ;
        z-index: 3;
        display: flex;
        background-color:  #f87404;
        margin-right:10px;
      }
      .toolbar_end > button {
        color: #fff;
      }
      .toolbar-button > button {
        color: #fff;
      }
      .toolbar > button {
        color: #fff;
      }
      
      .toolbar > div {
        margin-right: 16px;
      }

      .toolbar > span {
        margin-left: 16px;
      }

      .container {
        flex: 1 auto;
      }
      .example-spacer {
        flex: 1 1 auto;
      }

      .content {
        flex: 1 auto;
        display: flex;
        flex-direction: column;
        color: #000;
        background: #fff;
      }

      main {
        margin-top: 64px;
        flex: 1 auto;
      }
    `,
  ],
})
export class AppComponent {
  matSidenavOpened = false;
  name = 'Brian Love';

  toggleMatSidenav(): void {
    this.matSidenavOpened = !this.matSidenavOpened;
  }
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom([
      BrowserAnimationsModule,
      RouterModule.forRoot(routes),
    ]),
  ],
})
  .then((ref) => {
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
  })
  .catch((err) => console.error(err));
