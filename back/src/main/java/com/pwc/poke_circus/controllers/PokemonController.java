package com.pwc.poke_circus.controllers;


import com.pwc.poke_circus.entities.Pokemon;
import com.pwc.poke_circus.entities.PokemonDTO;
import com.pwc.poke_circus.entities.Type;
import com.pwc.poke_circus.repositories.PokemonDAO;
import com.pwc.poke_circus.repositories.TypeDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class PokemonController {

  @Autowired
  private PokemonDAO dao;

  @Autowired
  private TypeDAO tdao;


  @GetMapping(value="/pokemons")
  public List<Pokemon> getAll(){
    return dao.findAll();
  }

  @GetMapping(value = "/pokemons/{id}")
  public Pokemon getById(@PathVariable("id") Long id){
      return dao.findById(id).get();
  }

  @PostMapping("/pokemons")
  public Pokemon create(@RequestBody PokemonDTO pokemon){
    Pokemon current = new Pokemon();
    current.setName(pokemon.getName());
    current.setImage(pokemon.getImage());

    Type type = tdao.findById(pokemon.getTypeId()).get();
    System.out.println(type);

    current.setType(type);

    return dao.save(current);
  }

  @PutMapping("/pokemons/{id}")
   public Pokemon update(@PathVariable("id") Long id, @RequestBody PokemonDTO pokemon) throws Exception{
    Pokemon current = dao.findById(id).get();
    current.setImage(pokemon.getImage());
    current.setName(pokemon.getName());

    Type type = tdao.findById(pokemon.getTypeId()).get();
    current.setType(type);
    return dao.save(current);
  }

  @DeleteMapping("/pokemons/{id}")
  public boolean delete(@PathVariable("id") Long id){
    dao.deleteById(id);
    return true;
  }

}
