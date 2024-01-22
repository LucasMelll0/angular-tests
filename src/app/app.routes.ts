import {Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {FormFieldTestsComponent} from "./components/form-field-tests/form-field-tests.component";
import {HttpRequestTestsComponent} from "./components/http-request-tests/http-request-tests.component";

export const FORM_FIELD_ROUTE = 'form-field-tests';
export const HTTP_REQUEST_ROUTE = 'http-request-tests';
export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: FORM_FIELD_ROUTE, component: FormFieldTestsComponent},
  { path: HTTP_REQUEST_ROUTE, component: HttpRequestTestsComponent }
];
