import {Component} from "@angular/core";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {NgForOf} from "@angular/common";
import {MatFormField, MatInput, MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";

@Component({
  standalone: true,
  styleUrl: './form-field-tests.component.css',
  imports: [
    MatSlideToggleModule,
    MatButtonModule,
    NgForOf,
    MatInput,
    MatInputModule,
    MatFormField,
    FormsModule,
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  selector: 'app-root',
  templateUrl: './form-field-tests.component.html',
})
export class FormFieldTestsComponent {
  message = 'Teste pra inverter a posição';
  formFieldItems: FormFieldData[];

  constructor() {
    this.formFieldItems = [
      {placeHolder: 'Campo 1', text: ''},
      {placeHolder: 'Campo 2', text: ''},
    ];
  }

  onClickInvert() {
    this.formFieldItems.reverse();
  }
}

export class FormFieldData {
  placeHolder: string = '';
  text: string = '';
}
