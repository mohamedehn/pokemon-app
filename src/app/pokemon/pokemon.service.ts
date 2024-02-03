import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap(response => this.log(response)),
      catchError((error => this.handleError(error, [])))
    );
  }

  searchPokemonList(searchTerm: string): Observable<Pokemon[]> {
    if(searchTerm.length <= 1) {
      return of([]);
    }
    return this.http.get<Pokemon[]>(`api/pokemons/?name=${searchTerm}`).pipe(
      tap(response => this.log(response)),
      catchError((error => this.handleError(error, undefined)))
    );
  }

  getPokemonById(pokemonId: number): Observable <Pokemon | undefined>{
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap(response => this.log(response)),
      catchError((error => this.handleError(error, [])))
    );
  }

  getPokemonTypeList(): string[] {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy' ]
  }

  private log(response: Pokemon | Pokemon[] | undefined) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
   const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap(response => this.log(response)),
      catchError((error => this.handleError(error, pokemon)))
    );
  }

  deletePokemonById(pokemonId: number): Observable <any> {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response: any) => this.log(response)),
      catchError((error => this.handleError(error, null)))
    );
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
     };
     return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
       tap(response => this.log(response)),
       catchError((error => this.handleError(error, pokemon)))
     );
   }
}
