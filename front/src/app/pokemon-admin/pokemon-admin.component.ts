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
  pokemon:Pokemon = new Pokemon();
  pokIndex:number;
  pokIndex2:number;


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
      .subscribe(data =>{
        this.refreshTypeList()
      });
    this.pokemon = new Pokemon()
  }

  update(pro, form){
    form.controls['nameup'].setValue(pro.name)
    form.controls['typeup'].setValue(pro.type.id)
    form.controls['imageup'].setValue(pro.image)
    this.pokIndex=this.pokes.findIndex(x => x.name == pro.name);
    this.pokIndex2 = this.pokes[this.pokIndex].id
    
  }
  reUpdate(pro){
    this.http.updatePok(this.pokIndex2, pro).subscribe(data=>{
      this.refreshTypeList()
    });
    this.pokemon = new Pokemon()
  }
  delete(id:number){
    this.http.deletePokemon(id).subscribe(
      data=>{
        this.refreshTypeList()
      }
    )
  }

  onSubmit(){
    this.save();
    this.pokemon = new Pokemon()
  }
  onSub(){
  }
}
