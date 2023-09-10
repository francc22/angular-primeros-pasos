import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  // listener
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  // Properties
  @Input()
  public characterList: Character[] = [];

  // Geters and Seters  --> consultar como acceder desde un componente padre usando geters.
  // set CharacterList(value: Character){
  //   this.characterList[0].name = value.name;
  //   this.characterList[0].power = value.power;
  // }

  // get CharacterList():Character[]{
  //   return this.CharacterList;
  // }

  // Methods

  public emitId(index?: string): void {
    if(!index) return;

    console.log(index);
    this.onDelete.emit(index);
  }
}
