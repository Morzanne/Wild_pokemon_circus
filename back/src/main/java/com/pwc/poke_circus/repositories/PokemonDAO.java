package com.pwc.poke_circus.repositories;

import com.pwc.poke_circus.entities.Pokemon;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PokemonDAO extends JpaRepository<Pokemon, Long> {
}
