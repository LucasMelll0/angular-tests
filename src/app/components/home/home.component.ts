import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {FORM_FIELD_ROUTE, HTTP_REQUEST_ROUTE} from "../../app.routes";
import {MatIcon} from "@angular/material/icon";
import {NgForOf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    NgForOf,
    NgStyle,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  navButtons: NavButton[];

  constructor(private router: Router) {
    this.navButtons = [
      {
        text: 'Testes com mat-form-field', onClick: () => {
          this.goToFormFieldTests();
        },
      },
      {
        text: 'Testes de requisição http', onClick: () => {
          this.goToHttpRequestTests();
        }
      }
    ];
  }

  goToFormFieldTests() {
    this.router.navigate([FORM_FIELD_ROUTE]).then(r => true);
  }

  goToHttpRequestTests() {
    this.router.navigate([HTTP_REQUEST_ROUTE]).then(r => true);
  }
}

export class NavButton {
  text: string = '';
  onClick: () => void;

  constructor(onClick: () => void) {
    this.onClick = onClick;
  }
}
