package com.pwc.poke_circus.repositories;

import com.pwc.poke_circus.entities.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TypeDAO extends JpaRepository<Type, Long> {

    List<Type> findByName(String text);
}
