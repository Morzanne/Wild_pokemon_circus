import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonServiceService } from '../pokemon-service.service';
import { Pokemon } from '../pokemon';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: PokemonServiceService) { }

  public pokeArray: Pokemon[] = []
  public typeArray: Pokemon[] = []

  getAllPokemon() {
    this.http.getAllPokemon().subscribe((res: Pokemon[]) => {
      this.pokeArray = res
    })
  }
  ngOnInit() {
    this.route.params.subscribe(
      (param: any) => {
        const type = <string>param['type'];
        console.log(type)
        switch (type) {
          case "Water":
            this.http.getAllPokemon().subscribe((res: Pokemon[]) => {
              this.typeArray = res.filter(
                (currentData) => currentData.type.name == "Water"
              )
            }
            )
            break;
          case "Fire":
            this.http.getAllPokemon().subscribe((res: Pokemon[]) => {
              this.typeArray = res.filter(
                (currentData) => currentData.type.name == "Fire"
              )
            }
            )
            break;
          case "Grass":
            this.http.getAllPokemon().subscribe((res: Pokemon[]) => {
              this.typeArray = res.filter(
                (currentData) => currentData.type.name == "Grass"
              )
            }
            )
            break;
        }
        console.log(this.typeArray)
        return this.typeArray
      }
    )
  }

}
