import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient){}

  //Obtener pokemons
  getPokemons() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=10')
  }

  //Obtener mas pokemones
  getMasData(name: String){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}
