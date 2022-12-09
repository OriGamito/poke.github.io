import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];
  filterPost = '';
  page = 0;
  totalPokemons: number = 0;

  constructor(private dataService: DataService) { }

 


  ngOnInit(): void {
    this.getPokemons();
  }
 
  getPokemons() {
    this.dataService.getPokemons(500, this.page + 0)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;

        response.results.forEach((result: { name: String; }) => {
          this.dataService.getMasData(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
              //console.log(this.pokemons);
            });
        });
      });
  }

}

