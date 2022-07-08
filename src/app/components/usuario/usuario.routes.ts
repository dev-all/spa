import {  Routes, Route } from '@angular/router';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { UsuarioDetalleComponent } from './usuario-detalle.component';
import { UsuarioGmailComponent } from './usuario-gmail.component';

export const USUARIO_ROUTES: Routes = [
    { path: 'nuevo', component: UsuarioNuevoComponent },
    { path: 'editar', component: UsuarioEditarComponent },
    { path: 'detalle', component: UsuarioDetalleComponent },
    { path: 'gmail', component: UsuarioGmailComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }
]
