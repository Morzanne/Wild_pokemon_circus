import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(private http:HttpClient) { }

  createPok(pokemon:Object):Observable<Object>{
    return this.http.post("http://localhost:8080/pokemons", pokemon)
  }

  getAllPokemon():Observable<any>{
    return this.http.get("http://localhost:8080/pokemons");
  }

  deletePokemon(id:number): Observable<any>{
    return this.http.delete("http://localhost:8080/pokemons/"+id);
  }
}
