import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

console.log(uuid);

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    { id: uuid(), name: 'Krillin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 7500 },
    { id: uuid(), name: 'Picoro', power: 5500 },
    { id: uuid(), name: 'Trunks', power: 7000 },
  ];

  public addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character};
    this.characters.push(newCharacter);
  }

  public deleteCharacterById(index: string ): void {
    // this.characters.splice(index,1);
    this.characters = this.characters.filter( character => character.id !== index);
  }
}
