import {  Routes, Route } from '@angular/router';
import { GestionComponent } from './gestion.component';
import { FormTemplateComponent } from './form-template.component';
import { FormDataComponent } from './form-data.component';

export const GESTION_ROUTES: Routes = [
    { path: 'gestion', component: GestionComponent },
    { path: 'fromTemplate', component: FormTemplateComponent },
    { path: 'fromData', component: FormDataComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'fromData' }
]
