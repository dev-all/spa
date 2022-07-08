
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import {USUARIO_ROUTES} from './components/usuario/usuario.routes';
import {GESTION_ROUTES} from './components/gestion/gestion.routes';
import { AuthGuardService } from './servicios/auth-guard.service';
import { from } from 'rxjs';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gestion',
   component: GestionComponent,
   children: GESTION_ROUTES },
   
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },

  { path: 'usuario/:id',
      component: UsuarioComponent,
      canActivate: [ AuthGuardService ],
      children: USUARIO_ROUTES },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: false });
