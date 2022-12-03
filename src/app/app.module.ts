import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HeaderComponent } from './header/header.component';

import {MaterialModule} from '../app/material/material.module';
import {MatNativeDateModule} from '@angular/material/core';
import { BottonSheetComponent } from './components/botton-sheet/botton-sheet.component';
import { FiltroPokedexPipe } from './filtro-pokedex.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  
  declarations: [
    AppComponent,
    PokemonListComponent,
    HeaderComponent,
    BottonSheetComponent,
    FiltroPokedexPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    FormsModule,
  ],
  providers: [],
  entryComponents:[BottonSheetComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
