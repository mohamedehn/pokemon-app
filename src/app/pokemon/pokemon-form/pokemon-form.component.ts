import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css'],
  styles: [
  ]
})
export class PokemonFormComponent implements OnInit{

  @Input() pokemon : Pokemon;
  types: string[];

  constructor(private pokemonService : PokemonService, private router : Router){}

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
  }


  hasType(type: string): boolean {
    return this.pokemon.types.includes(type)
  }

  selectType($event: Event, type: string){
    const isChecked : boolean = ($event.target as HTMLInputElement).checked;
    if(isChecked){
      this.pokemon.types.push(type)
    }else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  isTypesValid(type: string): boolean {
    //si une seule case coché on bloque la possibilité de décocher la seule case coché
    if(this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    }
    //si l'utilisateur à coché plus de 2 cases (donc 3), on le bloque car on autorisera 3 types maximum
    if(this.pokemon.types.length > 2 && !this.hasType(type)){
      return false;
    }
    return true;
  }

  onSubmit(){
    console.log('Submit form!');
    this.router.navigate(['/pokemon', this.pokemon.id])
  }

}
