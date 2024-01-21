import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {Router} from "@angular/router";
import {FORM_FIELD_ROUTE} from "../../app.routes";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButton,
    MatDivider
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {
  }

  goToDescobrimentos() {
    this.router.navigate([FORM_FIELD_ROUTE]).then(r => true);
  }
}
