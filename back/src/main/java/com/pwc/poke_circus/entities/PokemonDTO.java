package com.pwc.poke_circus.entities;

public class PokemonDTO {
  public PokemonDTO(){}

  private String name;
  private String image;
  private Long typeId;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getImage() {
    return image;
  }

  public void setImage(String image) {
    this.image = image;
  }

  public Long getTypeId() {
    return typeId;
  }

  public void setTypeId(Long typeId) {
    this.typeId = typeId;
  }
}

