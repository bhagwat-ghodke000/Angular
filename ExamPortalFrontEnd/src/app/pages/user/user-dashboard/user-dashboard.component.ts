import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserSidebarComponent } from "../user-sidebar/user-sidebar.component";

@Component({
    selector: 'app-user-dashboard',
    standalone: true,
    templateUrl: './user-dashboard.component.html',
    styleUrl: './user-dashboard.component.css',
    imports: [RouterOutlet, UserSidebarComponent]
})
export class UserDashboardComponent {

}
