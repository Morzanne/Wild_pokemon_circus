import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service'
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-admin',
  templateUrl: './pokemon-admin.component.html',
  styleUrls: ['./pokemon-admin.component.css']
})
export class PokemonAdminComponent implements OnInit {

  pokes:Pokemon[];
  pokemon:Pokemon = new Pokemon()


  constructor(private http: PokemonServiceService) { }

  ngOnInit() {
    this.http.getAllPokemon().subscribe(
      response => {this.pokes = response, console.log(response)}
    )

  }

  refreshTypeList() {
    this.http.getAllPokemon().subscribe(
      response => { this.pokes = response }
    )
  }

  save() {
    this.http.createPok(this.pokemon)
      .subscribe(data => data);
    this.pokemon = new Pokemon()
  }

  onSubmit(){
    this.save();
    this.pokemon = new Pokemon()
  }


  delete(id:number){
    this.http.deletePokemon(id).subscribe(
      data=>{
        this.refreshTypeList()
      }
    )
  }



}
