import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProdComponent } from './create-prod/create-prod.component';
import { HeaderComponent } from './header/header.component';
import { AdminPagesComponent } from './admin-pages/admin-pages.component';
import { PokemonAdminComponent } from './pokemon-admin/pokemon-admin.component';
import { TypeAdminComponent } from './type-admin/type-admin.component';
import { TypesNavComponent } from './types-nav/types-nav.component';
import { PokemonsComponent } from './pokemons/pokemons.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProdComponent,
    HeaderComponent,
    AdminPagesComponent,
    PokemonAdminComponent,
    TypeAdminComponent,
    TypesNavComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
