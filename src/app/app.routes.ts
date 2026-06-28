import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home';
import { SobreComponent } from './Pages/sobre/sobre';
import { TrabalhosComponent } from './Pages/trabalhos/trabalhos';
import { ProdutosComponent } from './Pages/produtos/produtos';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'trabalhos', component: TrabalhosComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: '**', redirectTo: '' },
];
