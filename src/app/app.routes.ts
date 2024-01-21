import {Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {FormFieldTestsComponent} from "./components/form-field-tests/form-field-tests.component";

export const FORM_FIELD_ROUTE = 'form-field-tests';
export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: FORM_FIELD_ROUTE, component: FormFieldTestsComponent}
];
