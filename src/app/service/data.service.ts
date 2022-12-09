import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient){}

  //Obtener pokemons
  getPokemons(limit: number, offset: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  }

  //Obtener mas pokemones
  getMasData(name: String){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
