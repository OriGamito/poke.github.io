import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottonSheetComponent } from '../components/botton-sheet/botton-sheet.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];
  filterPost = '';
  constructor(private dataService: DataService, private bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    this.bottomSheet.open(BottonSheetComponent);
  }


  ngOnInit(): void {

    this.dataService.getPokemons()
      .subscribe((response: any) => {
        response.results.forEach((result: { name: String; }) => {
          this.dataService.getMasData(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
              console.log(this.pokemons);
            });
        });
      });
  }

}

