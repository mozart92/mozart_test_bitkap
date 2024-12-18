import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user: any;
  roles: string[] = [];

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.getUserProfile().then(profile => (this.user = profile));
    //this.roles = this.auth.getRoles();
  }
}
