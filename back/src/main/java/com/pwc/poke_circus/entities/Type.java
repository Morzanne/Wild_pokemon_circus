package com.pwc.poke_circus.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Type {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;

  @JsonBackReference
  @OneToMany(cascade = CascadeType.ALL,
    orphanRemoval = true,
    mappedBy="type")
  private List<Pokemon> pokemons = new ArrayList<Pokemon>();

  public Type(){}

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public List<Pokemon> getPokemons() {
    return pokemons;
  }

  public void setPokemons(List<Pokemon> pokemons) {
    this.pokemons = pokemons;
  }
}
