import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // properties

  private heroNames:(string)[] = ['spiderman', 'batman', 'thor', 'hulk', 'ironman'];
  private heroName?:string;

  // geters and seters

  get HeroNames():string[]{
    return this.heroNames;
  }

  set HeroName(value:(string|undefined)){
    this.heroName = value;
  }

  get HeroName():(string|undefined){
    return this.heroName;
  }

  // methods

  public removeLastHero():void{
    this.HeroName = this.HeroNames.pop();
  }
}
