import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BmbTopBarComponent } from '@ti-tecnologico-de-monterrey-oficial/ds-ng';
import { AuthService } from '../../services/auth.service';

@Component( {
  selector: 'app-top-bar',
  standalone: true,
  imports: [ RouterModule, BmbTopBarComponent ],
  templateUrl: './topbar.component.html',
  styleUrls: [ './topbar.component.css' ]
} )
export class TopBarComponent {
  @Output() logoutClicked = new EventEmitter<void>();

  constructor(
    private authService: AuthService,
  ) { }

  logOut( _: Event ): void {
    this.authService.logout();
    this.logoutClicked.emit();
  }
}