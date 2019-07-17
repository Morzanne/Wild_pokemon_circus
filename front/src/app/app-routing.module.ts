import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProdComponent } from './create-prod/create-prod.component'
import { HeaderComponent } from './header/header.component';
import { AdminPagesComponent } from './admin-pages/admin-pages.component';
import { PokemonAdminComponent } from './pokemon-admin/pokemon-admin.component';
import { TypeAdminComponent } from './type-admin/type-admin.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { TypesNavComponent } from './types-nav/types-nav.component';

const routes: Routes = [
  {
    path: 'admin-pages', component: AdminPagesComponent, children: [
      { path: "poke-admin", component: PokemonAdminComponent },
      { path: "type-admin", component: TypeAdminComponent }
    ]
  },
  { path: 'home', component: HeaderComponent },
  { path: "pokemon", component: PokemonsComponent },
  { path: 'pokemon/:type', component: PokemonsComponent },
  { path: 'typesnav', component: TypesNavComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
