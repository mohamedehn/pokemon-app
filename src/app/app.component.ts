import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list'; // on importe nos listes de pokémons contenant toute les données
import { Pokemon } from './pokemon'; // permet d'importer le modèle

@Component({
  selector: 'app-root',
  template: `<h1>Liste de Pokémons</h1>`
})
export class AppComponent implements OnInit{
  pokemonList : Pokemon [] = POKEMONS

  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]) //appelle la méthode
  }

  selectPokemon(pokemon : Pokemon){
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
    
  } // déclare une méthode 
}
