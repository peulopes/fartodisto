import { Component } from '@angular/core';
import './polyfills';
import { ChangeDetectionStrategy, importProvidersFrom } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    RouterModule,
  ],
  template: `
  <mat-drawer-container class="example-container">
  <mat-drawer mode="side" opened>
  <button mat-flat-button class="example-button"><mat-icon class="aligned-with-icon-relative"> dashboard </mat-icon>Dashboard<mat-icon class="aligned-with-icon-relative-end" >keyboard_arrow_down</mat-icon></button>
  <mat-divider></mat-divider>
  <button mat-flat-button class="example-button"><mat-icon class="aligned-with-icon-relative"> business_center </mat-icon>Business<mat-icon >keyboard_arrow_down</mat-icon></button>
  <mat-divider></mat-divider>
  <button mat-flat-button class="example-button"><mat-icon class="aligned-with-icon-relative"> insert_chart</mat-icon>Analytics<mat-icon>keyboard_arrow_down</mat-icon></button>
  <mat-divider></mat-divider>
  <button mat-flat-button class="example-button"><mat-icon class="aligned-with-icon-relative"> settings</mat-icon>Configuration<mat-icon>keyboard_arrow_down</mat-icon></button>
  <mat-divider></mat-divider>
  <button mat-flat-button class="example-button"><mat-icon class="aligned-with-icon-relative"> important_devices</mat-icon>CIBS Payment Gateway<mat-icon>keyboard_arrow_down</mat-icon></button>
  <mat-divider></mat-divider>
  <button mat-flat-button class="example-button"><mat-icon class="aligned-with-icon-relative"> assignment_turned_in</mat-icon>Events and Audits<mat-icon>keyboard_arrow_down</mat-icon></button>
  <mat-divider></mat-divider>
  </mat-drawer>
  <mat-drawer-content>
    <button>Dashboard</button>
    
    <button><mat-icon> arrow_forward_ios </mat-icon> General</button>

    <mat-card>
      <mat-icon class="aligned-with-icon-relative-dash"> dashboard </mat-icon> <span>General Dashboard</span>
      <span class="example-spacer"></span>
      <mat-icon class="refresh"  > refresh </mat-icon>
      <mat-tab-group class="mat-tab-g">
      <mat-tab label="24 hours"> Content 1 </mat-tab>
      <mat-tab label="7 days"> Content 2 </mat-tab>
      <mat-tab label="14 days"> Content 3 </mat-tab>
      <mat-tab label="Total"> Content 1 </mat-tab>
      <mat-tab label="Channels"> Content 2 </mat-tab>
      <mat-tab label="Terminals"> Content 3 </mat-tab>
      <mat-tab label="Systems"> Content 1 </mat-tab>
      <mat-tab label="Methods"> Content 2 </mat-tab>
      <mat-icon> </mat-icon>
      </mat-tab-group> 
     </mat-card>

    <p>This Angular v14 is a companion to assist you with getting started with standalone components in Angular v14+.</p> 
    </mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .example-spacer {
        flex: 1 1 auto;
      }
      .example-container {
        display: flex;
        height:100%;
        align-items: center;
        position: absolute;
        top: 60px;
        bottom: 60px;
        left: 0;
        right: 0;
        border-right-color: #f87404;
        color: #fff;
      }
      .example-button {
        display: flex;
        margin: 12px;
        left: 0;
        right: 0;
        margin-top: 13px;
        border-right-color: #f87404;
        color: #fff;
      }
      .example-container > button {
        color: #fff;
      }
      .mat-tab-g{
        color: #fff;
      }    
      .proper-button{
        backround-color= #fff;

      }

      .aligned-with-icon-relative{
        position: relative;
        display:flex;
        margin-top: -5px;
        margin-left: 10px; /* optional */
        margin-right: 25px;
        align-items: right;
    }
    .aligned-with-icon-relative-dash{
      position: relative;
      margin-top: -5px;
      margin-left: 10px; /* optional */
      margin-right: 20px;
    }
    .aligned-with-icon-relative-end{
      position: relative;
      display: flex;
        margin-top: -5px;
        margin-left: 10px; /* optional */
        margin-right: 25px;
        align-items: right;
    }

      .toolbar {
        position: fixed;
        z-index: 2;
        display: flex;
        background-color:  #0c142c;
      }


      .side-n {
        position: fixed;
        z-index: 2;
        display: flex;
        background-color:  #0c142c;
      }

      .side-n > button {
        color: #fff;
      }
      .toolbar > span {
        margin-left: 16px;
      }

      .container {
        flex: 1 auto;
      }

      .content {
        flex: 1 auto;
        display: flex;
        flex-direction: column;
        color: #000;
        background: #fff;
      }
      .refresh {
        position: relative;
        margin-top: -5px;
        margin-left: 10px; /* optional */
        margin-right: 20px;
        align-content: end;
      }

      main {
        margin-top: 64px;
        flex: 1 auto;
      }
    `,
  ],
})
export class HomeComponent {}
