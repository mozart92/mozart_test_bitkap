import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,  RouterOutlet} from "@angular/router";
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-loyout-content',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterOutlet],
  templateUrl: './loyout-content.component.html',
  styleUrl: './loyout-content.component.css'
})
export class LoyoutContentComponent {

  user: any;
  roles: string[] = [];

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.getUserProfile().then(profile => (this.user = profile));
    //this.roles = this.auth.getRoles();
  }

  logout(): void {
    this.auth.logout();
  }

}
