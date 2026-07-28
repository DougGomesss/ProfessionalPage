import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home';
import { SobreComponent } from './Pages/sobre/sobre';
import { TrabalhosComponent } from './Pages/trabalhos/trabalhos';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'trabalhos', component: TrabalhosComponent },
  { path: '**', redirectTo: '' },
];
