import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list'; // on importe nos listes de pokémons contenant toute les données
import { Pokemon } from './pokemon'; // permet d'importer le modèle

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html' //sépare le template (vue) de la logique (typescript pour faire tourner le component), sur un fichier dédié
})
export class AppComponent implements OnInit{
  pokemonList : Pokemon [] = POKEMONS;
  pokemonSelected : Pokemon | undefined ;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId : string){
    // permettra l'affichage côté utilisateur plus tôt que côté dev, on utilise la méthode find pour vérifier si le pokemon a un ID
    const pokemon : Pokemon | undefined  = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    if(pokemon){ //on vérifie si le pokemon est trouvé
      console.log(`Vous avez demandé le pokémon ${pokemon.name}`); // dans ce cas on renvoi le nom du pokemon
      this.pokemonSelected = pokemon;
    }else{
      console.log(`Vous avez demandé un pokemon qui n'existe pas`); // Sinon on indique qu'on ne trouve pas
      this.pokemonSelected = pokemon;
    }
    
  } // déclare une méthode qui permet d'intéragir directement avec les évènements qu'aura entrer l'utilisateur dans le input du template
}
