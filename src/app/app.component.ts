/* src/app/app.component.ts */

import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BmbThemeComponent } from '@ti-tecnologico-de-monterrey-oficial/ds-ng';
import { TopBarComponent } from './components/topbar/topbar.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthService } from './services/auth.service';

@Component( {
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    BmbThemeComponent,
    TopBarComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: []
} )
export class AppComponent implements OnInit {
  public router = inject( Router );
  private authService = inject( AuthService );
  private authInterceptor = inject( AuthInterceptor );


  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe( isAuthenticated => {
      if ( isAuthenticated ) {
        this.router.navigate( [ '/report' ] );
      }
    } );

    this.authInterceptor.logoutRequest.subscribe( () => {
      this.authService.logout();
    } );
  }
}