import {Component} from "@angular/core";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  standalone: true,
  styleUrl: './app.component.css',
  imports: [
    RouterLink,
    RouterOutlet
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
}
