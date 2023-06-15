import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list'; // on importe nos listes de pokémons contenant toute les données
import { Pokemon } from './pokemon'; // permet d'importer le modèle

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html' //sépare le template (vue) de la logique (typescript pour faire tourner le component), sur un fichier dédié
})
export class AppComponent implements OnInit{
  pokemonList : Pokemon [] = POKEMONS

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(event : MouseEvent){
    const index : number = +(event.target as HTMLInputElement).value // permet de travailler dans la class du component
    console.log(`Vous avez cliqué sur le pokémon ${this.pokemonList[index].name}`);
    
  } // déclare une méthode qui permet d'intéragir directement avec les évènements qu'aura entrer l'utilisateur dans le input du template
}
