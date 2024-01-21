import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {FORM_FIELD_ROUTE} from "../../app.routes";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
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
