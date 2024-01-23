import {Component} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {Router} from "@angular/router";
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-http-request-tests',
  standalone: true,
  imports: [
    HttpClientModule,
    MatFabButton,
    MatIcon,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './http-request-tests.component.html',
  styleUrl: './http-request-tests.component.css'
})
export class HttpRequestTestsComponent {

  dogs: Dog[] = [];

  constructor(private router: Router) {
    this.findDogs();
  }

  url = "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10";

  headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "api_key=live_zlbZgbSO5cnkdK3J3WzbeAgQed7Z0A05WhlJq5iZdh0yrjbk1z6KQxeRLv1A6rLi"
  });


  findDogs() {
    let requestOptions: RequestInit = {
      method: 'GET',
      headers: this.headers,
    };
    fetch(this.url, requestOptions)
      .then(response => response.json())
      .then(data => {
        this.dogs = data.map((item: any) => {
          return new Dog(item.id, item.url);
        });
      })
      .catch(error => console.log('error', error));
  }

  onClickBack() {
    this.router.navigate(['..']).then(r => true);
  }
}

export class Dog {
  id: string;
  url: string;

  constructor(id: string, url: string) {
    this.id = id;
    this.url = url;
  }
}
