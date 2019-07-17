package com.pwc.poke_circus.controllers;


import com.pwc.poke_circus.entities.Type;
import com.pwc.poke_circus.repositories.TypeDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class TypeController {

  @Autowired
  private TypeDAO dao;

  @GetMapping(value="/types")
  public List<Type> getAll(){
    return dao.findAll();
  }

  @GetMapping(value="/types/{id}")
  public Type getByid(@PathVariable ("id") Long id){
    return dao.findById(id).get();
  }

  @PostMapping("/types")
  public Type create(@RequestBody Type type){
    return dao.save(type);
  }

  @DeleteMapping("/types/{id}")
  public boolean delete (@PathVariable("id") Long id){
    dao.deleteById(id);
    return true;
  }

}
